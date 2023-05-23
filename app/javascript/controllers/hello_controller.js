import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "&t&"
  }

  disable() {
    this.element.textContent = "Bingo!"
    this.element.setAttribute("disabled", "")
  }
}
