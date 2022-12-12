$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    // console.log($nav.height());
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
  });
});

let price = [
  {
    Static: 1000,
    Dynamic: 5000,
    "News / Blog": 10000,
    "One Page": 800,
    "E commerce": 20000,
  },
  {
    1: 0,
    "2-5": 2000,
    "6-10": 4000,
    "11-20": 10000,
    "21-50": 30000,
    "50+": "30000+",
  },
  {
    Yes: "500 / Page",
  },
  {
    "Simple & Attractive": 500,
    "Moderately Styled": 2000,
    "High End": 5000,
    "World Class": 20000,
  },
  {
    "Static CMS": 2000,
    "Dynamic CMS": 5000,
    "Custom CMS": "10000+",
  },
  {
    Basic: 2000,
    Advanced: 5000,
    "Full Deployment": 10000,
  },
  {
    "1 keyword": 1000,
    "2 to 4 keywords": 2000,
    "5 to 10 keywords": 5000,
    "10+ keywords": "5000+",
  },
  {
    "1 to 4": 1000,
    "5 to 10": 2000,
    "11 to 20": 4000,
    "20+": "4000+",
  },
  {
    "Custom Logo": 500,
  },
  {
    "Licensed Images": 2000,
  },
  {
    Chatbot: 5000,
  },
  {
    "Google AdSense": 5000,
  },
  {
    "Domain Registration": 700,
  },
  {
    "Business Email": 700,
  },
  {
    "Downloadable Media": 2000,
  },
  {
    "Site Analytics": 5000,
  },
  {
    "SSL Encryption": 1000,
  },
  {
    "Multi Language": 5000,
  },
  {
    "Editable Content": 5000,
  },
  {
    "Basic OnSite SEO": 2000,
  },
  {
    "Polls and Surveys": 2000,
  },
  {
    "Hosting (1 YR)": 10000,
  },
  {
    "REST API": 5000,
  },
  {
    "SMS Sending Functionality": 10000,
  },
  {
    "Email Sending Functionality": 5000,
  },
  {
    "WhatsApp Integration": 10000,
  },
  {
    "WhatsApp Chat Bot": 20000,
  },
  {
    "Google WorkSpace": 5000,
  },
  //   7696027293
];
const type = document.querySelectorAll(".type .active");
// console.log(type);
type.forEach((i) => {
  i.addEventListener("click", (el) => {
    el.preventDefault();
    type.forEach((i) => i.classList.remove("btnFocus"));
    i.classList.toggle("btnFocus");
  });
});
const extra = document.querySelectorAll(".extra .activ");
// console.log(type);
extra.forEach((i) => {
  i.addEventListener("click", (el) => {
    el.preventDefault();
    // type.forEach((i) => i.classList.remove("btnFocus"));
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
    selected[0] = "Website: " + i.textContent;
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".pages .active").forEach((i) => {
  i.addEventListener("click", () => {
    selected[1] = "Pages: " + i.textContent;
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".yes .no").forEach((i) => {
  i.addEventListener("click", () => {
    if (i.textContent == "No") {
      selected[2] = "";
      return;
    } else {
      selected[2] = "Responsiveness: " + i.textContent;
    }
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".style .active").forEach((i) => {
  i.addEventListener("click", () => {
    selected[3] = "Styling: " + i.textContent;
    // console.log(i.textContent);
  });
});

document.querySelectorAll(".cms .active").forEach((i) => {
  i.addEventListener("click", () => {
    if (i.textContent == "Not Required") {
      // continue;
      selected[4] = "";
      return;
    } else {
      selected[4] = "Panel: " + i.textContent;
    }
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".data .active").forEach((i) => {
  i.addEventListener("click", () => {
    // selected[4] = i.textContent;
    if (i.textContent == "Not Required") {
      // continue;
      selected[5] = "";
      return;
    } else {
      selected[5] = "Database: " + i.textContent;
    }
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".seo .active").forEach((i) => {
  i.addEventListener("click", () => {
    // selected[5] = i.textContent;
    if (i.textContent == "Not Required") {
      // continue;
      selected[6] = "";
      return;
    } else {
      selected[6] = "SEO: " + i.textContent;
    }
    // console.log(i.textContent);
  });
});
document.querySelectorAll(".copy .active").forEach((i) => {
  i.addEventListener("click", () => {
    // selected[6] = i.textContent;
    if (i.textContent == "Not Required") {
      // continue;
      selected[7] = "";
      return;
    } else {
      selected[7] = "Copywriting: " + i.textContent;
    }
    // console.log(i.textContent);
  });
});
const extras = (cnm) => {
  document.querySelector(`.extra${cnm}`).addEventListener("click", () => {
    if (selected[7 + cnm] == "" || selected[7 + cnm] == undefined) {
      selected[7 + cnm] = document.querySelector(`.extra${cnm}`).textContent;
    } else {
      selected[7 + cnm] = "";
    }
  });
};

extras(1);
extras(2);
extras(3);
extras(4);
extras(5);
extras(6);
extras(7);
extras(8);
extras(9);
extras(10);
extras(11);
extras(12);
extras(13);
extras(14);
extras(15);
extras(16);
extras(17);
extras(18);
extras(19);
extras(20);

console.log(selected);
document.querySelectorAll("button").forEach((i) => {
  i.addEventListener("click", () => {
    document.querySelector(".summary").innerHTML = "";
    console.log("ys");
    let cost = 0;
    selected.forEach((j) => {
      if (selected.indexOf(j) <= 7) {
        if (j != "") {
          let currentPrice = price[selected.indexOf(j)];
          if (
            typeof currentPrice[j.split(":").slice(1)[0].slice(1)] == "string"
          ) {
            if (
              currentPrice[j.split(":").slice(1)[0].slice(1)].includes("Page")
            ) {
              if (selected[1].includes("+")) {
                console.log(Number(selected[1].split("+")[0]));
                cost += 500 * Number(selected[1].split(": ")[1].split("+")[0]);
              } else {
                cost += 500 * Number(selected[1].split(": ")[1].split("-")[0]);
              }
            } else if (
              currentPrice[j.split(":").slice(1)[0].slice(1)].includes("+")
            ) {
              console.log(currentPrice[j.split(":").slice(1)[0].slice(1)]);
              cost += Number(
                currentPrice[j.split(":").slice(1)[0].slice(1)].split("+")[0]
              );
            }
            // ol += 1;
          } else {
            cost += Number(currentPrice[j.split(":").slice(1)[0].slice(1)]);
          }
          document.querySelector(".summary").insertAdjacentHTML(
            "beforeend",
            `<div class="webSummary">
                <p>${j}</p>
                <p>${currentPrice[j.split(":").slice(1)[0].slice(1)]} rs</p>
           </div>
            `
          );
        }
      } else {
        if (j != "") {
          //   console.log(j);
          //   console.log(price[selected.indexOf(j)][j]);
          cost += price[selected.indexOf(j)][j];
          document.querySelector(".summary").insertAdjacentHTML(
            "beforeend",
            `<div class="webSummary">
                <p>${j}</p>
                <p>${price[selected.indexOf(j)][j]} rs</p>
           </div>
            `
          );
        }
      }
      // cost += price[selected.indexOf(j)][j];
      document.querySelector(".price").textContent = cost;

      console.log("Cost ", cost);
    });
  });
});
