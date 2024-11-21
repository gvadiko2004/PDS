const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const menuMobile = document.querySelector(".menu__mobile");

btnOpen.addEventListener("click", function () {
  menuMobile.classList.add("active");
});

btnClose.addEventListener("click", function () {
  menuMobile.classList.remove("active");
});

// btn-open-users

const btnUser = document.querySelector(".btn-open-users");
const column2 = document.querySelector(".column-2");

btnUser.addEventListener("click", function () {
  btnUser.classList.toggle("active");
  column2.classList.toggle("active");
});

// projects

const btnResidential = document.querySelector(".btn-residential");
const btnRommercial = document.querySelector(".btn-rommercial");
const projectsBlocks = document.querySelector(".projects__blocks");
const projectsBlocks2 = document.querySelector(".projects__blocks--2");

btnResidential.addEventListener("click", function () {
  btnUser.classList.add("active");
  btnResidential.classList.add("active");
  projectsBlocks.classList.remove("active");
  btnRommercial.classList.remove("active");
  projectsBlocks2.classList.remove("active");
});

btnRommercial.addEventListener("click", function () {
  btnUser.classList.remove("active");
  btnRommercial.classList.add("active");
  btnResidential.classList.remove("active");
  projectsBlocks2.classList.add("active");
  projectsBlocks.classList.add("active");
});

// fag__drop-item

const fagItem = document.querySelectorAll(".fag__drop-item");

fagItem.forEach((item) => {
  const fagItemAdd = item.querySelector(".fag__drop-subtitle");
  const icon = item.querySelector(".icon-fag");

  item.addEventListener("click", function () {
    fagItemAdd.classList.toggle("active");
    icon.classList.toggle("active");
    item.style.alignItems = "flex-start";
  });
});
