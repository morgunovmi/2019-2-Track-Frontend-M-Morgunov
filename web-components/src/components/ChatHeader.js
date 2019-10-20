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

    .chat-info-container {
        display: flex;
        flex: 1;
        justify-content: center;
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
        color: rgb(243, 222, 255);
        margin: 0px;
    }
    
    .back-button {
        position: relative;
        padding: 20px 15px 20px 15px;
    }
    
    .back-button:hover svg {
        fill: rgb(243, 222, 255);
    }
    
    .search-button {
        position: relative;
        padding: 20px 25px 20px 25px;
    }
    
    .search-button:hover svg {
        fill: rgb(243, 222, 255);
    }
    
    .menu-button {
        position: relative;
        padding: 20px 25px 20px 25px;
    }
    
    .menu-button:hover svg {
        fill: rgb(243, 222, 255);
    }

    </style>
    <div class="chat-header">
        <div class="back-button">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
        </div>
        <div class="chat-info-container">
        <div class="chat-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z"/></svg>
        </div>
        <div class="chat-info">
        <p class="chat-title">Donald</p>
        <p class="chat-status">last seen 15 minutes ago</p>
        </div>
        </div>
        <div class="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
        </div>
        <div class="menu-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
        </div>
    </div>
`

class ChatHeader extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))

    this.$back = this.shadowRoot.querySelector('back-button')
    this.$menu = this.shadowRoot.querySelector('menu-button')
    this.$search = this.shadowRoot.querySelector('search-button')
  }

  static get observedAttributes() {
    return ['name', 'value']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$back.setAttribute(name, newValue)
    this.$menu.setAttribute(name, newValue)
    this.$search.setAttribute(name, newValue)
  }
}

customElements.define('chat-header', ChatHeader)
