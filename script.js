// const openEl = document.querySelector(".open");
const faqButtons = document.querySelectorAll(".faq-btn");

// console.log(openEl);
console.log(faqButtons);

// for (let i = 0; i < buttons.length; i++) {
//   console.log(buttons.item(i));
// }

faqButtons.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    // get the clicked faq-item
    let faqItem = ev.target.closest(".faq-item");
    //get the currently-open item (may be null if none opened)
    let openEl = document.querySelector(".open");

    // open/close the clicked item
    faqItem.classList.toggle("open");

    //if the selected item was the openEl, close it and nullify openEl
    if (faqItem == openEl) openEl = null;

    // close the currently-open item (if one exists)
    if (openEl != null) openEl.classList.toggle("open");

    // console.log(openEl == faqItem);
  });
});
