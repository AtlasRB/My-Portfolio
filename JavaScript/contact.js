var emailElement = document.getElementById("myEmail");
var copyElememt = document.getElementById("copied")

emailElement.addEventListener("click", function() {
    navigator.clipboard.writeText("connorrobert293@gamil.com")
    copyElememt.style.display = "flex";
});