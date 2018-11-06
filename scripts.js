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

    item__button = _items.querySelectorAll('.item__button');
    item__button[0].addEventListener('click', deleteItem);
    item__button[1].addEventListener('click', deleteItem);
    item__button[2].addEventListener('click', deleteItem);

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();

    const form = document.querySelector('.form');

    form__input = form.querySelector('.form__input');
    form__input.addEventListener('input', function () {
      console.log(form__input.value);
    });

    form__button = form.querySelector('.form__button');
    form__button.addEventListener('click', add(form__input.value));

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {

    daddy = this.parentNode;
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

    const items = document.querySelector('.items');

    jason = el('li', 'item', '0');
    johnny = el('input', 'item__checkbox', 'change');
    johnny.setAttribute('type', 'checkbox')
    johnson = el('span', 'item__text', '0');
    johnson_jr = document.createTextNode(value);
    justin = el('button', 'item__button', 'click');
    justin_jr = document.createTextNode('Eyða');

    items.append(jason);
    jason.append(johnny,johnson,justin);
    justin.append(justin_jr);
    johnson.append(johnson_jr);

  }

  // event handler til að eyða færslu
  function deleteItem(e) {

    mommy = this.parentElement;
    items.removeChild(mommy)
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {

    const el = document.createElement(type);
    el.setAttribute('class', className);
    if (clickHandler == 'click') {
    el.addEventListener(clickHandler, deleteItem);
  } else if (clickHandler == 'change') {
    el.addEventListener(clickHandler, finish);
  }
    return el;
  }

  return {
    init: init
  }
})();
