const accordionList = document.querySelectorAll('.js-accordion .questions');

function activeAccordion() {
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item, index) => {
  item.addEventListener('click', activeAccordion);
});
