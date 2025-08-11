document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", false);
})
function openn() {
    document.getElementById("menu-right-mobile").style.display = "block";

}
function opennn() {
    document.getElementsByClassName("header")[0].style.display = "none";
    document.getElementsByClassName("header2")[0].style.display = "flex";


}
function closeee() {
    document.getElementsByClassName("header")[0].style.display = "flex";
    document.getElementsByClassName("header2")[0].style.display = "none";


}
function closee() {
    document.getElementById("menu-right-mobile").style.display = "none";
    document.getElementById("menu-right-mobile").style.animationName = "testt";

}
function Logout() {
    localStorage.setItem("Login", "No");
    window.location.assign("login.html");

}
// document.getElementById("Password").innerHTML = localStorage.getItem("Password");
const number_shop = document.getElementsByClassName("number-shop")[0];
if (localStorage.getItem("Shop") === null) {
    localStorage.setItem("Shop", 0);
};
number_shop.innerHTML = localStorage.getItem("Shop");
num_shop = localStorage.getItem("Shop");
num_shop = Number(num_shop);
document.getElementsByClassName("add-to-shop-view-book-sp")[0].addEventListener("click", () => {
    num_shop = num_shop + 1;
    number_shop.innerHTML = num_shop;
    localStorage.setItem("Shop", num_shop);
});
const timere = setInterval(ifelse, 1);
function ifelse() {
    if (num_shop > 9) {
        number_shop.innerHTML = "+9";
    }
    ;
}
