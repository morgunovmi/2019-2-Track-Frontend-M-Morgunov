/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
<style>

.message-line {
  display: flex;
  justify-content: flex-end;
}

p.message {
  display: flex;
  justify-content: center;
  word-break: break-word;
  overflow-wrap: break-all;
  max-width: 400px;
  padding: 2px 2px;
  margin: 1px 1px;
}

p.time {
  position: relative;
  display: flex;
  padding: 1px 10px 1px 1px;
  justify-content: flex-end;
  margin: 1px 1px;
  font-size: 12px;
}

.message-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 20px 5px;
  background-color: rgb(248, 201, 255);
  border-radius: 5px;
  box-shadow: 1px 1px 2px #888;
  margin: 10px 20px 10px 20px;
}

</style>
<template>
  <div class="message-line">
    <div class="message-container">
      <p class="message"></p>
      <p class="time"></p>
    </div>
  </div>
</template>
`;

class MessageSpace extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  spawnMessage(input, time) {
    const messageTemplate = this._shadowRoot.querySelector('template');
    this._shadowRoot.appendChild(messageTemplate.content.cloneNode(true));
    const thisMessage = this._shadowRoot.querySelector('.message-container');
    thisMessage.querySelector('.message').textContent = input;
    thisMessage.querySelector('.time').textContent = time;
  }
}

customElements.define('message-space', MessageSpace);
