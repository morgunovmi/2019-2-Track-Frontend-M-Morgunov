/* eslint-disable no-underscore-dangle */
const template = document.createElement('template')
template.innerHTML = `
    <style>
    svg {
        fill: white;
    }
    
    .chat-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 67px;
        background-color: rgb(130, 64, 163);
    }

    .chat-list-header {
        display: flex;
        flex: 1;
        justify-content: flex-start;
    }

    .clheader-text {
        color: white;
        padding-left: 20px;
    }

    .chat-info-container {
        display: none;
        flex: 1;
        justify-content: center;
    }

    .icon {
        height: 35px;
        width: 35px;
    }

    .chat-icon {
        padding: 0px 20px 0px 20px;
        align-self: center;
    }

    .chat-info {
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    
    .chat-title {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: white;
        font-weight: bold;
        flex-grow: 1;
        text-align: left; 
        margin: 0px;
    }

    .chat-status {
        text-align: center;
        font-size: 10px;
        color: rgb(236, 161, 255);
        margin: 0px;
    }
    svg {
        fill: white;
        transition: fill 0.3s ease;
    }

    .burger-button {
        display: flex;
        padding: 20px 15px 20px 20px;
        cursor: pointer;
    }
    
    .back-button {
        display: none;
        position: relative;
        padding: 20px 15px 20px 20px;
        transition: fill 0.3s;
        cursor: pointer;
    }
    
    .back-button:hover svg {
        fill: rgb(236, 161, 255);
    }
    
    .search-button {
        position: relative;
        padding: 20px 25px 20px 25px;
        transition: fill 0.3s;
        cursor: pointer;
    }
    
    .search-button:hover svg {
        fill: rgb(236, 161, 255);
    }
    
    .menu-button {
        display: none;
        position: relative;
        padding: 20px 25px 20px 25px;
        transition: fill 0.3s;
        cursor: pointer;
    }
    
    .menu-button:hover svg {
        fill: rgb(236, 161, 255);
    }

    .burger-button:hover svg {
        fill: rgb(236, 161, 255);
    }

    </style>
    <div class="chat-header">
        <div class="burger-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
        </div>
        <div class="back-button">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
        </div>
        <div class="chat-list-header">
            <p class="clheader-text">Messenger</p>
        </div>
        <div class="chat-info-container">
            <div class="chat-icon">
                <img class="icon"></img>
            </div>
            <div class="chat-info">
                <p class="chat-title">Donald</p>
                <p class="chat-status">last seen 15 minutes ago</p>
            </div>
        </div>
        <div class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
        </div>
        <div class="menu-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
        </div>
    </div>
`

class ChatHeader extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))

    this.$back = this._shadowRoot.querySelector('.back-button')
    this.$menu = this._shadowRoot.querySelector('.menu-button')
    this.$burger = this._shadowRoot.querySelector('.burger-button')
    this.$ciContainer = this._shadowRoot.querySelector('.chat-info-container')
    this.$back.addEventListener('click', this._onClickBack.bind(this))
    this.$header = this._shadowRoot.querySelector('.chat-list-header')
  }

  _onClickBack(event) {
      event.preventDefault()
      document.querySelector('message-space').style.display = 'none'
      document.querySelector('message-form').style.display = 'none'
      document.querySelector('float-button').style.display = 'flex'
      this.$back.style.display = 'none'
      this.$burger.style.display = 'flex'
      this.$menu.style.display = 'none'
      this.$ciContainer.style.display = 'none'
      this.$header.style.display = 'flex'
      const chatList = document.querySelector('chat-list')
      chatList.style.display = 'flex'
      chatList.chatListUpdate()
  }

  loadChatHeader(chatid) {
      const appState = JSON.parse(window.localStorage.getItem('appState'))
      const thisChat = appState[chatid]
      this.$back.style.display = 'flex'
      this.$burger.style.display = 'none'
      this.$menu.style.display = 'flex'
      this.$ciContainer.querySelector('.chat-title').textContent = thisChat.name
      this.$ciContainer.style.display = 'flex'
      this.$header.style.display = 'none'
      const iList = document.querySelector('chat-list').iconList
        if (iList.includes(`images/chaticon${chatid}.svg`))
            this._shadowRoot.querySelector('.icon').setAttribute('src', `images/chaticon${chatid}.svg`)
        else 
            this._shadowRoot.querySelector('.icon').setAttribute('src', `images/chaticonph.png`)
  }
}

customElements.define('chat-header', ChatHeader)
