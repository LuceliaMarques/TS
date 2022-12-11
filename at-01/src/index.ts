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
  
  const obj = new BooleanValidator(5);
  console.log("teste: ", obj._data);
  