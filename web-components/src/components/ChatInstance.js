/* eslint-disable no-underscore-dangle */
const template = document.createElement('template')
template.innerHTML = `
<style>
.chat {
    display:flex;
    align-items: center;
}

.chat-info {
    flex: 1;
    align-items: center;
    border-bottom: 1px solid gray;
}

.chat-icon {
    display: flex;
    padding: 20px;
}

.icon {
    height: 50px;
    width: 50px;
}

.chat-name {
    padding: 4px 4px;
    margin: 1px 1px;
}

.last-message {
    color: rgb(142, 142, 142);
    padding: 4px 4px;
    margin: 1px 1px;
    font-size: 15px;
    max-width: 750px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}

</style>

<div class="chat">
    <div class="chat-icon">
      <img class="icon"></img>
    </div>
    <div class="chat-info">
        <div class="text-info">
            <p class="chat-name"></p>
            <p class="last-message"></p>
        </div>
        <div class="chat-status">
        <p class="time"></p>
        </div>
    </div>
</div>
`

export default class ChatInstance extends HTMLElement {
constructor(id) {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))

    this.chatid = id
    
    this.appState = JSON.parse(window.localStorage.getItem('appState'))
    const thisChat = this.appState[this.chatid]
    this._shadowRoot.querySelector('.icon').setAttribute('src', `images/chaticon${id}.svg`)
    this._shadowRoot.querySelector('.chat-name').textContent = thisChat.name
    this._shadowRoot.querySelector('.last-message').textContent = thisChat.messageBase[thisChat.messageBase.length - 1].textValue
}

updateChat() {
    this.appState = JSON.parse(window.localStorage.getItem('appState'))
    const thisChat = this.appState[this.chatid]
    this._shadowRoot.querySelector('.chat-name').textContent = thisChat.name
    this._shadowRoot.querySelector('.last-message').textContent = thisChat.messageBase[thisChat.messageBase.length - 1].textValue
}

}

customElements.define('chat-instance', ChatInstance)