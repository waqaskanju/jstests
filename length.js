export const stringLength = (str) => {
  if (str.length == 0) {
    throw new Error("Length must be greater then 0");
  }
  if (str.length > 10) {
    throw new Error("Length must be smaller then 10");
  } else {
    return str.length;
  }
};

export const reverseString = (str) => {
  const str_split = str.split("");
  const str_reverse = str_split.reverse();
  const reverse = str_reverse.join("");
  return reverse;
};


export class calculator {

constructor(num1,num2){
  this.num1=num1;
  this.num2=num2;
}
add(){

  return this.num1 + this.num2;
}

subtract(){

  return this.num1 - this.num2;
}
}
