import Flatpickr from "stimulus-flatpickr";
// import Rails from "rails-ujs";

// import a theme (could be in your main CSS entry too...)
import "flatpickr/dist/themes/dark.css";

// import the translation files and create a translation mapping
import { German } from "flatpickr/dist/l10n/de.js";
import { english } from "flatpickr/dist/l10n/default.js";

// create a new Stimulus controller by extending stimulus-flatpickr wrapper controller
export default class extends Flatpickr {
  locales = {
    de: German,
    en: english
  };

  connect() {
    //define locale and global flatpickr settings for all datepickers
    this.config = {
      locale: this.locale,
      altInput: true,
      showMonths: 1
    };

    super.connect();
  }

  get locale() {
    if (this.locales && this.data.has("locale")) {
      return this.locales[this.data.get("locale")];
    } else {
      return "";
    }
  }
}