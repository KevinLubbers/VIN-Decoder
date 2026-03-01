document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevents page reload
    decode();
  });

  function decode() {
    let result = document.getElementById("resultSection");
    result.style.display = "block";
  }