class Queue{
    constructor(data){
        this.dataStore = []
        this.next = null
    }
    enqueue(data) {
        this.dataStore.push(data)
    }

    enqueueStart(data) {
        this.dataStore.reverse().push(data)
        return this.dataStore.reverse()
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

var q = new Queue()
q.enqueue("Mario")
q.enqueue("Aldo")
q.enqueue("Riccardo")
console.log(q.toString())
console.log("front of queue: " + q.front())
console.log("Back of queue: " + q.back())

q.dequeueLast()
console.log(q.toString())

q.enqueueStart("Mariuccio")
console.log(q.toString())
