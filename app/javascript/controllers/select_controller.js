import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select"

// Connects to data-controller="select"
export default class extends Controller {
  connect() {
    console.log("hello")
    new TomSelect(this.element,{
      create: true,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
}
