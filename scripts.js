const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    item__checkbox = _items.querySelectorAll('.item__checkbox');
    item__checkbox[0].addEventListener('change', finish);
    item__checkbox[1].addEventListener('change', finish);
    item__checkbox[2].addEventListener('change', finish);

    //checkbox = items.getElementsByClassName('.item__checkbox');
    //item = items.getElementsByClassName('.item');


    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {

    daddy=this.parentNode
    daddy.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
  }

  // event handler til að eyða færslu
  function deleteItem(e) {

    console.log('halló heimur');
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
