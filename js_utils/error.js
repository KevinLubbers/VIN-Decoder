
  export function showError(errorMsg) {
    let errorSection = document.getElementById("errorSection");
    let error = document.getElementById("errorText");
    errorSection.style.display = "block";
    error.insertAdjacentHTML("beforeend" , "<p>" + errorMsg + "</p>");
  }