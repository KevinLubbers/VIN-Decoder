document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    decode();
  });

  function decode() {
    if(!checkErrors()){
        return;
    }
    let vin = document.getElementById("vin").value.trim();
    let resultVIN = document.getElementById("resultVIN");
    resultVIN.innerHTML = "VIN: " + vin.toUpperCase();


    let resultDisplay = document.getElementById("resultSection");
    resultDisplay.style.display = "block";
  }

  function checkErrors() {
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