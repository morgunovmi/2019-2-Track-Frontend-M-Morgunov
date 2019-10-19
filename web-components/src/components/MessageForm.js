/* eslint-disable no-underscore-dangle */

const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
        }

        input[type=submit] {
            visibility: collapse;
        }

    </style>
    <form>
        <form-input name="message-text" placeholder="Введите сообщение">
        </form-input>
    </form>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');
    this.$input = this._shadowRoot.querySelector('form-input');

    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    this.$input.addEventListener('submit', this._onSubmit.bind(this));
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  _onSubmit(event) {
    event.preventDefault();
    if (this.$input.value !== '') {
      const curDate = new Date();
      const curTime = `${curDate.getHours()}:${curDate.getMinutes()}`;
      const message = {
        textValue: this.$input.value,
        timeValue: curTime,
      };
      window.localStorage.setItem('message', JSON.stringify(message));
      const messageSpace = document.querySelector('message-space');
      messageSpace.spawnMessage();
      this.$input.clear();
    }
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
