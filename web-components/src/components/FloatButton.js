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
	background-color: rgb(146, 27, 179);
	border-radius: 50px;
	text-align: center;
    box-shadow: 2px 2px 3px #999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.my-float{
	font-size: 24px;
	margin-top: 18px;
}

.plus {
    fill: white;
}

a.float + div.label-container {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s ease;
}

a.float:hover + div.label-container{
  visibility: visible;
  opacity: 1;
}

a.float:hover svg {
    fill: rgb(243, 222, 255);
}
</style>

<a href="#" class="float">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="plus"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
</a>
<div class="label-container">
  <div class="label-text">Create chat</div>
  <i class="fa fa-play label-arrow"></i>
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