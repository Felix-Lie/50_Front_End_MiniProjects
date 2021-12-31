const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContent();
    hideAllItems();

    item.classList.add('active');
    contents[idx].classList.add('show');
  });
});

function hideAllContent() {
  contents.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
  contents.forEach((item) => item.classList.remove('show'));
}
