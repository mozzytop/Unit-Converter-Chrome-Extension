'use strict';

// ──────────────── TEMPERATURE CONVERTERS ──────────────────
function toKelvin(val, unit) {
  switch (unit) {
    case 'Kelvin [K]':       return val;
    case 'Celsius [°C]':     return val + 273.15;
    case 'Fahrenheit [°F]':  return (val - 32) * 5/9 + 273.15;
    case 'Rankine [°R]':     return val * 5/9;
    case 'Reaumur [°Re]':    return val * 5/4 + 273.15;
    case 'Delisle [°De]':    return 373.15 - val * 2/3;
    case 'Newton [°N]':      return val * 100/33 + 273.15;
    case 'Rømer [°Rø]':      return (val - 7.5) * 40/21 + 273.15;
    default: return val;
  }
}
function fromKelvin(val, unit) {
  switch (unit) {
    case 'Kelvin [K]':       return val;
    case 'Celsius [°C]':     return val - 273.15;
    case 'Fahrenheit [°F]':  return (val - 273.15) * 9/5 + 32;
    case 'Rankine [°R]':     return val * 9/5;
    case 'Reaumur [°Re]':    return (val - 273.15) * 4/5;
    case 'Delisle [°De]':    return (373.15 - val) * 3/2;
    case 'Newton [°N]':      return (val - 273.15) * 33/100;
    case 'Rømer [°Rø]':      return (val - 273.15) * 21/40 + 7.5;
    default: return val;
  }
}

// ──────────────── SOUND CONVERTERS ──────────────────────
function toDecibel(val, unit) {
  switch (unit) {
    case 'Decibel [dB]':    return val;
    case 'Neper [Np]':      return val * 8.685889638;
    case 'Bel [B]':         return val * 10;
    case 'Millineper [mNp]':return val * 0.008685889638;
    default: return val;
  }
}
function fromDecibel(val, unit) {
  switch (unit) {
    case 'Decibel [dB]':    return val;
    case 'Neper [Np]':      return val / 8.685889638;
    case 'Bel [B]':         return val / 10;
    case 'Millineper [mNp]':return val / 0.008685889638;
    default: return val;
  }
}

// ──────────────── FORMAT NUMBER ──────────────────────
function formatNum(n) {
  if (n === null || n === undefined || isNaN(n)) return '';
  if (!isFinite(n)) return n > 0 ? '∞' : '-∞';
  const abs = Math.abs(n);
  if (abs === 0) return '0';
  if (abs >= 0.0001 && abs < 1e15) {
    // Use toPrecision to get significant figures, then remove trailing zeros
    let s = parseFloat(n.toPrecision(10)).toString();
    return s;
  }
  return n.toExponential(6).replace(/\.?0+e/, 'e');
}

// ──────────────── CORE CONVERSION ──────────────────────
function convert(value, fromUnit, toUnit, category) {
  if (value === '' || value === null || isNaN(value)) return '';
  const v = parseFloat(value);
  const cat = UNITS[category];
  if (!cat) return '';

  if (cat.special && category === 'Temperature') {
    const kelvin = toKelvin(v, fromUnit);
    return fromKelvin(kelvin, toUnit);
  }

  if (cat.special && category === 'Other - Sound') {
    const db = toDecibel(v, fromUnit);
    return fromDecibel(db, toUnit);
  }

  const unitMap = cat.units;
  const fromFactor = unitMap[fromUnit];
  const toFactor = unitMap[toUnit];
  if (fromFactor === undefined || toFactor === undefined) return '';

  // Convert from unit → base → to unit
  const baseValue = v * fromFactor;
  return baseValue / toFactor;
}

// ──────────────── DOM ELEMENTS ──────────────────────
const categorySearch  = document.getElementById('categorySearch');
const categorySelect  = document.getElementById('categorySelect');
const fromSearch      = document.getElementById('fromSearch');
const toSearch        = document.getElementById('toSearch');
const fromUnit        = document.getElementById('fromUnit');
const toUnit          = document.getElementById('toUnit');
const fromValue       = document.getElementById('fromValue');
const toValue         = document.getElementById('toValue');
const swapBtn         = document.getElementById('swapBtn');
const formulaBar      = document.getElementById('formulaBar');
const commonDiv       = document.getElementById('commonConversions');

let currentCategory = CATEGORIES[0];
let fromOptions = [];  // full list of options for FROM
let toOptions   = [];  // full list of options for TO

// ──────────────── POPULATE CATEGORIES ──────────────────────
function populateCategories(filter = '') {
  categorySelect.innerHTML = '';
  const filtered = filter
    ? CATEGORIES.filter(c => c.toLowerCase().includes(filter.toLowerCase()))
    : CATEGORIES;

  filtered.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    if (cat === currentCategory) opt.selected = true;
    categorySelect.appendChild(opt);
  });

  if (!filtered.includes(currentCategory) && filtered.length > 0) {
    currentCategory = filtered[0];
    categorySelect.value = currentCategory;
    populateUnits();
  }
}

// ──────────────── POPULATE UNITS ──────────────────────
function getUnitList(category) {
  const cat = UNITS[category];
  if (!cat) return [];
  if (cat.special && Array.isArray(cat.units)) return cat.units;
  return Object.keys(cat.units);
}

function populateUnits() {
  const allUnits = getUnitList(currentCategory);
  fromOptions = allUnits;
  toOptions   = allUnits;
  renderUnitSelect(fromUnit, fromOptions, 0);
  renderUnitSelect(toUnit,   toOptions,   1);
  updateConversion();
  updateCommonConversions();
}

function renderUnitSelect(selectEl, options, defaultIdx) {
  const current = selectEl.value;
  selectEl.innerHTML = '';
  options.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u;
    opt.textContent = u;
    selectEl.appendChild(opt);
  });
  // Try restore previous selection
  if (current && options.includes(current)) {
    selectEl.value = current;
  } else if (options.length > defaultIdx) {
    selectEl.selectedIndex = defaultIdx;
  }
}

function filterUnits(selectEl, allUnits, query) {
  const filtered = query
    ? allUnits.filter(u => u.toLowerCase().includes(query.toLowerCase()))
    : allUnits;
  const current = selectEl.value;
  selectEl.innerHTML = '';
  filtered.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u;
    opt.textContent = u;
    selectEl.appendChild(opt);
  });
  if (current && filtered.includes(current)) {
    selectEl.value = current;
  } else if (filtered.length > 0) {
    selectEl.selectedIndex = 0;
  }
  updateConversion();
}

// ──────────────── CONVERSION UPDATE ──────────────────────
function updateConversion() {
  const from = fromUnit.value;
  const to   = toUnit.value;
  const val  = fromValue.value;

  if (!val || !from || !to) {
    toValue.value = '';
    formulaBar.innerHTML = '';
    return;
  }

  const result = convert(val, from, to, currentCategory);
  if (result === '' || result === null || isNaN(result)) {
    toValue.value = '';
    formulaBar.innerHTML = '';
    return;
  }

  toValue.value = formatNum(result);

  // formula display
  const formatted = formatNum(parseFloat(val));
  const resFormatted = formatNum(result);
  formulaBar.innerHTML =
    `<span class="accent">${formatted}</span>&nbsp;${escHtml(from)}&nbsp;=&nbsp;<span class="accent">${resFormatted}</span>&nbsp;${escHtml(to)}`;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ──────────────── REVERSE CONVERSION ──────────────────────
function updateReverseConversion() {
  const from = fromUnit.value;
  const to   = toUnit.value;
  const val  = toValue.value;

  if (!val || !from || !to) {
    fromValue.value = '';
    formulaBar.innerHTML = '';
    return;
  }

  const result = convert(val, to, from, currentCategory);
  if (result === '' || result === null || isNaN(result)) {
    fromValue.value = '';
    formulaBar.innerHTML = '';
    return;
  }

  fromValue.value = formatNum(result);
  const formatted = formatNum(parseFloat(val));
  const resFormatted = formatNum(result);
  formulaBar.innerHTML =
    `<span class="accent">${formatted}</span>&nbsp;${escHtml(to)}&nbsp;=&nbsp;<span class="accent">${resFormatted}</span>&nbsp;${escHtml(from)}`;
}

// ──────────────── COMMON CONVERSIONS ──────────────────────
const COMMON_CONVERSIONS = {
  'Length':         ['Meter [m]','Foot [ft]','Inch [in]','Kilometer [km]','Mile [mi]','Centimeter [cm]'],
  'Weight & Mass':  ['Kilogram [kg]','Pound [lbs]','Ounce [oz]','Gram [g]','Ton (metric) [t]','Stone (UK)'],
  'Temperature':    ['Celsius [°C]','Fahrenheit [°F]','Kelvin [K]'],
  'Volume':         ['Liter [L]','Gallon (US)','Milliliter [mL]','Cubic Foot [ft³]','Fluid Ounce (US)','Pint (US)'],
  'Area':           ['Square Meter [m²]','Square Foot [ft²]','Acre [ac]','Hectare [ha]','Square Mile [mi²]','Square Kilometer [km²]'],
  'Speed':          ['Meter/second [m/s]','Kilometer/hour [km/h]','Mile/hour [mph]','Knot [kt]','Foot/second [ft/s]'],
  'Data Storage':   ['Byte [B]','Kilobyte [kB]','Megabyte [MB]','Gigabyte [GB]','Terabyte [TB]'],
  'Pressure':       ['Pascal [Pa]','Bar','Psi [psi]','Standard Atmosphere [atm]','Millimeter Mercury (0°C) [mmHg]'],
  'Energy':         ['Joule [J]','Kilowatt-hour [kW·h]','Calorie (nutritional)','Btu (IT)','Electron-volt [eV]'],
  'Power':          ['Watt [W]','Kilowatt [kW]','Horsepower','Btu (IT)/hour','Megawatt [MW]'],
};

function updateCommonConversions() {
  const from = fromUnit.value;
  const val  = fromValue.value;
  const suggestions = COMMON_CONVERSIONS[currentCategory];

  if (!suggestions || !val || !from) {
    commonDiv.classList.remove('visible');
    commonDiv.innerHTML = '';
    return;
  }

  const targets = suggestions.filter(u => u !== from).slice(0, 5);
  if (targets.length === 0) {
    commonDiv.classList.remove('visible');
    return;
  }

  commonDiv.innerHTML = '<div class="common-title">Quick Reference</div>';
  targets.forEach(target => {
    const result = convert(parseFloat(val), from, target, currentCategory);
    if (result === '' || isNaN(result)) return;
    const row = document.createElement('div');
    row.className = 'common-row';
    row.innerHTML = `<span class="unit-label">${escHtml(target)}</span><span class="unit-value">${formatNum(result)}</span>`;
    row.addEventListener('click', () => {
      toUnit.value = target;
      updateConversion();
    });
    commonDiv.appendChild(row);
  });
  commonDiv.classList.add('visible');
}

// ──────────────── EVENT LISTENERS ──────────────────────

// Category search
categorySearch.addEventListener('input', () => {
  populateCategories(categorySearch.value);
});

// Category change
categorySelect.addEventListener('change', () => {
  currentCategory = categorySelect.value;
  fromSearch.value = '';
  toSearch.value   = '';
  populateUnits();
});

// Unit search filters
fromSearch.addEventListener('input', () => {
  filterUnits(fromUnit, fromOptions, fromSearch.value);
});
toSearch.addEventListener('input', () => {
  filterUnits(toUnit, toOptions, toSearch.value);
});

// Unit selects
fromUnit.addEventListener('change', () => {
  updateConversion();
  updateCommonConversions();
});
toUnit.addEventListener('change', () => {
  updateConversion();
  updateCommonConversions();
});

// Value inputs
fromValue.addEventListener('input', () => {
  updateConversion();
  updateCommonConversions();
});
toValue.addEventListener('input', updateReverseConversion);

// Swap button
swapBtn.addEventListener('click', () => {
  const tempUnit  = fromUnit.value;
  const tempVal   = fromValue.value;
  const tempSearch = fromSearch.value;

  fromUnit.value   = toUnit.value;
  toUnit.value     = tempUnit;
  fromValue.value  = toValue.value;
  fromSearch.value = toSearch.value;
  toSearch.value   = tempSearch;

  updateConversion();
  updateCommonConversions();
});

// ──────────────── INIT ──────────────────────
(function init() {
  // Restore state from sessionStorage if available
  try {
    const saved = sessionStorage.getItem('uc_state');
    if (saved) {
      const s = JSON.parse(saved);
      if (s.category && UNITS[s.category]) currentCategory = s.category;
    }
  } catch(e) {}

  populateCategories();
  categorySelect.value = currentCategory;
  populateUnits();

  // Try restore unit selections
  try {
    const saved = sessionStorage.getItem('uc_state');
    if (saved) {
      const s = JSON.parse(saved);
      if (s.from && fromUnit.querySelector(`option[value="${s.from}"]`)) fromUnit.value = s.from;
      if (s.to   && toUnit.querySelector(`option[value="${s.to}"]`))     toUnit.value   = s.to;
      if (s.val) { fromValue.value = s.val; updateConversion(); }
    }
  } catch(e) {}

  // Save state on changes
  function saveState() {
    try {
      sessionStorage.setItem('uc_state', JSON.stringify({
        category: currentCategory,
        from: fromUnit.value,
        to:   toUnit.value,
        val:  fromValue.value
      }));
    } catch(e) {}
  }
  fromValue.addEventListener('input', saveState);
  fromUnit.addEventListener('change', saveState);
  toUnit.addEventListener('change', saveState);
  categorySelect.addEventListener('change', saveState);
})();
