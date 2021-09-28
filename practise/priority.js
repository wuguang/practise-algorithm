function PriorityQueue(){
    
    function QueueElement(element,priority){
        this.element = element;
        this.priority = priority;
    }

    this.items = [];

    PriorityQueue.prototype.enqueue = function (element,pripority){
        var queueElement = new QueueElement(element,pripority);
        if(this.items.length ===0){
            this.items.push(queueElement);
        }else{
            let hadInserted = false;
            for(let i=0; i<this.items.length; i++){
                if(queueElement.priority<this.items[i].priority){
                    this.items.splice(i,0,queueElement);
                    hadInserted = true;
                    break;
                }
            }
            if(!hadInserted){
                this.items.push(queueElement);
            }
        }
    }
}

let pq = new PriorityQueue();

pq.enqueue('abc',111);
pq.enqueue('aba',200);
pq.enqueue('nba',50);
pq.enqueue('ndd',66);

console.log(JSON.stringify(pq.items));


















































