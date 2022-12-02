function showSnackbar(msg) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    x.textContent = msg || "";

    // Add the "show" class to DIV
    x.className = "show-snackbar";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show-snackbar", ""); }, 3000);
}