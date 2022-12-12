class Validator {
  _data: any;
  constructor(data: any) {
    this._data = data;
  }
}

class StringValidator extends Validator {
  constructor(data: any) {
    if (typeof data === "string") {
      super(data);
    } else {
      throw new Error("O tipo está errado");
    }
  }
}

class NumberValidator extends Validator {
  constructor(data: any) {
    if (typeof data === "number") {
      super(data);
    } else {
      throw new Error("O tipo está errado");
    }
  }
}

class BooleanValidator extends Validator {
  constructor(data: any) {
    if (typeof data === "boolean") {
      super(data);
    } else {
      throw new Error("O tipo está errado");
    }
  }
}


class RegexValidator extends StringValidator {
  constructor(data: any) {
    super(data);
    const regexp = /^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim;

    if (regexp.test(data)) {
      console.log("Email válido!");
    } else {
      console.log("Email inválido!");
      throw new Error("O formato do email está errado");
    }
  }
}

class EmailInput extends HTMLElement {

  emailInput: HTMLInputElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "closed" });
    this.emailInput = document.createElement("input");
    this.emailInput.type = "email";
    this.emailInput.onchange = (e) => this.onChangeEmail(e);
    shadow.appendChild(this.emailInput);

  }

  onChangeEmail(e: Event) {

    console.log(this.emailInput.value);
    const regexp = new RegexValidator(this.emailInput.value);

  }

}

customElements.define("email-input", EmailInput);
