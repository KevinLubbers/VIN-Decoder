document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    decode();
  });

  function decode() {
    if(!checkInputErrors()){
        return;
    }
    let vin = document.getElementById("vin").value.trim();
    let resultVIN = document.getElementById("resultVIN");
    resultVIN.innerHTML = "VIN: " + vin.toUpperCase();

    let resultDisplay = document.getElementById("resultDisplay");
    splitObject = vinSplit(vin);
    resultDisplay.innerHTML = 
    "Country of Origin: " + splitObject.country + "<br>" +
    "Manufacturer: " + splitObject.manufacturer + "<br>" +
    "Model: " + splitObject.model + "<br>" +
    "Body Style: " + splitObject.bodyStyle + "<br>" +
    "Engine: " + splitObject.engine + "<br>" +
    "Transmission: " + splitObject.transmission + "<br>" +
    "Trim: " + splitObject.trim + "<br>" +
    "Model Year: " + splitObject.modelYear + "<br>" +
    "Assembly Plant: " + splitObject.assemblyPlant

    let resultSection= document.getElementById("resultSection");
    resultSection.style.display = "block";
  }

  function checkInputErrors() {
    let vin = document.getElementById("vin").value.trim();
    let errorSection = document.getElementById("errorSection");
    let error = document.getElementById("errorText");
    if (vin.length != 17) {
      errorSection.style.display = "block";
      error.insertAdjacentHTML("beforeend" , "<p>VIN must be 17 characters long</p>");
      return false;
    } else {
      errorSection.style.display = "none";
      error.innerHTML = "";
      return true;
    }
  }
  function showError(errorMsg) {
    let errorSection = document.getElementById("errorSection");
    let error = document.getElementById("errorText");
    errorSection.style.display = "block";
    error.insertAdjacentHTML("beforeend" , "<p>" + errorMsg + "</p>");
  }

  function vinSplit(vin){
    let splitObject = {};
    
    let country = vin.substring(0,2).toUpperCase();
    splitObject.country = getCountry(country);
    let manufacturer = vin.substring(1,2);
    let vehicle_type = vin.substring(2,3);

    return splitObject;
  }
  function getCountry(country) {
    const vinCountryMap = {
  // Africa
  "A": "Africa",
  "B": "Africa",
  "C": "Africa",
  "AA": "South Africa",
  "AB": "South Africa",
  "AC": "South Africa",
  "AD": "South Africa",
  "AE": "South Africa",
  "AF": "South Africa",
  "AG": "South Africa",
  "AH": "South Africa",
  "AJ": "Côte d'Ivoire",
  "AK": "Côte d'Ivoire",
  "AL": "Lesotho",
  "AM": "Lesotho",
  "AN": "Botswana",
  "AO": "Botswana",
  "AP": "Botswana",
  "AR": "Namibia",
  "AS": "Namibia",
  "AT": "Madagascar",
  "AU": "Madagascar",
  "AV": "Mauritius",
  "AW": "Mauritius",
  "AX": "Tunisia",
  "AY": "Tunisia",
  "AZ": "Cyprus",
  "A1": "Cyprus",
  "A2": "Zimbabwe",
  "A3": "Zimbabwe",
  "A4": "Mozambique",
  "A5": "Mozambique",
  "BA": "Angola",
  "BB": "Angola",
  "BC": "Ethiopia",
  "BF": "Kenya",
  "BG": "Kenya",
  "BH": "Rwanda",
  "BL": "Nigeria",
  "BR": "Algeria",
  "BT": "Swaziland",
  "BU": "Uganda",
  "B3": "Libya",
  "B4": "Libya",
  "CA": "Egypt",
  "CB": "Egypt",
  "CF": "Morocco",
  "CG": "Morocco",
  "CL": "Zambia",
  "CM": "Zambia",

  // Asia
  "H": "China",
  "J": "Japan",
  "KF": "Israel",
  "KG": "Israel",
  "KH": "Israel",
  "KL": "South Korea",
  "KM": "South Korea",
  "KN": "South Korea",
  "KO": "South Korea",
  "KP": "South Korea",
  "KQ": "South Korea",
  "KR": "South Korea",
  "KS": "Jordan",
  "KT": "Jordan",
  "K1": "South Korea",
  "K2": "South Korea",
  "K3": "South Korea",
  "K5": "Kyrgyzstan",
  "L": "China",
  "MA": "India",
  "MB": "India",
  "MC": "India",
  "MD": "India",
  "ME": "India",
  "MF": "Indonesia",
  "MG": "Indonesia",
  "MH": "Indonesia",
  "MI": "Indonesia",
  "MJ": "Indonesia",
  "MK": "Indonesia",
  "ML": "Thailand",
  "MM": "Thailand",
  "MN": "Thailand",
  "MO": "Thailand",
  "MP": "Thailand",
  "MR": "Thailand",
  "MS": "Myanmar",
  "MU": "Mongolia",
  "MX": "Kazakhstan",
  "MY": "India",
  "M0": "India",

  // Europe (partial)
  "E": "Russia",
  "SA": "United Kingdom",
  "SB": "United Kingdom",
  "SC": "United Kingdom",
  "SD": "United Kingdom",
  "SE": "United Kingdom",
  "SF": "United Kingdom",
  "SG": "United Kingdom",
  "SH": "United Kingdom",
  "SI": "United Kingdom",
  "SJ": "United Kingdom",
  "SK": "United Kingdom",
  "SL": "United Kingdom",
  "SM": "United Kingdom",
  "SN": "Germany (former East Germany)",
  "ST": "Germany (former East Germany)",
  "SU": "Poland",
  "SV": "Poland",
  "SW": "Poland",
  "SX": "Poland",
  "SY": "Poland",
  "SZ": "Poland",
  "S1": "Latvia",
  "S2": "Latvia",
  "S3": "Georgia",
  "S4": "Iceland",
  "TA": "Switzerland",
  "TB": "Switzerland",
  "TC": "Switzerland",
  "TD": "Switzerland",
  "TE": "Switzerland",
  "TF": "Switzerland",
  "TG": "Switzerland",
  "TH": "Switzerland",
  "TJ": "Czech Republic",
  "TK": "Czech Republic",
  "TL": "Czech Republic",
  "TM": "Czech Republic",
  "TN": "Czech Republic",
  "TP": "Czech Republic",
  "TR": "Hungary",
  "TS": "Hungary",
  "TT": "Hungary",
  "TU": "Hungary",
  "TV": "Hungary",
  "TW": "Portugal",
  "TX": "Portugal",
  "TY": "Portugal",
  "T1": "Portugal",
  "T2": "Portugal",
  "T3": "Serbia",
  "T4": "Serbia",
  "T5": "Serbia",
  "T6": "Andorra",
  "T7": "Netherlands",
  "T8": "Netherlands",
  "UA": "Spain",
  "UB": "Spain",
  "UC": "Spain",
  "UH": "Denmark",
  "UI": "Denmark",
  "UJ": "Denmark",
  "UK": "Denmark",
  "UL": "Denmark",
  "UM": "Denmark",
  "UN": "Ireland",
  "UO": "Ireland",
  "UP": "Ireland",
  "UQ": "Ireland",
  "UR": "Ireland",
  "UU": "Romania",
  "UV": "Romania",
  "UW": "Romania",
  "UX": "Romania",
  "U1": "North Macedonia",
  "U2": "North Macedonia",
  "U5": "Slovakia",
  "U6": "Slovakia",
  "U7": "Slovakia",
  "U8": "Bosnia and Herzegovina",
  "U9": "Bosnia and Herzegovina",
  "U0": "Bosnia and Herzegovina",
  "VA": "Austria",
  "VB": "Austria",
  "VC": "Austria",
  "VD": "Austria",
  "VE": "Austria",
  "VF": "France",
  "VG": "France",
  "VH": "France",
  "VI": "France",
  "VJ": "France",
  "VK": "France",
  "VL": "France",
  "VM": "France",
  "VN": "France",
  "VO": "France",
  "VP": "France",
  "VQ": "France",
  "VR": "France",
  "VS": "Spain",
  "VT": "Spain",
  "VU": "Spain",
  "VV": "Spain",
  "VW": "Spain",
  "VX": "France",
  "V1": "France",
  "V2": "France",
  "V3": "Croatia",
  "V4": "Croatia",
  "V5": "Croatia",
  "V6": "Estonia",
  "V7": "Estonia",
  "V8": "Estonia",
  "W": "Germany (former West Germany)",
  "XA": "Bulgaria",
  "XB": "Bulgaria",
  "XC": "Bulgaria",
  "XD": "Russia",
  "XE": "Russia",
  "XF": "Greece",
  "XG": "Greece",
  "XH": "Greece",
  "XJ": "Russia",
  "XK": "Russia",
  "XL": "Netherlands",
  "XM": "Netherlands",
  "XN": "Netherlands",
  "XO": "Netherlands",
  "XP": "Netherlands",
  "XQ": "Netherlands",
  "XR": "Netherlands",
  "XS": "Russia (former USSR)",
  "XT": "Russia (former USSR)",
  "XU": "Russia (former USSR)",
  "XV": "Russia (former USSR)",
  "XW": "Russia (former USSR)",
  "XX": "Luxembourg",
  "XY": "Luxembourg",
  "XZ": "Russia",
  "X1": "Russia",
  "YA": "Belgium",
  "YB": "Belgium",
  "YC": "Belgium",
  "YD": "Belgium",
  "YE": "Belgium",
  "YF": "Finland",
  "YG": "Finland",
  "YH": "Finland",
  "YI": "Finland",
  "YJ": "Finland",
  "YK": "Finland",
  "YN": "Malta",
  "YS": "Sweden",
  "YT": "Sweden",
  "YU": "Sweden",
  "YV": "Sweden",
  "YW": "Sweden",
  "YX": "Norway",
  "YY": "Norway",
  "Y1": "Norway",
  "Y2": "Norway",
  "Y3": "Belarus",
  "Y4": "Belarus",
  "Y5": "Belarus",
  "Y6": "Ukraine",
  "Y7": "Ukraine",
  "Y8": "Ukraine",
  "Y9": "Ukraine",
  "ZA": "Italy",
  "ZB": "Italy",
  "ZC": "Italy",
  "ZD": "Italy",
  "ZE": "Italy",
  "ZF": "Italy",
  "ZG": "Italy",
  "ZH": "Italy",
  "ZI": "Italy",
  "ZJ": "Italy",
  "ZK": "Italy",
  "ZL": "Italy",
  "ZM": "Italy",
  "ZN": "Italy",
  "ZO": "Italy",
  "ZP": "Italy",
  "ZQ": "Italy",
  "ZR": "Italy",
  "ZS": "Slovenia",
  "ZT": "Slovenia",
  "ZU": "Slovenia",
  "ZX": "Slovenia",
  "ZY": "Slovenia",
  "ZZ": "Slovenia",
  "Z1": "San Marino",
  "Z3": "Lithuania",
  "Z4": "Lithuania",
  "Z5": "Lithuania",
  "Z6": "Russia",
  "Z7": "Russia",
  "Z8": "Russia",
  "Z9": "Russia",
  "Z0": "Russia",
  "1": "United States",
  "2": "Canada",
  "3A": "Mexico",
  "3B": "Mexico",
  "3C": "Mexico",
  "3D": "Mexico",
  "3E": "Mexico",
  "3F": "Mexico",
  "3G": "Mexico",
  "3H": "Mexico",
  "3I": "Mexico",
  "3J": "Mexico",
  "3K": "Mexico",
  "3L": "Mexico",
  "3M": "Mexico",
  "3N": "Mexico",
  "3O": "Mexico",
  "3P": "Mexico",
  "3Q": "Mexico",
  "3R": "Mexico",
  "3S": "Mexico",
  "3T": "Mexico",
  "3U": "Mexico",
  "3V": "Mexico",
  "3W": "Mexico",
  "3X": "Mexico",
  "34": "Nicaragua",
  "35": "Dominican Republic",
  "36": "Honduras",
  "37": "Panama",
  "38": "Puerto Rico",
  "39": "Puerto Rico",
  "4": "United States",
  "5": "United States",
  "7": "United States",

  // Oceania
  "6": "Australia",
  "6Y": "New Zealand",
  "61": "New Zealand",

  // South America
  "8A": "Argentina",
  "8B": "Argentina",
  "8C": "Argentina",
  "8D": "Argentina",
  "8E": "Argentina",
  "8F": "Chile",
  "8G": "Chile",
  "8L": "Ecuador",
  "8M": "Ecuador",
  "8N": "Ecuador",
  "8S": "Peru",
  "8T": "Peru",
  "8U": "Peru",
  "8V": "Peru",
  "8W": "Peru",
  "8X": "Venezuela",
  "8Y": "Venezuela",
  "8Z": "Venezuela",
  "82": "Bolivia",
  "84": "Costa Rica",
  "9A": "Brazil",
  "9B": "Brazil",
  "9C": "Brazil",
  "9D": "Brazil",
  "9E": "Brazil",
  "9F": "Colombia",
  "9G": "Colombia",
  "9S": "Uruguay",
  "9T": "Uruguay",
  "9U": "Uruguay",
  "9V": "Uruguay",
  "91": "Brazil",
  "90": "Brazil"
};
  const twoCharCode = country.slice(0, 2); // first 2 characters
  if (vinCountryMap[twoCharCode]) {
      return vinCountryMap[twoCharCode];
  }

  // Then check if the 1-character code exists
  const oneCharCode = country.slice(0, 1); // first character
  if (vinCountryMap[oneCharCode]) {
      return vinCountryMap[oneCharCode];
  }

  showError("Country not found");
}

  function getManufacturer(manufacturer) {
    return manufacturer;
  }

  function getVehicleType(vehicle_type) {
    return vehicle_type;
  }