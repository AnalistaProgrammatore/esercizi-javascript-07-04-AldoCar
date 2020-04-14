class Queue{
    constructor(data){
        this.dataStore = []
        this.next = null
    }
    enqueue(data) {
        this.dataStore.push(data)
    }

    enqueueStart(data) {
        this.dataStore.unshift(data)
        
    }

    dequeue() {
        return this.dataStore.shift()
    }

    dequeueLast(){
        return this.dataStore.pop()
    }
    
    front(){
        return this.dataStore[0]
    }
    
    back(){
        return this.dataStore[this.dataStore.length-1]
    }

    toString(){
        var retStr = ""
        for (var i = 0; i < this.dataStore.length; ++i){
            retStr += this.dataStore[i] + "\n"
        }
        return retStr
    }

    empty() {
        if(this.dataStore.length == 0) {
            return true
        }else{
            return false
        }
    }
}

function Palindrome(element){
    var wordData = new Queue()
    for (var i = 0; i < wordData.length; ++i){
        wordData.push(word[i])
    }
    var rwordData = ""
    while (wordData.length > 0) {
        rword += stack.pop()
    }
    if (wordData == rwordData) {
        return true
    }else{
        return false
    }
}

var wordData = "Anna"
if (Palindrome(wordData)) {
    console.log(wordData + " is a Palindrome")
}else{
    console.log(wordData + " is not a Palindrome")
}

wordData = "Mario"
if (Palindrome(wordData)) {
    console.log(wordData + " is a Palindrome")
}else{
    console.log(wordData + " is not a Palindrome")
}
