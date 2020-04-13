class Stack {
    constructor() {
      this.dataStore = []
      this.top = 0
    }
    push(data){
      this.dataStore[this.top++] = data
    }
    peek(){
      return this.dataStore[this.top-1]
    }
    pop(){
      return this.dataStore[--this.top]
    }
    clear(){
      return this.top = 0
    }
    length(){
      return this.dataStore.length
    }
  }
  
  let stack = new Stack
  
  stack.push('red')
  stack.push('yellow')
  stack.push('white')
  
  let accStack = new Stack
  let newStack = new Stack
  while (stack.top > 0) {
    if (stack.peek() == 'yellow') {
      stack.pop()
    }else {
      accStack.push(stack.pop())
    }
  }
  while (accStack.top > 0) {
    newStack.push(accStack.pop())
  }
  //controllo
  console.log(newStack.peek())
  console.log(newStack.pop())
  console.log(newStack.peek())
