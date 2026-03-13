import { getCountry } from "./js_utils/country_check.js";

//start on form submit
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

  function vinSplit(vin){
    let splitObject = {};
    
    let country = vin.substring(0,2).toUpperCase();

    let helper_object = getCountry(country);
    splitObject.country = helper_object.country;
    if (helper_object.country_char_count == 2) {
      
    }
    else{

    }
    let manufacturer = vin.substring(1,2);
    let vehicle_type = vin.substring(2,3);

    return splitObject;
  }

  function getManufacturer(manufacturer) {
    return manufacturer;
  }

  function getVehicleType(vehicle_type) {
    return vehicle_type;
  }