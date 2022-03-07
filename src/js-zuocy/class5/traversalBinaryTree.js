
function Node(value){
    return{
        value,
        left:null,
        right:null
    }
}

function preOrderTraversal(node,result=[]){
    //
    if(node!==null){
        result.push(node.value);
        preOrderTraversal(node.left,result);
        preOrderTraversal(node.right,result);
        console.log(JSON.stringify(result));
    }
}


function previousNotRecursion(node){
    let newStack = [];
    newStack.push(node);
    while(newStack.length>0){
        let pNode = newStack.pop();
        console.log(`${pNode.value}`);
        let {left,right} = pNode;
        right && newStack.push(right);
        left && newStack.push(left);
    }
}


function middleNotRecursion(node){
    let newStack = [];
    let curNode = node;
    newStack.push(curNode);

    while(curNode){
        newStack.push(curNode.left);
        curNode = curNode.left;
        if(curNode === null){
            let node = newStack.pop();
            console.log(`${node.value}`);
            curNode = node.right;
            //newStack.push(curNode.left);
        }
        
        /* 
        while(curNode === null){
            curNode = newStack.pop();
            console.log(`${node.value}`);
            curNode = curNode.right;
        }
        */
    }
   
}

function middleOrderTraversal(node,result=[]){
    //
    if(node!==null){
        middleOrderTraversal(node.left,result);
        result.push(node.value);
        console.log(`${node.value}`);
        middleOrderTraversal(node.right,result);
    }
}



function postTraversal(node,result=[]){
    //
    if(node!==null){
        preOrderTraversal(node.left,result);
        preOrderTraversal(node.right,result);
        result.push(node.value);
        console.log(JSON.stringify(result));
    }
}

function test(){
    let head = new Node(1);
    head.left = new Node(2);
    head.right = new Node(3);
    head.left.left = new Node(4);
    head.left.right = new Node(5);
    head.right.left = new Node(6);
    head.right.right = new Node(7);
    head.right.right.left = new Node(8);

    //preOrderTraversal(head);
    //middleOrderTraversal(head);
    middleNotRecursion(head);
    //postTraversal(head);
}

test();