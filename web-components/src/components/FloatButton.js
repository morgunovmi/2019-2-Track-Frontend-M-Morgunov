/* eslint-disable no-underscore-dangle */

const template = document.createElement('template')
template.innerHTML = `
<style>
* {
    padding: 0;
    margin: 0;
}

.label-container{
position: fixed;
	bottom: 48px;
	right: 105px;
	display: table;
	visibility: hidden;
}

.label-text{
	color: #FFF;
	background: rgba(51,51,51,0.5);
	display: table-cell;
	vertical-align: middle;
	padding: 10px;
	border-radius: 3px;
}

.float{
	position: fixed;
	width: 60px;
	height: 60px;
	bottom: 40px;
	right: 40px;
	background-color: rgb(242, 224, 27);
	border-radius: 50px;
	text-align: center;
  box-shadow: 2px 2px 3px #999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.2s;
}

.my-float{
	font-size: 24px;
	margin-top: 18px;
}

.pencil {
    opacity: 0.5;
    height: 20px;
    width: 20px;
    transition: opacity 0.5s ease;
}

a.float:active img {
  opacity: 1;
}

a.float + div.label-container {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.5s ease;
}

a.float:hover + div.label-container{
  visibility: visible;
  opacity: 0.75;
}

a.float:hover {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(242, 224, 27, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(242, 224, 27, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(242, 224, 27, 0);
  }
}

a.float:hover img {
  opacity: 0.75;
}
</style>

<a href="#" class="float">
  <img class="pencil" src="images/pencil.svg"></img>
</a>
<div class="label-container">
  <div class="label-text">Create chat</div>
</div>
`

class FloatButton extends HTMLElement {
    constructor() {
      super()
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(template.content.cloneNode(true))

      this.$float = this._shadowRoot.querySelector('.float')
      this.$float.addEventListener('click', this._onFloatClick.bind(this))
    }

    // eslint-disable-next-line class-methods-use-this
    _onFloatClick(event) {
        event.preventDefault()
        const chatName = window.prompt('Who do you want to chat with?')
        if (chatName !== '' && chatName != null)
        document.querySelector('chat-list').createNewChat(chatName)
    }
}
customElements.define('float-button', FloatButton)