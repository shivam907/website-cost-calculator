$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    // console.log($nav.height());
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
const ecomm = document.querySelectorAll(".ecomm .active");
// console.log(type);
ecomm.forEach((i) => {
  i.addEventListener("click", (el) => {
    el.preventDefault();
    ecomm.forEach((i) => i.classList.remove("btnFocus"));
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

let totalCost = 0;
let selected = [];
document.querySelectorAll(".type .active").forEach((i) => {
  i.addEventListener("click", () => {
    selected[0] = i.textContent + " website";
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".pages .active").forEach((i) => {
  i.addEventListener("click", () => {
    selected[1] = i.textContent + " pages";
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".style .active").forEach((i) => {
  i.addEventListener("click", () => {
    selected[2] = i.textContent + "styling";
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".cms .active").forEach((i) => {
  i.addEventListener("click", () => {
    if (i.textContent == "Not Required") {
      // continue;
      return;
    } else {
      selected[3] = i.textContent + "panel";
    }
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".data .active").forEach((i) => {
  i.addEventListener("click", () => {
    // selected[4] = i.textContent;
    if (i.textContent == "Not Required") {
      // continue;
      return;
    } else {
      selected[4] = i.textContent;
    }
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".seo .active").forEach((i) => {
  i.addEventListener("click", () => {
    // selected[5] = i.textContent;
    if (i.textContent == "Not Required") {
      // continue;
      return;
    } else {
      selected[5] = i.textContent;
    }
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".copy .active").forEach((i) => {
  i.addEventListener("click", () => {
    selected[6] = i.textContent;
    if (i.textContent == "Not Required") {
      // continue;
      return;
    } else {
      selected[6] = i.textContent + "Copywriting";
    }
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".yes .no").forEach((i) => {
  i.addEventListener("click", () => {
    selected[7] = i.textContent;
    // console.log(i.textContent);
  });
});
console.log(selected);
document.querySelectorAll("button").forEach((i) => {
  i.addEventListener("click", () => {
    console.log("ys");
    document.querySelector("summary").insertAdjacentHTML(
      "beforeend",
      `<div class="webSummary">
            <p>Static Website</p>
            <p>1000 rs</p>
          </div>
        </div>`
    );
  });
});
