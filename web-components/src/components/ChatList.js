/* eslint-disable no-underscore-dangle */
import ChatInstance from './ChatInstance'

const template = document.createElement('template')

class ChatList extends HTMLElement {
    constructor() {
      super()
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(template.content.cloneNode(true))

      const dummyChat = {
        name: 'ahem',
        messageBase: [{origin: 'Jeff', textValue: 'Feck off', timeValue: '12:03',},],
      }
      const tmpAppState =  {
        42: dummyChat,
      }
      const dummyChat2 = {
        name: 'jeff',
        messageBase: [{origin: 'Jeff', textValue: 'Hello there', timeValue: '12:03',},],
      }
      tmpAppState[34] = dummyChat2
      this.appState = JSON.parse(window.localStorage.getItem('appState'))
      if (this.appState === null)
        window.localStorage.setItem('appState', JSON.stringify(tmpAppState))

      this.appState = JSON.parse(window.localStorage.getItem('appState'))
      
      if (this.appState == null) {
        this.appState = {}
      }
      else {
          Object.keys(this.appState).forEach(key => {
          const thisChat = new ChatInstance(key)
          this._shadowRoot.appendChild(thisChat)
          thisChat.addEventListener('click', this._onChatClick.bind(this, key))
        })
      }
    }

    // eslint-disable-next-line class-methods-use-this
    _onChatClick(chatid) {
      document.querySelector('message-space').loadMessageSpace(chatid)
      document.querySelector('chat-header').loadChatHeader(chatid)
    }

    chatListUpdate() {
      this.appState = JSON.parse(window.localStorage.getItem('appState'))
      const chatArray = this._shadowRoot.querySelectorAll('chat-instance')
        chatArray.forEach(chat => {
          chat.updateChat()
        })
    }
  }
  
  customElements.define('chat-list', ChatList)