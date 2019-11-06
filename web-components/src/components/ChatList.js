/* eslint-disable no-underscore-dangle */
import ChatInstance from './ChatInstance'

const template = document.createElement('template')

class ChatList extends HTMLElement {
    constructor() {
      super()
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(template.content.cloneNode(true))

      // Chats loaded by default
      const dummyChat = {
        name: 'Jeff',
        messageBase: [{origin: 'Jeff', textValue: 'Do not forget about the meeting', timeValue: '12:03',},],
      }
      const tmpAppState =  {
        42: dummyChat,
      }
      const dummyChat2 = {
        name: 'Brock',
        messageBase: [{origin: 'Brock', textValue: 'Hello there', timeValue: '15:05',},],
      }
      tmpAppState[34] = dummyChat2
      this.iconList = ['images/chaticon34.svg', 'images/chaticon42.svg']


      this.appState = JSON.parse(window.localStorage.getItem('appState'))
      if (this.appState === null)
        window.localStorage.setItem('appState', JSON.stringify(tmpAppState))

      this.appState = JSON.parse(window.localStorage.getItem('appState'))
      
    
        Object.keys(this.appState).forEach(key => {
        const thisChat = new ChatInstance(key)
        this._shadowRoot.appendChild(thisChat)
        thisChat.addEventListener('click', this._onChatClick.bind(this, key))
      })
    }

    // eslint-disable-next-line class-methods-use-this
    _onChatClick(chatid) {  
      document.querySelector('message-space').loadMessageSpace(chatid)
      document.querySelector('chat-header').loadChatHeader(chatid)
      document.querySelector('message-form').updateAppState()
    }

    chatListUpdate() {
      this.appState = JSON.parse(window.localStorage.getItem('appState'))
      const chatArray = this._shadowRoot.querySelectorAll('chat-instance')
        chatArray.forEach(chat => {
          chat.updateChat()
        })
    }

    get chatIconList() {
      return this.iconList
    }

    createNewChat(chatName) {
        let chatid = Math.floor(Math.random() * 10000) + 1
        let isAvailable = true
        do {
          // eslint-disable-next-line no-loop-func
          Object.keys(this.appState).forEach(key => {
            if (key === chatid) {
              isAvailable = false
            }
          })
          if (isAvailable === false) {
            chatid = Math.floor(Math.random() * 10000) + 1
          } 
        } while (isAvailable === false)
        const thisChat = new ChatInstance(chatid)
        this._shadowRoot.appendChild(thisChat)
        thisChat.changeChatName(chatName)
        thisChat.addEventListener('click', this._onChatClick.bind(this, chatid))
        const chatObject = {
          name: chatName,
          messageBase: [],
        }
        this.appState[chatid] = chatObject
        window.localStorage.setItem('appState', JSON.stringify(this.appState))
    }
  }
  
  customElements.define('chat-list', ChatList)