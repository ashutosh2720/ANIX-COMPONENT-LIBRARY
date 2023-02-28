function showSnackbar() {
    var snackbar = document.getElementById("snackbar");
    snackbar.textContent = "Snackbar message";
    snackbar.className = "show";
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}
