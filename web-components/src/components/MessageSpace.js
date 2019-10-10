/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
<style>
.space {
    background-color: rgb(219, 219, 219);
    position: relative;
    height: 100%;
}
</style>
<div class='space'></div>
`;

class MessageSpace extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$space = this._shadowRoot.querySelector('space');
  }

  static get observedAttributes() {
    return ['name', 'value'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$space.setAttribute(name, newValue);
  }
}

customElements.define('message-space', MessageSpace);
