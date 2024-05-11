// function for sticky navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector(".head");
  header.classList.toggle("sticky", window.scrollY > 0);
  // console.log(scrollX,scrollY);
});

// function for toggle hamburger icon
const header = document.getElementById("head");
const toggle = document.getElementById("toggle");
const logo = document.getElementById("logo");
const nav = document.getElementById("nav");

document.onclick = function (e) {
  if (
    e.target.id !== "head" &&
    e.target.id !== "toggle" &&
    e.target.id !== "nav"
  ) {
    toggle.classList.remove("ham");
    nav.classList.remove("reveal");
    logo.classList.remove("logos");
  }
};

toggle.onclick = function () {
  toggle.classList.toggle("ham");
  nav.classList.toggle("reveal");
  logo.classList.toggle("logos");
};

// function for Scroll-up button
window.addEventListener("scroll", function () {
  const scroll_up = document.querySelector(".scroll-up");
  scroll_up.classList.toggle("up", window.scrollY > 500);
  // console.log(scrollX,scrollY);
});

// ************ CALL TO ACTION **************
const pop_container = document.querySelector(".popup-container");
const popBtn = document.querySelector(".popup-btn");
const popBox = document.querySelector(".popup-box");
popBtn.onclick = function () {
  pop_container.classList.toggle("pop_container");
  popBox.classList.toggle("pop");
  popBtn.classList.toggle("pop-click");
};



window.addEventListener("scroll", function () {
  popBtn.classList.toggle("remove-pop", window.scrollY > 150);
  // console.log(scrollY);
});




document.addEventListener("mousemove", detect);
function detect(e) {
  this.querySelectorAll(".tri, .squr, .crcl").forEach((tri) => {
    const speed = tri.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    tri.style.transform = `translateX(${x}px) translateY(${y}px) rotate(45deg)`;
  });
}
// *************************************

ScrollOut({
  targets: ".html, .css, .wordpress, .javascript, .photoshop, .heading1",
});

/**
 *
 *
 *
 *
 *
 */

const number92 = document.getElementById("number92");
const number83 = document.getElementById("number83");
const number75 = document.getElementById("number75");
const number80 = document.getElementById("number80");
const number70 = document.getElementById("number70");

//
//
//
// HTML Skill Section
const skill_html = document.querySelector(".html");
const skill_html_Observer = new IntersectionObserver(
  (e_html, observer_html) => {
    const [entry] = e_html;
    // console.log(e_html);

    if (!entry.isIntersecting) return;


    // HTML5_skill
    let counter92 = 0;
    setInterval(() => {
      if (counter92 == 92) {
        clearInterval();
      } else {
        counter92++;
        number92.innerHTML = counter92 + "<span>%</span>";
      }
    }, 20);

    // observer_html.unobserve(skill_html);
  },
  {
    root: null,
    threshold: 0,
  }
);
skill_html_Observer.observe(skill_html);

//
//
//
// CSS Skill Section
const skill_css = document.querySelector(".css");
const skill_css_Observer = new IntersectionObserver(
  (e_css, observer_css) => {
    const [entry] = e_css;
    // console.log(e_css);

    if (!entry.isIntersecting) return;

    // CSS3_skill
    let counter83 = 0;
    setInterval(() => {
      if (counter83 == 83) {
        clearInterval();
      } else {
        counter83++;
        number83.innerHTML = counter83 + "<span>%</span>";
      }
    }, 20);

    // observer_css.unobserve(skill_css);
  },
  {
    root: null,
    threshold: 0,
  }
);
skill_css_Observer.observe(skill_css);

//
//
//
// JS Skill Section
const skill_js = document.querySelector(".javascript");
const skill_js_Observer = new IntersectionObserver(
  (e_js, observer_js) => {
    const [entry] = e_js;
    // console.log(e_js);

    if (!entry.isIntersecting) return;

    // JavaScript
    let counter75 = 0;
    setInterval(() => {
      if (counter75 == 75) {
        clearInterval();
      } else {
        counter75++;
        number75.innerHTML = counter75 + "<span>%</span>";
      }
    }, 24);

    // observer_js.unobserve(skill_js);
  },
  {
    root: null,
    threshold: 0,
  }
);
skill_js_Observer.observe(skill_js);

//
//
//
// WordPress Skill Section
const skill_wp = document.querySelector(".wordpress");
const skill_wp_Observer = new IntersectionObserver(
  (e_wp, observer_wp) => {
    const [entry] = e_wp;
    // console.log(e_wp);

    if (!entry.isIntersecting) return;

    // WordPress
    let counter80 = 0;
    setInterval(() => {
      if (counter80 == 80) {
        clearInterval();
      } else {
        counter80++;
        number80.innerHTML = counter80 + "<span>%</span>";
      }
    }, 24);

    // observer_wp.unobserve(skill_wp);
  },
  {
    root: null,
    threshold: 0,
  }
);
skill_wp_Observer.observe(skill_wp);

//
//
//
// PhotoShop Skill Section
const skill_psd = document.querySelector(".photoshop");
const skill_psd_Observer = new IntersectionObserver(
  (e_psd, observer_psd) => {
    const [entry] = e_psd;
    // console.log(e_psd);

    if (!entry.isIntersecting) return;

    // PhotoShop
    let counter70 = 0;
    setInterval(() => {
      if (counter70 == 70) {
        clearInterval();
      } else {
        counter70++;
        number70.innerHTML = counter70 + "<span>%</span>";
      }
    }, 26);

    // observer_psd.unobserve(skill_psd);
  },
  {
    root: null,
    threshold: 0,
  }
);
skill_psd_Observer.observe(skill_psd);



let pf_list = document.querySelectorAll(".pf_list");
let pf_itemBox = document.querySelectorAll(".pf_itemBox");

for (let i = 0; i < pf_list.length; i++) {
  pf_list[i].addEventListener("click", function () {
    for (let j = 0; j < pf_list.length; j++) {
      pf_list[j].classList.remove("pf_activelist");
    }
    this.classList.add("pf_activelist");

    let dataFilter = this.getAttribute("data-filter-portfolio");
    // console.log(dataFilter);

    for (let k = 0; k < pf_itemBox.length; k++) {
      pf_itemBox[k].classList.remove("pf_activelist");
      pf_itemBox[k].classList.add("pf_hide");

      if ( pf_itemBox[k].getAttribute("data-item-portfolio") == dataFilter || dataFilter == "pf_all" ) {
        pf_itemBox[k].classList.remove("pf_hide");
        pf_itemBox[k].classList.add("pf_activelist");
        // console.log(pf_itemBox);
      }
    }
  });
}
