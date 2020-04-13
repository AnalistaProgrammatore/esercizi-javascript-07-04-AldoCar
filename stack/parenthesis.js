let Balance = (input) => {

  let parenthesis = "()"
  let stack = []

  for(let par of input) {
    let parenthesisIndex = parenthesis.indexOf(par)

    if(parenthesisIndex % 2 === 0) {
      stack.push(parenthesisIndex + 1)
    } else {
      if(stack.pop() !== parenthesisIndex) {
        return false;
      }
    }
  }
  return stack.length === 0
}

console.log(Balance('()'))
console.log(Balance('()(((()))))))'))
