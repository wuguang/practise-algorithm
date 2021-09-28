function Node(data){
    this.data = data; 
    this.next = null;
}

function LinkedList(){
    this.head = null;
    this.length = 0;
}

LinkedList.prototype = {
    constructor: LinkedList,
    append:function(data){
        //is No1?
        let newNode = new Node(data);
        if(this.length===0){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.length += 1;
    },
    toString:function(){
        let  current = this.head;
        let  listString = '';
        while(current){
            listString += current.data + ' ';
            current = current.next;
        }
        return listString;
    }, 
    insert:function(position,data){
        if(position<0 && position > this.length){
            console.log('位置不对～～ positon = ' + position + '; size = '+ this.length);
            return false; //
        } 
        let newNode = new Node(data);
        if(position === 0){
            newNode.next = this.head||null;
            this.head = newNode;
        }else{
            let currentPosition = 0;
            let current = this.head;
            while(current.next){
                current = current.next;
                currentPosition ++;
                if(currentPosition === position-1){
                    newNode.next = current.next||null;
                    current.next = newNode;
                }
            }
        }
        this.length += 1;
        console.log(JSON.stringify(this.toString()));
    }, 
    indexOf(data){
        let current = this.head;
        let position = 0;
        let hadFinded = false;
        while(current){
            if(data === current.data){
                hadFinded = true;
                break;
            }
            current = current.next;
            position ++;
            
        }
        return hadFinded? position:-1;
    },
    update(position,data){
        if(position<0 || position>data.length-1) {
            console.log('位置越界～');
            return false;
        }
        let current = this.head;
        let currentIndex = 0;
        while(current){
            if(currentIndex === position){
                current.data = data;
                return true;
            }
            current = current.next;
            currentIndex ++;
        }
        return false;
    }, 
    removeAt(position){
        if(position<0 || position>this.length-1) {
            console.log('位置越界～');
            return false;
        }
        let current = this.head; 
        let currentIndex = 0;  
        while(current){
            if(position-1 === currentIndex){
                console.log(`removeAt current.next=` + current.next.data + '; currentIndex=' + (currentIndex))
                if(current.next.next){
                    current.next = current.next.next;
                }else{
                    current.next = null;
                }
                return true;
            }
            current = current.next;  
            currentIndex ++;
        }
        return false;
    }
}


let list = new LinkedList();
list.append('abc');
list.append('12313');
list.append('cba');
list.append('nba');
list.insert(2,'inser222');
list.insert(3,'inser333');
list.insert(4,'inser444');
list.insert(7,'inser7777');
list.insert(0,'inser00000');
list.insert(2,'2222sinser2222');


list.update(4,"i-am-4444");
list.update(2,"i-am-22222");
list.update(7,"i-am-777777");

console.log(list.toString());
console.log(list.removeAt(19));
console.log(list.removeAt(5));
console.log(list.removeAt(2));
console.log(list.toString())























