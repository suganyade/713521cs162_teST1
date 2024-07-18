
// book.html
var productcontainer = document.querySelector(".book-categories, .new-arrival");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll(".category-container, .arrival-container");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h3").textContent;

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
// author
//select cancel button
var cancelbutton = document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deleteitem(event){
    event.target.parentElement.remove()
}
