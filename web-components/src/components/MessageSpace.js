/* eslint-disable no-underscore-dangle */
const template = document.createElement('template')
template.innerHTML = `
<style>

.message-line {
  display: flex;
  justify-content: flex-end;
}

@keyframes slideintext {
  from {
    height: 0;
    font-size: 0px;
    width: 0;
    opacity: 0;
  }
  to {
    opacity: 1;
    font-size: 20px;
  }
}

@keyframes slideintime {
  from {
    height: 0;
    font-size: 0px;
    width: 0;
    opacity: 0;
  }
  to {
    opacity: 1;
    font-size: 12px;
  }
}

p.message {
  display: flex;
  justify-content: center;
  word-break: break-word;
  max-width: 400px;
  padding: 2px 2px;
  margin: 1px 1px;
  animation: 0.2s slideintext ease;
}

p.time {
  position: relative;
  display: flex;
  padding: 1px 10px 1px 1px;
  justify-content: flex-end;
  margin: 1px 1px;
  font-size: 12px;
  color: rgb(142, 142, 142);
  animation: 0.2s slideintime ease;
}

.message-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 20px 5px;
  background-color: rgb(245, 227, 255);
  border-radius: 5px;
  margin: 10px 20px 10px 20px;
  animate: 0.2s fadein;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
`

class MessageSpace extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))

    const appState = JSON.parse(window.localStorage.getItem('appState'))
    const thisChat = appState[34]
    if (thisChat.messageBase != null) {
    thisChat.messageBase.forEach(message => {
      const messageTemplate = this._shadowRoot.querySelector('template')
      this._shadowRoot.prepend(messageTemplate.content.cloneNode(true))
      const thisMessage = this._shadowRoot.querySelector('.message-container')
      thisMessage.querySelector('.message').textContent = message.textValue
      thisMessage.querySelector('.time').textContent = message.timeValue
      })
    }
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue)
  }

  spawnMessage(chatid) {
    const appState = JSON.parse(window.localStorage.getItem('appState'))
    const {messageBase} = appState[chatid]
    const testMessage = messageBase[messageBase.length - 1]

    const messageTemplate = this._shadowRoot.querySelector('template')
    this._shadowRoot.prepend(messageTemplate.content.cloneNode(true))
    const thisMessage = this._shadowRoot.querySelector('.message-container')
    thisMessage.querySelector('.message').textContent = testMessage.textValue
    thisMessage.querySelector('.time').textContent = testMessage.timeValue
  }

  loadMessageSpace(chatid) {
    const messageTemplate = this._shadowRoot.querySelector('template')
    const styleElem = this._shadowRoot.querySelector('style')
    while (this._shadowRoot.firstChild !== messageTemplate && this._shadowRoot.firstChild !== styleElem) {
        this._shadowRoot.removeChild(this._shadowRoot.firstChild)
    }
    const appState = JSON.parse(window.localStorage.getItem('appState'))
    const thisChat = appState[chatid]
    thisChat.messageBase.forEach(message => {
      this._shadowRoot.prepend(messageTemplate.content.cloneNode(true))
      const thisMessage = this._shadowRoot.querySelector('.message-container')
      thisMessage.querySelector('.message').textContent = message.textValue
      thisMessage.querySelector('.time').textContent = message.timeValue
    })
    document.querySelector('chat-list').style.display = 'none'
    document.querySelector('float-button').style.display = 'none'
    document.querySelector('message-space').style.display = 'flex'
    const messageForm = document.querySelector('message-form')
    messageForm.chatid = chatid
    messageForm.style.display = 'flex'
  }
}

customElements.define('message-space', MessageSpace)
