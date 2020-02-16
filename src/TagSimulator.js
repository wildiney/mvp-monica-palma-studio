/* eslint-disable space-before-function-paren */
/**
 * @author Wildiney Di Masi <wildiney@gmail.com>.
 */

import { tags } from './tags'

export class TagSimulator {
  constructor() {
    this.createMiniatures()

    const fontSelector = document.getElementById('fontSelector')
    const sizeSelector = document.getElementById('sizeSelector')
    const thumbnails = document.querySelectorAll('.img_menu')
    const inputName = document.getElementById('input_name')

    thumbnails.forEach((img) => {
      img.addEventListener('click', this.changeModelHandler)
    })

    inputName.addEventListener('keyup', () => { this.changeNameHandler(inputName.value) })
    fontSelector.addEventListener('change', this.changeFontHandler)
    sizeSelector.addEventListener('change', this.changeSizeHandler)
  }

  createMiniatures() {
    console.log('generating miniatures')
    const ul = document.createElement('ul')

    tags.map((tag) => {
      const li = document.createElement('li')
      const img = document.createElement('img')
      img.setAttribute('class', 'img_menu')
      img.setAttribute('src', '/assets/img/' + tag.image)
      img.setAttribute('data-image', tag.image)
      img.setAttribute('data-url', tag.url)
      ul.appendChild(li)
      li.appendChild(img)
      document.getElementById('miniatures').appendChild(ul)
    })
  }

  changeNameHandler(name) {
    const fields = document.querySelectorAll('.name p')
    for (let i = 0; i < fields.length; i++) {
      fields[i].textContent = name
    }
  }

  changeModelHandler(event) {
    console.log('changeModelHandler')
    const tag = document.getElementById('tag')
    const image = event.target.dataset.image
    const url = event.target.dataset.url
    tag.style.backgroundImage = "url('/assets/img/" + image + "')"
    const tagUrl = document.getElementById('tag_url')
    tagUrl.setAttribute('href', url)
  }

  changeFontHandler(event) {
    const option = event.target.options[event.target.selectedIndex].value
    const names = document.querySelectorAll('.example .name p')
    for (let i = 0; i < names.length; i++) {
      names[i].style.fontFamily = option
    }
  }

  changeSizeHandler(event) {
    const value = event.target.value
    const names = document.querySelectorAll('.example .name p')
    for (let i = 0; i < names.length; i++) {
      names[i].style.fontSize = value + 'pt'
    }
    console.log(value)
  }
}
