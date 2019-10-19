/* eslint-disable no-underscore-dangle */
import './MessageForm'

const template = document.createElement('template')
template.innerHTML = `
    <style>

        input {
          padding: 20px 15px 20px 15px;
          border: 0;
          outline: none;
          width: calc(100% - 2px);
        }

        :host {
          display: inline-block;
          border: 0px solid rgba(25, 25, 25, 0.32);
        }

        .form-input-container {
          display: flex;
        }

        .attachment-button {
          background-color: white;
          position: relative;
          padding: 20px 15px 20px 15px;
        }

        .attachment-button:hover svg {
          fill: red;
        }
        
    </style>
    <div class="form-input-container">
    <input type="text">
    <div class="attachment-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.586 10.461l-10.05 10.075c-1.95 1.949-5.122 1.949-7.071 0s-1.95-5.122 0-7.072l10.628-10.585c1.17-1.17 3.073-1.17 4.243 0 1.169 1.17 1.17 3.072 0 4.242l-8.507 8.464c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414l7.093-7.05-1.415-1.414-7.093 7.049c-1.172 1.172-1.171 3.073 0 4.244s3.071 1.171 4.242 0l8.507-8.464c.977-.977 1.464-2.256 1.464-3.536 0-2.769-2.246-4.999-5-4.999-1.28 0-2.559.488-3.536 1.465l-10.627 10.583c-1.366 1.368-2.05 3.159-2.05 4.951 0 3.863 3.13 7 7 7 1.792 0 3.583-.684 4.95-2.05l10.05-10.075-1.414-1.414z"/></svg>
    </div>
    </div>
    </input>
`

class FormInput extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))

    this.$input = this.shadowRoot.querySelector('input')
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue)
  }

  get value() {
    return this.$input.value
  }

  clear() {
    this.$input.value = ''
  }
}

customElements.define('form-input', FormInput)
