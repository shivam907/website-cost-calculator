$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    console.log($nav.height());
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
  });
});

const type = document.querySelectorAll(".type .active");
// console.log(type);
type.forEach((i) => {
  i.addEventListener("click", (el) => {
    el.preventDefault();
    type.forEach((i) => i.classList.remove("btnFocus"));
    i.classList.toggle("btnFocus");
  });
});
const pages = document.querySelectorAll(".pages .active");
// console.log(type);
pages.forEach((i) => {
  i.addEventListener("click", (el) => {
    el.preventDefault();
    pages.forEach((i) => i.classList.remove("btnFocus"));
    i.classList.toggle("btnFocus");
  });
});
const style = document.querySelectorAll(".style .active");
// console.log(type);
style.forEach((i) => {
  i.addEventListener("click", (el) => {
    el.preventDefault();
    style.forEach((i) => i.classList.remove("btnFocus"));
    i.classList.toggle("btnFocus");
  });
});
const cms = document.querySelectorAll(".cms .active");
// console.log(type);
cms.forEach((i) => {
  i.addEventListener("click", (el) => {
    el.preventDefault();
    cms.forEach((i) => i.classList.remove("btnFocus"));
    i.classList.toggle("btnFocus");
  });
});
const db = document.querySelectorAll(".data .active");
// console.log(type);
db.forEach((i) => {
  i.addEventListener("click", (el) => {
    el.preventDefault();
    db.forEach((i) => i.classList.remove("btnFocus"));
    i.classList.toggle("btnFocus");
  });
});
const seo = document.querySelectorAll(".seo .active");
// console.log(type);
seo.forEach((i) => {
  i.addEventListener("click", (el) => {
    el.preventDefault();
    seo.forEach((i) => i.classList.remove("btnFocus"));
    i.classList.toggle("btnFocus");
  });
});
const copy = document.querySelectorAll(".copy .active");
// console.log(type);
copy.forEach((i) => {
  i.addEventListener("click", (el) => {
    el.preventDefault();
    copy.forEach((i) => i.classList.remove("btnFocus"));
    i.classList.toggle("btnFocus");
  });
});
const responsive = document.querySelectorAll(".yes .no");
// console.log(type);
responsive.forEach((i) => {
  i.addEventListener("click", (el) => {
    el.preventDefault();
    responsive.forEach((i) => i.classList.remove("nocus"));
    i.classList.toggle("nocus");
  });
});
