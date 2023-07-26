function multiplyByTwo(value) {
  let number = 2;

  function inner (){
    return value * number
  }

  let multiply = inner();
  console.log(multiply);
}

multiplyByTwo(8);