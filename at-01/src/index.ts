class Validator
{
    data : number | string | boolean | undefined | null | void;
    constructor(data : number | string | boolean | undefined | null | void){
        this.data = data;
    }
}

let valid = new Validator("data");
console.log(valid.data);
