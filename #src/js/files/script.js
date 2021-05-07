//== Show/Hide Dropdown menu =================================
const elem = document.querySelector('#dropdown-menu');
//elem.classList.toggle("scale-out-tl")

let btn = document.querySelector('#btn-category');

// btn.onmouseover = (event) => {
//   if (elem.classList.contains("scale-out-tl")) {
//     menuShow();
//   } else {
//     menuHide();
//   }
// };

// btn.onmouseout = (event) => {
//   menuHide();
// };

function menuShow() {
    elem.classList.remove("scale-out-tl")
    elem.classList.toggle("scale-in-tl")
};

function menuHide() {
    elem.classList.remove("scale-in-tl")
    elem.classList.toggle("scale-out-tl")
}