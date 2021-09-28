function Queue(){
    this.items = [];
}
//入队
Queue.prototype.enqueue = function(element){
    this.items.push(element);
}

//出队
Queue.prototype.dequeue = function(){
    return this.items.shift();
}

//出队
Queue.prototype.front = function(element){
    if(this.items.length>0){
        return this.items[0];
    }else{
        return null;
    }
}

//isEmpty
Queue.prototype.isEmpty = function(){
    return  this.items.length === 0 ? true:false;
}

//size
Queue.prototype.size = function(){
    return  this.items.length;
}

//size
Queue.prototype.toString = function(){
    return  this.items.toString();
}

function getWinIndex(personArr,num){
    let pQueue = new Queue(); //
    personArr.forEach(item=>{
        pQueue.enqueue(item);
    });

    let count = 0;
    while(pQueue.size()>1){
        count += 1; //
        let goOut = pQueue.dequeue();
        console.log('goOut= '+ goOut);
        if(count != num){
            pQueue.enqueue(goOut);
        }else{
            count = 0;
        }
    }

    console.log('winer is = ' + pQueue.front());
}


getWinIndex(['lily','lucy','tom','lilei','why'],3);






































