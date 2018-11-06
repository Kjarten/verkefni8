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

    const item__checkbox = _items.querySelectorAll('.item__checkbox');
    item__checkbox[0].addEventListener('change', finish);
    item__checkbox[1].addEventListener('change', finish);
    item__checkbox[2].addEventListener('change', finish);

    const item__text = _items.querySelectorAll('.item__text');
    item__text[0].addEventListener('click', edit);
    item__text[1].addEventListener('click', edit);
    item__text[2].addEventListener('click', edit);

    const item__button = _items.querySelectorAll('.item__button');
    item__button[0].addEventListener('click', deleteItem);
    item__button[1].addEventListener('click', deleteItem);
    item__button[2].addEventListener('click', deleteItem);

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();

    const form = document.querySelector('.form');

    const form__input = form.querySelector('.form__input');
    form__input.addEventListener('input', function () {
      console.log(form__input.value);
    });

    form__button = form.querySelector('.form__button');
    form__button.addEventListener('click', add(form__input.value));

    form__input.value = '';

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {

    let parentFinish = this.parentNode;

    parentFinish.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {

    let parentEdit = this.parentNode;
    let txtEdit = this.innerHTML;

    editChild = el('input', 'text', 'item__edit', 'input');
    editChild.setAttribute("value", txtEdit);

    parentEdit.replaceChild(editChild, this);

    const item__edit = parentEdit.querySelector('.item__edit');
    item__edit.addEventListener('keypress', commit);

    this.focus();

  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    if (13 == e.keyCode) {

        let parentCommit = this.parentNode;

        this.addEventListener('input', function () {
          console.log(this.value);
        });

        commitChild = el('span', '0', 'item__text', 'click');
        text_el2 = document.createTextNode(this.value);

        commitChild.append(text_el2);


        parentCommit.replaceChild(commitChild, this);

    }  }

  // fall sem sér um að bæta við nýju item
  function add(value) {

    if (value.trim() != '') {

      const items = document.querySelector('.items');

      parent_el = el('li', '0', 'item', '0');
      checkbox_el = el('input', 'checkbox', 'item__checkbox', 'change');
      span_el = el('span', '0', 'item__text', 'click');
      text_el = document.createTextNode(value);
      button_el = el('button', '0', 'item__button', 'click');
      button_txt_el = document.createTextNode('Eyða');

      items.append(parent_el);
      parent_el.append(checkbox_el, span_el, button_el);
      span_el.append(text_el);
      button_el.append(button_txt_el);

      } else {

    }
  }

  // event handler til að eyða færslu
  function deleteItem(e) {

    mommy = this.parentElement;
    items.removeChild(mommy)
  }

  // hjálparfall til að útbúa element
  function el(element, type, className, clickHandler) {

    const el = document.createElement(element);
    el.setAttribute('class', className);
    if (type != 0) {
      el.setAttribute('type', type);
    }
    if (className == 'item__button') {
      el.addEventListener(clickHandler, deleteItem);
    } else if (className == 'item__checkbox') {
      el.addEventListener(clickHandler, finish);
    } else if (className == 'item__text') {
      el.addEventListener(clickHandler, edit);
    }
    return el;
  }

  return {
    init: init
  }
})();
