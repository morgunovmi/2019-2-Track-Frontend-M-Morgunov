/* eslint-disable no-underscore-dangle */
const template = document.createElement('template')
template.innerHTML = `
<style>
.chat {
    display:flex;
    align-items: center;
    border-bottom: 1px solid rgb(191, 191, 191);
}

.text-info {
    flex: 1;
}

.chat-status {
    display: flex;
    padding: 10px;
    justify-content: center;
    flex-direction: column;
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

.time {
    color: rgb(142, 142, 142);
    padding: 4px 4px;
    margin: 1px 1px;
    font-size: 15px;
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

.message-status {
    height: 20px;
    width: 20px;
    align-self: center;
}

p:empty:not(:focus)::before {
    content: attr(data-placeholder);
  }

</style>

<div class="chat">
    <div class="chat-icon">
      <img class="icon" src="images/chaticonph.png"></img>
    </div>
    <div class="text-info">
        <p class="chat-name"></p>
        <p class="last-message" data-placeholder="Come start this chat"></p>
     </div>
     <div class="chat-status">
        <p class="time" data-placeholder="TBA"></p>
        <img class="message-status" src="images/doubletick.svg"></img>
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
        if (thisChat != null) {
            const iList = document.querySelector('chat-list').iconList
            if (iList.includes(`images/chaticon${id}.svg`))
                this._shadowRoot.querySelector('.icon').setAttribute('src', `images/chaticon${id}.svg`)
            else 
                this._shadowRoot.querySelector('.icon').setAttribute('src', `images/chaticonph.png`)
            this._shadowRoot.querySelector('.chat-name').textContent = thisChat.name
            const lastMessage = thisChat.messageBase[thisChat.messageBase.length - 1]
            if (lastMessage) {
                this._shadowRoot.querySelector('.last-message').textContent = lastMessage.textValue
                this._shadowRoot.querySelector('.time').textContent = lastMessage.timeValue
            }
        }
    }

    updateChat() {
        this.appState = JSON.parse(window.localStorage.getItem('appState'))
        const thisChat = this.appState[this.chatid]
        this._shadowRoot.querySelector('.chat-name').textContent = thisChat.name
        const lastMessage = thisChat.messageBase[thisChat.messageBase.length - 1]
        if (lastMessage) {
            this._shadowRoot.querySelector('.last-message').textContent = lastMessage.textValue
            this._shadowRoot.querySelector('.time').textContent = lastMessage.timeValue
        }
    }

    changeChatName(chatName) {
        this._shadowRoot.querySelector('.chat-name').textContent = chatName
    }

    getChatIcon() {
        return this._shadowRoot.querySelector('.icon').getAttribute('src')
    }
}

customElements.define('chat-instance', ChatInstance)