function Stack(){
    this.items = []; //
}

Stack.prototype.push = (element)=>{
    this.items.push(element);
}

Stack.prototype.pop = ()=>{
    this.items.pop();
}

Stack.prototype.toString = ()=>{
    this.items.toString();
}


function getBinNum(inputNum){
    let myStack = [];
    let mod = null;
    let nextNum = inputNum;
    while(nextNum!=0){
        mod = nextNum%2;
        nextNum = Math.floor(nextNum/2);
        myStack.push(mod);
    }
    console.log(myStack.reverse().toString());
}

getBinNum(10);



