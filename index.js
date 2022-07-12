// Responsive code Functionality
const heroSections = document.querySelector(".section-hero");
const mobileNav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobileNav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

const observer = new IntersectionObserver(
  (entry) => {
    const ent = entry[0];
    // console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);
observer.observe(heroSections);

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (event) => {
  const p_btn_clicked = event.target;
  console.log(p_btn_clicked);
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

// Swiper JS Code
new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myJsMedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
};
const widthSize = window.matchMedia("(max-width: 780px)");
// call listener function at run time
myJsMedia(widthSize);
// Attach listener function on state changes
widthSize.addEventListener("change", myJsMedia);

// Scroll to Top Button Functionality
const heroSection = document.querySelector(".section-hero");
const headerSection = document.querySelector(".header");
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};
scrollElement.addEventListener("click", scrollTop);

// Counter Animate Section
const work_section = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;
    const counterNumbers = document.querySelectorAll(".counter-numbers");
    const speed = 200;
    counterNumbers.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incerementNum = Math.trunc(targetNumber / speed);
        // console.log(incerementNum);
        if (initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incerementNum}+`;

          setTimeout(updateNumber, 10);
        }
      };
      updateNumber();
    });
    observer.unobserve(work_section);
  },
  {
    root: null,
    threshold: 0,
  }
);
workObserver.observe(work_section);

// ========================================
//  lazy loading section
// ========================================
const imgRef = document.querySelector("img[data-src]");
console.log(imgRef);

const lazyImg = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = imgRef.dataset.src;
};

const imgObserver = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0,
  // rootMargin: "100px",
});

imgObserver.observe(imgRef);
