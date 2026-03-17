const CATEGORIES = [
  "Length","Weight & Mass","Volume","Temperature","Area","Pressure","Energy","Power",
  "Force","Time","Speed","Angle","Fuel Consumption","Data Storage",
  "Angular Velocity","Acceleration","Angular Acceleration","Density","Specific Volume",
  "Moment of Inertia","Moment of Force","Torque",
  "Heat - Fuel Efficiency (Mass)","Heat - Fuel Efficiency (Volume)","Heat - Temperature Interval",
  "Heat - Thermal Resistance","Heat - Thermal Conductivity","Heat - Specific Heat Capacity",
  "Heat - Heat Flux Density","Heat - Heat Transfer Coefficient",
  "Fluids - Flow","Fluids - Flow (Mass)","Fluids - Viscosity (Dynamic)","Fluids - Viscosity (Kinematic)",
  "Fluids - Surface Tension","Fluids - Concentration (Molar)",
  "Light - Luminance","Light - Luminous Intensity","Light - Illumination",
  "Light - Digital Image Resolution","Light - Frequency Wavelength",
  "Electricity - Charge","Electricity - Current","Electricity - Electric Potential",
  "Electricity - Electric Resistance","Electricity - Electric Conductance",
  "Electricity - Capacitance","Electricity - Inductance",
  "Magnetism - Magnetic Field Strength","Magnetism - Magnetic Flux","Magnetism - Magnetic Flux Density",
  "Radiology - Radiation","Radiology - Radiation Activity","Radiology - Radiation Absorbed Dose",
  "Other - Prefixes","Other - Data Transfer","Other - Sound","Other - Typography"
];

const UNITS = {

"Length": {
  base: "Meter [m]",
  units: {
    "Meter [m]":1,"Kilometer [km]":1000,"Decimeter [dm]":0.1,"Centimeter [cm]":0.01,
    "Millimeter [mm]":0.001,"Micrometer [µm]":1e-6,"Nanometer [nm]":1e-9,"Picometer [pm]":1e-12,
    "Femtometer [fm]":1e-15,"Attometer [am]":1e-18,"Mile [mi]":1609.344,"Yard [yd]":0.9144,
    "Foot [ft]":0.3048,"Inch [in]":0.0254,"Light Year [ly]":9.46073047258e15,
    "Exameter [Em]":1e18,"Petameter [Pm]":1e15,"Terameter [Tm]":1e12,"Gigameter [Gm]":1e9,
    "Megameter [Mm]":1e6,"Hectometer [hm]":100,"Dekameter [dam]":10,"Micron [µ]":1e-6,
    "Megaparsec [Mpc]":3.08567758128e22,"Kiloparsec [kpc]":3.08567758128e19,
    "Parsec [pc]":3.08567758128e16,"Astronomical Unit [AU]":1.495978707e11,
    "League [lea]":4828.032,"Nautical League":5556,"Nautical Mile":1852,
    "Furlong [fur]":201.168,"Chain [ch]":20.1168,"Rod [rd]":5.0292,
    "Fathom [fth]":1.8288,"Cubit (UK)":0.4572,"Hand":0.1016,"Span (cloth)":0.2286,
    "Finger (cloth)":0.1143,"Barleycorn":0.00846667,"Mil [mil]":2.54e-5,
    "Microinch":2.54e-8,"Angstrom [Å]":1e-10,"Fermi":1e-15,"Pica":0.00423333,
    "Point":0.000352778,"Twip":1.76389e-5,"Ell":1.143,"Rope":6.096
  }
},

"Weight & Mass": {
  base: "Kilogram [kg]",
  units: {
    "Kilogram [kg]":1,"Gram [g]":0.001,"Milligram [mg]":1e-6,"Microgram [µg]":1e-9,
    "Ton (metric) [t]":1000,"Pound [lbs]":0.45359237,"Ounce [oz]":0.0283495231,
    "Carat [ct]":0.0002,"Ton (short) [US ton]":907.18474,"Ton (long) [UK ton]":1016.0469088,
    "Atomic Mass Unit [u]":1.6605402e-27,"Exagram [Eg]":1e15,"Petagram [Pg]":1e12,
    "Teragram [Tg]":1e9,"Gigagram [Gg]":1e6,"Megagram [Mg]":1000,"Hectogram [hg]":0.1,
    "Dekagram [dag]":0.01,"Decigram [dg]":0.0001,"Centigram [cg]":1e-5,
    "Nanogram [ng]":1e-12,"Picogram [pg]":1e-15,"Femtogram [fg]":1e-18,
    "Dalton":1.66053e-27,"Kilopound [kip]":453.59237,"Slug":14.5939029372,
    "Pound (troy)":0.3732417216,"Poundal [pdl]":0.0140867196,
    "Kiloton (metric)":1e6,"Quintal (metric)":100,
    "Hundredweight (US)":45.359237,"Hundredweight (UK)":50.80234544,
    "Stone (UK)":6.35029318,"Pennyweight [dwt]":0.00155517384,
    "Grain [gr]":6.479891e-5,"Gamma":1e-9,
    "Electron Mass":9.10938e-31,"Proton Mass":1.67262e-27,"Neutron Mass":1.67493e-27
  }
},

"Volume": {
  base: "Cubic Meter [m³]",
  units: {
    "Cubic Meter [m³]":1,"Cubic Kilometer [km³]":1e9,"Cubic Centimeter [cm³]":1e-6,
    "Cubic Millimeter [mm³]":1e-9,"Liter [L]":0.001,"Milliliter [mL]":1e-6,
    "Microliter [µL]":1e-9,"Gallon (US)":0.0037854118,"Quart (US)":0.0009463529,
    "Pint (US)":0.0004731765,"Cup (US)":0.0002365882,"Tablespoon (US)":1.47868e-5,
    "Teaspoon (US)":4.92892e-6,"Cubic Mile [mi³]":4168181825.44,"Cubic Yard [yd³]":0.764554858,
    "Cubic Foot [ft³]":0.0283168466,"Cubic Inch [in³]":1.63871e-5,
    "Cubic Decimeter [dm³]":0.001,"Exaliter [EL]":1e15,"Petaliter [PL]":1e12,
    "Teraliter [TL]":1e9,"Gigaliter [GL]":1e6,"Megaliter [ML]":1000,"Kiloliter [kL]":1,
    "Hectoliter [hL]":0.1,"Dekaliter [daL]":0.01,"Deciliter [dL]":0.0001,
    "Centiliter [cL]":1e-5,"Nanoliter [nL]":1e-12,"Gallon (UK)":0.00454609,
    "Quart (UK)":0.0011365225,"Pint (UK)":0.00056826125,"Cup (metric)":0.00025,
    "Cup (UK)":0.000284131,"Fluid Ounce (US)":2.95735e-5,"Fluid Ounce (UK)":2.84131e-5,
    "Tablespoon (metric)":1.5e-5,"Teaspoon (metric)":5e-6,"Teaspoon (UK)":5.91939e-6,
    "Gill (US)":0.000118294,"Gill (UK)":0.000142065,
    "Barrel (oil)":0.158987295,"Barrel (US)":0.119240471,"Barrel (UK)":0.16365924,
    "Drop":5e-8,"Acre-Foot":1233.48184,"Acre-Inch":102.79015,
    "Bushel (US)":0.03523907,"Bushel (UK)":0.03636872,
    "Peck (US)":0.008809768,"Peck (UK)":0.009092180,"Hogshead":0.238481
  }
},

"Temperature": {
  base: "Kelvin [K]",
  special: true,
  units: ["Kelvin [K]","Celsius [°C]","Fahrenheit [°F]","Rankine [°R]","Reaumur [°Re]","Delisle [°De]","Newton [°N]","Rømer [°Rø]"]
},

"Area": {
  base: "Square Meter [m²]",
  units: {
    "Square Meter [m²]":1,"Square Kilometer [km²]":1e6,"Square Centimeter [cm²]":1e-4,
    "Square Millimeter [mm²]":1e-6,"Square Micrometer [µm²]":1e-12,
    "Hectare [ha]":10000,"Acre [ac]":4046.8564224,"Square Mile [mi²]":2589988.110336,
    "Square Yard [yd²]":0.83612736,"Square Foot [ft²]":0.09290304,"Square Inch [in²]":6.4516e-4,
    "Square Hectometer [hm²]":10000,"Square Dekameter [dam²]":100,"Square Decimeter [dm²]":0.01,
    "Square Nanometer [nm²]":1e-18,"Are [a]":100,"Barn [b]":1e-28,
    "Square Mile (US survey)":2589998.4703195,"Square Foot (US survey)":0.0929034116,
    "Circular Inch":5.0671e-4,"Township":93239944.9,"Section":2589988.110336,
    "Acre (US survey)":4046.8726099,"Rood":1011.7141056,"Square Chain":404.68564224,
    "Square Rod":25.29285264,"Square Mil":6.4516e-10,"Circular Mil":5.06707e-10,
    "Homestead":647497.028,"Sabin":0.09290304,"Arpent":3418.89
  }
},

"Pressure": {
  base: "Pascal [Pa]",
  units: {
    "Pascal [Pa]":1,"Kilopascal [kPa]":1000,"Megapascal [MPa]":1e6,"Gigapascal [GPa]":1e9,
    "Bar":100000,"Millibar [mbar]":100,"Microbar [µbar]":0.1,
    "Psi [psi]":6894.757293168,"Ksi [ksi]":6894757.293168,
    "Standard Atmosphere [atm]":101325,"Technical Atmosphere [at]":98066.5,
    "Exapascal [EPa]":1e18,"Petapascal [PPa]":1e15,"Terapascal [TPa]":1e12,
    "Hectopascal [hPa]":100,"Dekapascal [daPa]":10,"Decipascal [dPa]":0.1,
    "Centipascal [cPa]":0.01,"Millipascal [mPa]":0.001,"Micropascal [µPa]":1e-6,
    "Dyne/sq cm":0.1,"Kilogram-force/sq m":9.80665,"Kilogram-force/sq cm":98066.5,
    "Gram-force/sq cm":98.0665,
    "Pound-force/sq foot [psf]":47.8802589804,"Pound-force/sq inch [psi]":6894.757293168,
    "Poundal/sq foot":1.48816394357,
    "Torr [Torr]":133.3223684211,"Millimeter Mercury (0°C) [mmHg]":133.322,
    "Centimeter Mercury (0°C)":1333.22,"Inch Mercury (32°F) [inHg]":3386.389,
    "Millimeter Water (4°C)":9.80638,"Centimeter Water (4°C)":98.0638,
    "Inch Water (4°C) [inAq]":249.082,"Foot Water (4°C) [ftAq]":2988.98
  }
},

"Energy": {
  base: "Joule [J]",
  units: {
    "Joule [J]":1,"Kilojoule [kJ]":1000,"Megajoule [MJ]":1e6,"Gigajoule [GJ]":1e9,
    "Millijoule [mJ]":0.001,"Microjoule [µJ]":1e-6,"Nanojoule [nJ]":1e-9,
    "Kilowatt-hour [kW·h]":3600000,"Megawatt-hour [MW·h]":3.6e9,"Gigawatt-hour [GW·h]":3.6e12,
    "Watt-hour [W·h]":3600,"Calorie (nutritional)":4186.8,"Kilocalorie (IT)":4186.8,
    "Kilocalorie (th)":4184,"Calorie (IT)":4.1868,"Calorie (th)":4.184,
    "Horsepower-hour":2684519.5377,"Btu (IT)":1055.05585262,"Btu (th)":1054.35,
    "Mega Btu (IT)":1055055852.62,"Electron-volt [eV]":1.60218e-19,
    "Kiloelectron-volt [keV]":1.60218e-16,"Megaelectron-volt [MeV]":1.60218e-13,
    "Erg":1e-7,"Dyne Centimeter":1e-7,"Gram-force Meter":0.00980665,
    "Kilogram-force Meter":9.80665,"Pound-force Foot":1.3558179483,
    "Pound-force Inch":0.1129848290,"Foot-pound":1.3558179483,
    "Therm":105505585.262,"Therm (US)":105480400,
    "Ton (explosives)":4.184e9,"Kiloton":4.184e12,"Megaton":4.184e15,
    "Hartree Energy":4.35975e-18
  }
},

"Power": {
  base: "Watt [W]",
  units: {
    "Watt [W]":1,"Kilowatt [kW]":1000,"Megawatt [MW]":1e6,"Gigawatt [GW]":1e9,
    "Terawatt [TW]":1e12,"Petawatt [PW]":1e15,"Milliwatt [mW]":0.001,
    "Microwatt [µW]":1e-6,"Nanowatt [nW]":1e-9,"Picowatt [pW]":1e-12,
    "Hectowatt [hW]":100,"Dekawatt [daW]":10,"Deciwatt [dW]":0.1,"Centiwatt [cW]":0.01,
    "Horsepower":745.69987158,"Horsepower (metric)":735.49875,
    "Horsepower (boiler)":9809.5,"Horsepower (electric)":746,
    "Btu (IT)/hour":0.29307107017,"Btu (IT)/minute":17.5842642103,"Btu (IT)/second":1055.05585262,
    "Ton (refrigeration)":3516.8528421,"Kilocalorie (IT)/hour":1.163,
    "Kilocalorie (IT)/minute":69.78,"Calorie (IT)/second":4.1868,
    "Foot Pound-force/second":1.3558179483,"Foot Pound-force/minute":0.022596965842,
    "Foot Pound-force/hour":0.000376616097,"Erg/second":1e-7,
    "Kilovolt Ampere [kV·A]":1000,"Volt Ampere [V·A]":1,"Joule/second":1,
    "Joule/hour":0.000277778,"Kilojoule/hour":0.277778
  }
},

"Force": {
  base: "Newton [N]",
  units: {
    "Newton [N]":1,"Kilonewton [kN]":1000,"Meganewton [MN]":1e6,"Giganewton [GN]":1e9,
    "Millinewton [mN]":0.001,"Micronewton [µN]":1e-6,"Nanonewton [nN]":1e-9,
    "Hectonewton [hN]":100,"Dekanewton [daN]":10,"Decinewton [dN]":0.1,"Centinewton [cN]":0.01,
    "Gram-force [gf]":0.00980665,"Kilogram-force [kgf]":9.80665,"Ton-force (metric)":9806.65,
    "Dyne [dyn]":1e-5,"Joule/meter [J/m]":1,"Joule/centimeter":100,
    "Ton-force (short)":8896.443230521,"Ton-force (long)":9964.016418183,
    "Kip-force [kipf]":4448.221615261,"Pound-force [lbf]":4.4482216153,
    "Ounce-force [ozf]":0.2780138509,"Poundal [pdl]":0.1382549544,
    "Pond [p]":0.00980665,"Kilopond [kp]":9.80665
  }
},

"Time": {
  base: "Second [s]",
  units: {
    "Second [s]":1,"Millisecond [ms]":0.001,"Microsecond [µs]":1e-6,
    "Nanosecond [ns]":1e-9,"Picosecond [ps]":1e-12,"Femtosecond [fs]":1e-15,
    "Attosecond [as]":1e-18,"Minute [min]":60,"Hour [h]":3600,"Day [d]":86400,
    "Week":604800,"Month (30 days)":2592000,"Year (365 days)":31536000,
    "Year (365.25 days)":31557600,"Decade":315576000,"Century":3155760000,
    "Millennium":31557600000,"Fortnight":1209600,"Shake":1e-8,
    "Year (Gregorian)":31556952,"Year (Julian)":31557600,"Year (leap)":31622400,
    "Year (tropical)":31556925.2,"Year (sidereal)":31558149.8,
    "Day (sidereal)":86164.1,"Hour (sidereal)":3590.17,
    "Minute (sidereal)":59.8362,"Second (sidereal)":0.99727,
    "Planck Time":5.39121e-44
  }
},

"Speed": {
  base: "Meter/second [m/s]",
  units: {
    "Meter/second [m/s]":1,"Kilometer/hour [km/h]":0.277778,"Mile/hour [mph]":0.44704,
    "Meter/minute [m/min]":0.016666667,"Kilometer/minute":16.666667,"Kilometer/second":1000,
    "Centimeter/second":0.01,"Millimeter/second":0.001,
    "Foot/second [ft/s]":0.3048,"Foot/minute":0.00508,"Foot/hour":8.46667e-5,
    "Yard/second":0.9144,"Yard/minute":0.01524,"Yard/hour":0.000254,
    "Mile/minute":26.8224,"Mile/second":1609.344,
    "Knot [kt]":0.514444,"Knot (UK)":0.514773,
    "Mach (20°C, 1 atm)":343.6,"Mach (SI standard)":295.0464,
    "Speed of Light [c]":299792458,"Speed of Sound (water)":1482.7,"Speed of Sound (steel)":5765
  }
},

"Angle": {
  base: "Degree [°]",
  units: {
    "Degree [°]":1,"Radian [rad]":57.2957795131,"Gradian [grad]":0.9,
    "Arcminute [']":0.0166666667,"Arcsecond [\"]":2.77778e-4,
    "Milliradian":0.0572957795,"Microradian":5.72957795e-5,
    "Revolution [rev]":360,"Circle":360,"Turn":360,"Quadrant":90,
    "Right Angle":90,"Sextant":60,"Sign":30,"Octant":45,"Mil (NATO)":0.05625
  }
},

"Fuel Consumption": {
  base: "Meter/Liter",
  units: {
    "Meter/Liter":1,"Kilometer/Liter [km/L]":1000,"Hectometer/Liter":100,"Dekameter/Liter":10,
    "Centimeter/Liter":0.01,"Mile/Gallon (US) [mpg]":425.143707,"Mile/Gallon (UK)":354.006190,
    "Nautical Mile/Liter":1852,"Meter/Gallon (US)":0.264172052,"Meter/Gallon (UK)":0.219969157,
    "Meter/Cubic Foot":35.3146667,"Meter/Fluid Ounce (US)":33814.0227,
    "Liter/100 km":0.00001,"Gallon (US)/Mile":0.00235214583,"Gallon (UK)/Mile":0.00282481053
  }
},

"Data Storage": {
  base: "Bit",
  units: {
    "Bit [b]":1,"Nibble":4,"Byte [B]":8,"Character":8,"Word":16,"Block":4096,
    "Kilobit [kb]":1000,"Kilobyte [kB]":8000,"Kibibit [Kib]":1024,"Kibibyte [KiB]":8192,
    "Megabit [Mb]":1e6,"Megabyte [MB]":8e6,"Mebibit [Mib]":1048576,"Mebibyte [MiB]":8388608,
    "Gigabit [Gb]":1e9,"Gigabyte [GB]":8e9,"Gibibit [Gib]":1073741824,"Gibibyte [GiB]":8589934592,
    "Terabit [Tb]":1e12,"Terabyte [TB]":8e12,"Tebibit [Tib]":1099511627776,"Tebibyte [TiB]":8796093022208,
    "Petabit [Pb]":1e15,"Petabyte [PB]":8e15,"Exabit [Eb]":1e18,"Exabyte [EB]":8e18,
    "Floppy Disk (3.5\" HD)":11520000,"CD (74 min)":5268045312,"CD (80 min)":5765560320,
    "DVD (1 layer, 1 side)":38547922944,"DVD (2 layer, 1 side)":70569426944,
    "Blu-ray (1 layer)":200000000000,"Blu-ray (2 layer)":400000000000
  }
},

"Angular Velocity": {
  base: "Radian/second [rad/s]",
  units: {
    "Radian/second [rad/s]":1,"Radian/day":1.15741e-5,"Radian/hour":2.77778e-4,"Radian/minute":0.016667,
    "Degree/second":0.0174533,"Degree/minute":2.90888e-4,"Degree/hour":4.84813e-6,"Degree/day":2.02421e-7,
    "Revolution/second [r/s]":6.28318,"Revolution/minute [rpm]":0.10472,"Revolution/hour":0.0017453,"Revolution/day":7.27221e-5
  }
},

"Acceleration": {
  base: "Meter/square second [m/s²]",
  units: {
    "Meter/square second [m/s²]":1,"Decimeter/square second":0.1,"Kilometer/square second":1000,
    "Hectometer/square second":100,"Dekameter/square second":10,"Centimeter/square second":0.01,
    "Millimeter/square second":0.001,"Micrometer/square second":1e-6,"Nanometer/square second":1e-9,
    "Gravity [g]":9.80665,"Galileo [Gal]":0.01,"Milligalileo [mGal]":1e-5,
    "Foot/square second [ft/s²]":0.3048,"Inch/square second [in/s²]":0.0254,
    "Yard/square second":0.9144,"Mile/square second":1609.344
  }
},

"Angular Acceleration": {
  base: "Radian/square second [rad/s²]",
  units: {
    "Radian/square second [rad/s²]":1,"Radian/square minute":2.77778e-4,"Radian/square hour":7.71605e-8,
    "Degree/square second":0.0174533,"Degree/square minute":4.84813e-6,"Degree/square hour":1.34670e-9,
    "Revolution/square second":6.28318,"Revolution/square minute":0.00174533,"Revolution/square hour":4.84813e-7
  }
},

"Density": {
  base: "Kilogram/cubic meter [kg/m³]",
  units: {
    "Kilogram/cubic meter [kg/m³]":1,"Gram/cubic centimeter [g/cm³]":1000,"Gram/cubic meter [g/m³]":0.001,
    "Gram/milliliter [g/mL]":1000,"Kilogram/liter [kg/L]":1000,"Milligram/liter [mg/L]":0.001,
    "Kilogram/cubic centimeter":1e6,"Gram/liter [g/L]":1,"Microgram/liter [µg/L]":1e-6,
    "Pound/cubic inch [lb/in³]":27679.9047,"Pound/cubic foot [lb/ft³]":16.01846,
    "Pound/cubic yard":0.59328,"Pound/gallon (US) [lb/gal]":119.826,"Pound/gallon (UK)":99.7763,
    "Ounce/cubic inch":1729.99,"Ounce/cubic foot":1.00115,"Ounce/gallon (US)":7.48915,
    "Ton (short)/cubic yard":1186.55,"Ton (long)/cubic yard":1328.94,
    "Slug/cubic foot":515.379,"Slug/cubic inch":890574
  }
},

"Specific Volume": {
  base: "Cubic meter/kilogram [m³/kg]",
  units: {
    "Cubic meter/kilogram [m³/kg]":1,"Cubic centimeter/gram [cm³/g]":0.001,
    "Liter/kilogram [L/kg]":0.001,"Liter/gram [L/g]":1,
    "Cubic foot/kilogram [ft³/kg]":0.0283168,"Cubic foot/pound [ft³/lb]":0.0624280,
    "Cubic inch/pound [in³/lb]":3.61273e-5,"Gallon (US)/pound":8.3454e-3,
    "Gallon (UK)/pound":1.00224e-2
  }
},

"Moment of Inertia": {
  base: "Kilogram·square meter [kg·m²]",
  units: {
    "Kilogram·square meter [kg·m²]":1,"Kilogram·square centimeter":0.0001,"Kilogram·square millimeter":1e-6,
    "Gram·square centimeter":1e-7,"Gram·square millimeter":1e-9,
    "Pound·square foot [lb·ft²]":0.0421401,"Pound·square inch [lb·in²]":2.92640e-4,
    "Ounce·square foot [oz·ft²]":0.00263376,"Ounce·square inch [oz·in²]":1.82900e-5,
    "Slug·square foot":1.35582
  }
},

"Moment of Force": {
  base: "Newton·meter [N·m]",
  units: {
    "Newton·meter [N·m]":1,"Kilonewton·meter [kN·m]":1000,"Meganewton·meter":1e6,
    "Newton·centimeter":0.01,"Newton·millimeter":0.001,"Kilogram-force·meter [kgf·m]":9.80665,
    "Kilogram-force·centimeter":0.0980665,"Kilogram-force·millimeter":0.00980665,
    "Gram-force·meter":0.00980665,"Gram-force·centimeter":9.80665e-5,
    "Pound-force·foot [lbf·ft]":1.35582,"Pound-force·inch [lbf·in]":0.112985,
    "Ounce-force·foot":0.084739,"Ounce-force·inch":0.007062,
    "Dyne·meter":1e-5,"Dyne·centimeter":1e-7
  }
},

"Torque": {
  base: "Newton·meter [N·m]",
  units: {
    "Newton·meter [N·m]":1,"Kilonewton·meter [kN·m]":1000,"Meganewton·meter":1e6,
    "Newton·centimeter":0.01,"Newton·millimeter":0.001,"Kilogram-force·meter [kgf·m]":9.80665,
    "Gram-force·centimeter":9.80665e-5,"Pound-force·foot [lbf·ft]":1.35582,
    "Pound-force·inch [lbf·in]":0.112985,"Ounce-force·foot":0.084739,"Ounce-force·inch":0.007062,
    "Dyne·centimeter":1e-7
  }
},

"Heat - Fuel Efficiency (Mass)": {
  base: "Joule/kilogram [J/kg]",
  units: {
    "Joule/kilogram [J/kg]":1,"Kilojoule/kilogram [kJ/kg]":1000,"Megajoule/kilogram [MJ/kg]":1e6,
    "Calorie/gram [cal/g]":4186.8,"Kilocalorie/kilogram [kcal/kg]":4186.8,
    "Btu/pound [Btu/lb]":2326,"Btu/ounce":37216,"Calorie/pound":9224.14
  }
},

"Heat - Fuel Efficiency (Volume)": {
  base: "Joule/cubic meter [J/m³]",
  units: {
    "Joule/cubic meter [J/m³]":1,"Kilojoule/cubic meter [kJ/m³]":1000,"Megajoule/cubic meter [MJ/m³]":1e6,
    "Calorie/cubic centimeter [cal/cm³]":4186800,"Kilocalorie/cubic meter [kcal/m³]":4186.8,
    "Btu/cubic foot [Btu/ft³]":37258.9,"Btu/cubic inch [Btu/in³]":6.43615e7,
    "Btu/gallon (US) [Btu/gal]":278716,"Btu/gallon (UK)":232080
  }
},

"Heat - Temperature Interval": {
  base: "Kelvin [K]",
  units: {
    "Kelvin [K]":1,"Celsius [°C]":1,"Fahrenheit [°F]":0.555556,"Rankine [°R]":0.555556,
    "Reaumur [°Re]":1.25,"Delisle [°De]":0.666667,"Newton [°N]":3.03030
  }
},

"Heat - Thermal Resistance": {
  base: "Kelvin/watt [K/W]",
  units: {
    "Kelvin/watt [K/W]":1,"Degree Celsius/watt [°C/W]":1,
    "Degree Fahrenheit·hour/Btu":0.52752,"Degree Fahrenheit·hour/Btu (th)":0.52860,
    "Degree Fahrenheit·second/Btu":1.89629e-4,"Degree Fahrenheit·second/Btu (th)":1.90017e-4
  }
},

"Heat - Thermal Conductivity": {
  base: "Watt/meter·Kelvin [W/(m·K)]",
  units: {
    "Watt/meter·Kelvin [W/(m·K)]":1,"Kilowatt/meter·Kelvin [kW/(m·K)]":1000,
    "Watt/centimeter·Celsius [W/(cm·°C)]":100,"Kilocalorie/hour·meter·Celsius [kcal/(h·m·°C)]":1.163,
    "Calorie/second·centimeter·Celsius [cal/(s·cm·°C)]":418.68,
    "Btu·inch/second·sq foot·°F [Btu·in/(s·ft²·°F)]":519.2204,
    "Btu·foot/hour·sq foot·°F [Btu·ft/(h·ft²·°F)]":1.730735,
    "Btu/hour·foot·°F [Btu/(h·ft·°F)]":1.730735,
    "Btu·inch/hour·sq foot·°F [Btu·in/(h·ft²·°F)]":0.14423
  }
},

"Heat - Specific Heat Capacity": {
  base: "Joule/kilogram·Kelvin [J/(kg·K)]",
  units: {
    "Joule/kilogram·Kelvin [J/(kg·K)]":1,"Joule/kilogram·°C [J/(kg·°C)]":1,
    "Joule/gram·°C [J/(g·°C)]":1000,"Kilojoule/kilogram·K [kJ/(kg·K)]":1000,
    "Kilocalorie/kilogram·°C [kcal/(kg·°C)]":4186.8,"Calorie/gram·°C [cal/(g·°C)]":4186.8,
    "Btu/pound·°F [Btu/(lb·°F)]":4186.8,"Btu/pound·°R [Btu/(lb·°R)]":4186.8,
    "Btu/pound·°C [Btu/(lb·°C)]":2326,"CHU/pound·°C":4186.8
  }
},

"Heat - Heat Flux Density": {
  base: "Watt/square meter [W/m²]",
  units: {
    "Watt/square meter [W/m²]":1,"Kilowatt/square meter [kW/m²]":1000,
    "Watt/square centimeter [W/cm²]":10000,"Watt/square inch [W/in²]":1550.0031,
    "Joule/second·square meter [J/(s·m²)]":1,
    "Kilocalorie/hour·square meter [kcal/(h·m²)]":1.163,"Calorie/second·square centimeter":41868,
    "Btu/second·square inch [Btu/(s·in²)]":1634246,"Btu/minute·square foot [Btu/(min·ft²)]":189.2757,
    "Btu/hour·square foot [Btu/(h·ft²)]":3.15459,"CHU/hour·square foot":5.67826
  }
},

"Heat - Heat Transfer Coefficient": {
  base: "Watt/square meter·K [W/(m²·K)]",
  units: {
    "Watt/square meter·K [W/(m²·K)]":1,"Watt/square meter·°C [W/(m²·°C)]":1,
    "Kilowatt/square meter·K [kW/(m²·K)]":1000,"Joule/second·square meter·K [J/(s·m²·K)]":1,
    "Calorie/second·square centimeter·°C":41868,"Kilocalorie/hour·square meter·°C [kcal/(h·m²·°C)]":1.163,
    "Kilocalorie/second·square meter·°C":4186.8,
    "Btu/hour·square foot·°F [Btu/(h·ft²·°F)]":5.67826,
    "Btu/minute·square foot·°F [Btu/(min·ft²·°F)]":340.696,
    "Btu/second·square foot·°F [Btu/(s·ft²·°F)]":20441.7,
    "CHU/hour·square foot·°C":5.67826
  }
},

"Fluids - Flow": {
  base: "Cubic meter/second [m³/s]",
  units: {
    "Cubic meter/second [m³/s]":1,"Cubic meter/minute [m³/min]":0.016666667,"Cubic meter/hour [m³/h]":2.77778e-4,
    "Cubic meter/day":1.15741e-5,"Liter/second [L/s]":0.001,"Liter/minute [L/min]":1.66667e-5,
    "Liter/hour [L/h]":2.77778e-7,"Liter/day":1.15741e-8,"Milliliter/second [mL/s]":1e-6,
    "Milliliter/minute [mL/min]":1.66667e-8,"Milliliter/hour [mL/h]":2.77778e-10,
    "Cubic foot/second [ft³/s]":0.0283168,"Cubic foot/minute [ft³/min]":4.71947e-4,
    "Cubic foot/hour [ft³/h]":7.86578e-6,"Cubic yard/second":0.764555,"Cubic yard/minute":0.012743,
    "Gallon (US)/second [gal/s]":0.00378541,"Gallon (US)/minute [GPM]":6.30902e-5,
    "Gallon (US)/hour [gal/h]":1.05150e-6,"Gallon (US)/day":4.38126e-8,
    "Gallon (UK)/second":0.00454609,"Gallon (UK)/minute":7.57682e-5,"Gallon (UK)/hour":1.26280e-6,
    "Barrel (oil)/second":0.158987,"Barrel (oil)/minute":0.0026498,"Barrel (oil)/hour":4.41631e-4,
    "Barrel (oil)/day":1.84013e-5
  }
},

"Fluids - Flow (Mass)": {
  base: "Kilogram/second [kg/s]",
  units: {
    "Kilogram/second [kg/s]":1,"Kilogram/minute [kg/min]":0.016667,"Kilogram/hour [kg/h]":2.77778e-4,
    "Kilogram/day [kg/d]":1.15741e-5,"Gram/second [g/s]":0.001,"Gram/minute [g/min]":1.66667e-5,
    "Gram/hour [g/h]":2.77778e-7,"Milligram/second [mg/s]":1e-6,
    "Ton (metric)/second":1000,"Ton (metric)/minute":16.6667,"Ton (metric)/hour":0.277778,
    "Ton (metric)/day":0.011574,"Pound/second [lb/s]":0.453592,"Pound/minute [lb/min]":0.007560,
    "Pound/hour [lb/h]":1.25998e-4,"Pound/day [lb/d]":5.24992e-6,
    "Ton (short)/hour":0.251995,"Ton (long)/hour":0.282235
  }
},

"Fluids - Viscosity (Dynamic)": {
  base: "Pascal·second [Pa·s]",
  units: {
    "Pascal·second [Pa·s]":1,"Kilogram-force·second/sq meter":9.80665,"Newton·second/sq meter [N·s/m²]":1,
    "Millinewton·second/sq meter":0.001,"Dyne·second/sq centimeter [dyn·s/cm²]":0.1,
    "Poise [P]":0.1,"Exapoise [EP]":1e17,"Petapoise [PP]":1e14,"Terapoise [TP]":1e11,
    "Gigapoise [GP]":1e8,"Megapoise [MP]":100000,"Kilopoise [kP]":100,"Hectopoise [hP]":10,
    "Dekapoise [daP]":1,"Decipoise [dP]":0.01,"Centipoise [cP]":0.001,
    "Millipoise [mP]":0.0001,"Micropoise [µP]":1e-7,"Nanopoise [nP]":1e-10,
    "Pound-force·second/sq inch":6894.757293168,"Pound-force·second/sq foot":47.8803,
    "Pound/foot·second [lb/(ft·s)]":1.48816,"Pound/foot·hour [lb/(ft·h)]":4.13378e-4,
    "Slug/foot·second":47.8803
  }
},

"Fluids - Viscosity (Kinematic)": {
  base: "Square meter/second [m²/s]",
  units: {
    "Square meter/second [m²/s]":1,"Square meter/hour [m²/h]":2.77778e-4,
    "Square centimeter/second [cm²/s]":1e-4,"Square millimeter/second [mm²/s]":1e-6,
    "Square foot/second [ft²/s]":0.0929030,"Square foot/hour [ft²/h]":2.58064e-5,
    "Square inch/second [in²/s]":6.4516e-4,"Stokes [St]":1e-4,
    "Exastokes":1e14,"Petastokes":1e11,"Terastokes":1e8,"Gigastokes":100000,
    "Megastokes":100,"Kilostokes":0.1,"Hectostokes":0.01,"Dekastokes":0.001,
    "Decistokes":1e-5,"Centistokes [cSt]":1e-6,"Millistokes":1e-7,"Microstokes":1e-10
  }
},

"Fluids - Surface Tension": {
  base: "Newton/meter [N/m]",
  units: {
    "Newton/meter [N/m]":1,"Millinewton/meter [mN/m]":0.001,"Gram-force/centimeter [gf/cm]":0.980665,
    "Dyne/centimeter [dyn/cm]":0.001,"Erg/square centimeter [erg/cm²]":0.001,
    "Erg/square millimeter":0.1,"Poundal/inch [pdl/in]":0.551156,
    "Pound-force/inch [lbf/in]":175.127,"Pound-force/foot [lbf/ft]":14.5939
  }
},

"Fluids - Concentration (Molar)": {
  base: "Mole/cubic meter [mol/m³]",
  units: {
    "Mole/cubic meter [mol/m³]":1,"Mole/liter [mol/L]":1000,"Mole/milliliter [mol/mL]":1e6,
    "Kilomole/cubic meter [kmol/m³]":1000,"Kilomole/liter [kmol/L]":1e6,
    "Millimole/liter [mmol/L]":1,"Millimole/milliliter [mmol/mL]":1000,
    "Micromole/liter [µmol/L]":0.001,"Nanomole/liter [nmol/L]":1e-6,
    "Pound mole/cubic foot [lbmol/ft³]":16017.7,"Pound mole/gallon (US) [lbmol/gal]":119826
  }
},

"Light - Luminance": {
  base: "Candela/square meter [cd/m²]",
  units: {
    "Candela/square meter [cd/m²]":1,"Candela/square centimeter [cd/cm²]":10000,
    "Candela/square foot [cd/ft²]":10.7639,"Candela/square inch [cd/in²]":1550.0031,
    "Kilocandela/square meter [kcd/m²]":1000,"Stilb [sb]":10000,"Nit [nt]":1,
    "Millinit [mnt]":0.001,"Lambert [L]":3183.098862,"Millilambert [mL]":3.183098862,
    "Foot-lambert [fL]":3.426259,"Apostilb [asb]":0.31831,"Blondel":0.31831,
    "Skot":3.183099e-4,"Bril":3.183099e-8
  }
},

"Light - Luminous Intensity": {
  base: "Candela [cd]",
  units: {
    "Candela [cd]":1,"Kilocandela [kcd]":1000,"Millicandela [mcd]":0.001,
    "Microcandela [µcd]":1e-6,"Hefnerkerze [HK]":0.902,"International candle":1.00002,
    "Decimal candle":1,"Bougie decimal":1,"Pentane candle (10 candle power)":10,
    "Carcel unit":9.74,"Hefner unit":0.902
  }
},

"Light - Illumination": {
  base: "Lux [lx]",
  units: {
    "Lux [lx]":1,"Millilux [mlx]":0.001,"Kilolux [klx]":1000,"Megalux [Mlx]":1e6,
    "Lumen/square meter [lm/m²]":1,"Lumen/square centimeter [lm/cm²]":10000,
    "Lumen/square foot [lm/ft²]":10.7639,"Foot-candle [fc]":10.7639,
    "Phot [ph]":10000,"Nox":0.001,"Candela·steradian/sq meter":1
  }
},

"Light - Digital Image Resolution": {
  base: "Dot/meter [dot/m]",
  units: {
    "Dot/meter [dot/m]":1,"Dot/millimeter [dot/mm]":1000,"Dot/inch [dpi]":39.37007874,
    "Pixel/meter [px/m]":1,"Pixel/centimeter [px/cm]":100,"Pixel/inch [ppi]":39.37007874,
    "Point/inch [pt/in]":39.37007874
  }
},

"Light - Frequency Wavelength": {
  base: "Hertz [Hz]",
  units: {
    "Hertz [Hz]":1,"Kilohertz [kHz]":1000,"Megahertz [MHz]":1e6,"Gigahertz [GHz]":1e9,
    "Terahertz [THz]":1e12,"Petahertz [PHz]":1e15,"Exahertz [EHz]":1e18,
    "Millihertz [mHz]":0.001,"Microhertz [µHz]":1e-6,"Nanohertz [nHz]":1e-9,
    "Cycle/second":1,"Cycle/minute":0.016667,"Cycle/hour":2.77778e-4,"Cycle/day":1.15741e-5,
    "Radian/second [rad/s]":0.15915
  }
},

"Electricity - Charge": {
  base: "Coulomb [C]",
  units: {
    "Coulomb [C]":1,"Megacoulomb [MC]":1e6,"Kilocoulomb [kC]":1000,
    "Millicoulomb [mC]":0.001,"Microcoulomb [µC]":1e-6,"Nanocoulomb [nC]":1e-9,
    "Picocoulomb [pC]":1e-12,"Abcoulomb [abC]":10,"Statcoulomb [statC]":3.336e-10,
    "Ampere·hour [A·h]":3600,"Ampere·minute [A·min]":60,"Ampere·second [A·s]":1,
    "Milliampere·hour [mA·h]":3.6,"Faraday (based on C-12)":96485.309,"Electron charge":1.60218e-19
  }
},

"Electricity - Current": {
  base: "Ampere [A]",
  units: {
    "Ampere [A]":1,"Kiloampere [kA]":1000,"Megaampere [MA]":1e6,"Milliampere [mA]":0.001,
    "Microampere [µA]":1e-6,"Nanoampere [nA]":1e-9,"Picoampere [pA]":1e-12,
    "Abampere [abA]":10,"Statampere [statA]":3.336e-10,"Biot [Bi]":10
  }
},

"Electricity - Electric Potential": {
  base: "Volt [V]",
  units: {
    "Volt [V]":1,"Kilovolt [kV]":1000,"Megavolt [MV]":1e6,"Millivolt [mV]":0.001,
    "Microvolt [µV]":1e-6,"Nanovolt [nV]":1e-9,"Picovolt [pV]":1e-12,
    "Abvolt [abV]":1e-8,"Statvolt [statV]":299.792
  }
},

"Electricity - Electric Resistance": {
  base: "Ohm [Ω]",
  units: {
    "Ohm [Ω]":1,"Kiloohm [kΩ]":1000,"Megaohm [MΩ]":1e6,"Milliohm [mΩ]":0.001,
    "Microohm [µΩ]":1e-6,"Nanoohm [nΩ]":1e-9,"Abohm [abΩ]":1e-9,"Statohm [statΩ]":8.9876e11
  }
},

"Electricity - Electric Conductance": {
  base: "Siemens [S]",
  units: {
    "Siemens [S]":1,"Megasiemens [MS]":1e6,"Kilosiemens [kS]":1000,"Millisiemens [mS]":0.001,
    "Microsiemens [µS]":1e-6,"Abmho":1e9,"Statmho":1.1126e-12,"Mho [℧]":1,"Gemmho":1e-6
  }
},

"Electricity - Capacitance": {
  base: "Farad [F]",
  units: {
    "Farad [F]":1,"Exafarad [EF]":1e18,"Petafarad [PF]":1e15,"Terafarad [TF]":1e12,
    "Gigafarad [GF]":1e9,"Megafarad [MF]":1e6,"Kilofarad [kF]":1000,"Hectofarad [hF]":100,
    "Dekafarad [daF]":10,"Decifarad [dF]":0.1,"Centifarad [cF]":0.01,
    "Millifarad [mF]":0.001,"Microfarad [µF]":1e-6,"Nanofarad [nF]":1e-9,
    "Picofarad [pF]":1e-12,"Femtofarad [fF]":1e-15,"Attofarad [aF]":1e-18,
    "Abfarad":1e9,"Statfarad":1.11265e-12
  }
},

"Electricity - Inductance": {
  base: "Henry [H]",
  units: {
    "Henry [H]":1,"Exahenry [EH]":1e18,"Petahenry [PH]":1e15,"Terahenry [TH]":1e12,
    "Gigahenry [GH]":1e9,"Megahenry [MH]":1e6,"Kilohenry [kH]":1000,"Hectohenry [hH]":100,
    "Dekahenry [daH]":10,"Decihenry [dH]":0.1,"Centihenry [cH]":0.01,
    "Millihenry [mH]":0.001,"Microhenry [µH]":1e-6,"Nanohenry [nH]":1e-9,
    "Picohenry [pH]":1e-12,"Femtohenry [fH]":1e-15,"Attohenry [aH]":1e-18,
    "Abhenry":1e-9,"Stathenry":8.9876e11
  }
},

"Magnetism - Magnetic Field Strength": {
  base: "Ampere/meter [A/m]",
  units: {
    "Ampere/meter [A/m]":1,"Kiloampere/meter [kA/m]":1000,"Ampere/centimeter [A/cm]":100,
    "Oersted [Oe]":79.5775,"Gilbert/centimeter [Gi/cm]":79.5775,
    "Abampere/meter":10,"Abampere/centimeter":1000
  }
},

"Magnetism - Magnetic Flux": {
  base: "Weber [Wb]",
  units: {
    "Weber [Wb]":1,"Milliweber [mWb]":0.001,"Microweber [µWb]":1e-6,
    "Volt·second [V·s]":1,"Tesla·square meter [T·m²]":1,
    "Maxwell [Mx]":1e-8,"Kiloline":1e-5,"Line":1e-8
  }
},

"Magnetism - Magnetic Flux Density": {
  base: "Tesla [T]",
  units: {
    "Tesla [T]":1,"Millitesla [mT]":0.001,"Microtesla [µT]":1e-6,"Nanotesla [nT]":1e-9,
    "Kilotesla [kT]":1000,"Weber/square meter [Wb/m²]":1,"Weber/square centimeter":10000,
    "Weber/square inch":1550.0031,"Maxwell/square meter":1e-4,"Maxwell/square centimeter":1e-8,
    "Gauss [G]":1e-4,"Milligauss [mG]":1e-7,"Gamma [γ]":1e-9
  }
},

"Radiology - Radiation": {
  base: "Gray/second [Gy/s]",
  units: {
    "Gray/second [Gy/s]":1,"Rad/second [rd/s]":0.01,"Millirad/second [mrd/s]":1e-5,
    "Joule/kilogram·second [J/(kg·s)]":1,"Watt/kilogram [W/kg]":1
  }
},

"Radiology - Radiation Activity": {
  base: "Becquerel [Bq]",
  units: {
    "Becquerel [Bq]":1,"Terabecquerel [TBq]":1e12,"Gigabecquerel [GBq]":1e9,
    "Megabecquerel [MBq]":1e6,"Kilobecquerel [kBq]":1000,"Millibecquerel [mBq]":0.001,
    "Curie [Ci]":3.7e10,"Kilocurie [kCi]":3.7e13,"Millicurie [mCi]":3.7e7,
    "Microcurie [µCi]":37000,"Nanocurie [nCi]":37,"Picocurie [pCi]":0.037,
    "Rutherford [Rd]":1e6,"Disintegration/second":1,"Disintegration/minute":0.016667
  }
},

"Radiology - Radiation Absorbed Dose": {
  base: "Gray [Gy]",
  units: {
    "Gray [Gy]":1,"Exagray [EGy]":1e18,"Petagray [PGy]":1e15,"Teragray [TGy]":1e12,
    "Gigagray [GGy]":1e9,"Megagray [MGy]":1e6,"Kilogray [kGy]":1000,"Hectogray [hGy]":100,
    "Dekagray [daGy]":10,"Decigray [dGy]":0.1,"Centigray [cGy]":0.01,
    "Milligray [mGy]":0.001,"Microgray [µGy]":1e-6,"Nanogray [nGy]":1e-9,
    "Rad [rd]":0.01,"Millirad [mrd]":1e-5,"Joule/kilogram [J/kg]":1,
    "Joule/gram [J/g]":1000,"Joule/centigram [J/cg]":100000,
    "Joule/milligram [J/mg]":1e6
  }
},

"Other - Prefixes": {
  base: "Base",
  units: {
    "Yotta (10²⁴)":1e24,"Zetta (10²¹)":1e21,"Exa (10¹⁸)":1e18,"Peta (10¹⁵)":1e15,
    "Tera (10¹²)":1e12,"Giga (10⁹)":1e9,"Mega (10⁶)":1e6,"Kilo (10³)":1e3,
    "Hecto (10²)":1e2,"Deka (10¹)":10,"Base":1,"Deci (10⁻¹)":0.1,
    "Centi (10⁻²)":0.01,"Milli (10⁻³)":0.001,"Micro (10⁻⁶)":1e-6,
    "Nano (10⁻⁹)":1e-9,"Pico (10⁻¹²)":1e-12,"Femto (10⁻¹⁵)":1e-15,
    "Atto (10⁻¹⁸)":1e-18,"Zepto (10⁻²¹)":1e-21,"Yocto (10⁻²⁴)":1e-24
  }
},

"Other - Data Transfer": {
  base: "Bit/second [bps]",
  units: {
    "Bit/second [bps]":1,"Kilobit/second [kbps]":1000,"Megabit/second [Mbps]":1e6,
    "Gigabit/second [Gbps]":1e9,"Terabit/second [Tbps]":1e12,
    "Kibibit/second [Kibps]":1024,"Mebibit/second [Mibps]":1048576,
    "Gibibit/second [Gibps]":1073741824,"Tebibit/second [Tibps]":1.09951e12,
    "Byte/second [B/s]":8,"Kilobyte/second [kB/s]":8000,"Megabyte/second [MB/s]":8e6,
    "Gigabyte/second [GB/s]":8e9,"Kibibyte/second [KiB/s]":8192,"Mebibyte/second [MiB/s]":8388608,
    "Gibibyte/second [GiB/s]":8589934592,"Ethernet (10Mbit)":1e7,"Ethernet (100Mbit)":1e8,
    "Ethernet (1Gbit)":1e9,"USB 1.0":1.5e6,"USB 2.0":6e8,"USB 3.0":5e9,
    "ISDN (single channel)":64000,"ISDN (dual channel)":128000,
    "T0 (payload)":56000,"T1 (signal)":1544000
  }
},

"Other - Sound": {
  base: "Decibel [dB]",
  special: true,
  units: ["Decibel [dB]","Neper [Np]","Bel [B]","Millineper [mNp]"]
},

"Other - Typography": {
  base: "Point (PostScript)",
  units: {
    "Point (PostScript)":1,"Point (TeX)":1.00375,"Point (Didot) [didot]":1.07007,
    "Point (British/American)":0.99965,"Point (metric)":0.93600,
    "Pica (PostScript)":12,"Pica (TeX)":12.045,"Pica (Didot)":12.8408,
    "Pica (British/American)":11.9959,"Inch [in]":72,"Centimeter [cm]":28.3465,
    "Millimeter [mm]":2.83465,"Twip":0.05,"Em":1,"En":0.5,"Pixel (at 72 DPI)":1,"Pixel (at 96 DPI)":0.75
  }
}

};
