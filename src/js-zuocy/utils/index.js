
function Node(value){
    return{
        value,
        left:null,
        right:null
    }
}

function getTree(){
    let head = new Node(17);
    head.left = new Node(15);
    head.right = new Node(28);
    head.left.left = new Node(14);
    head.left.right = new Node(16);
    head.right.left = new Node(25);
    head.right.right = new Node(31);
    head.right.right.left = new Node(30);
    head.right.right.left.right = new Node(31);
    head.right.right.left.right.left = new Node(33);
    return head;
}

function printTree(head){
    //获取树的高度
    const getMaxHeight = (layerArr)=>{
        let _maxHeight = 0;
        while(layerArr.length>0){
            let nextLayerArr = [];
            layerArr.forEach(item=>{
                let {left,right} = item;
                if(left!==null){
                    nextLayerArr.push(left);
                }
                if(right!==null){
                    nextLayerArr.push(right);
                }
            });
            _maxHeight++;
            layerArr = nextLayerArr;
        }
        return _maxHeight;
    }

    let maxHeight = getMaxHeight([head]);

    /*
             5
           ↙ ↘
         ↙     ↘
         6       7
    */

    const print = (head)=>{
        //最大宽度
        let maxNum = Math.pow(2,maxHeight);
        layerArr = [head];
        while(layerArr.length>0){
            let nextLayerArr = [];
            layerArr.forEach(item=>{
                let {left,right} = item;
                if(left!==null){
                    nextLayerArr.push(left);
                }
                if(right!==null){
                    nextLayerArr.push(right);
                }
            });
            _maxHeight++;
            layerArr = nextLayerArr;
        }

    }

    //↑ ↓ ← → ↖ ↗ ↙ ↘ ↔
    //console.log(`maxHeight = ${maxHeight}`);

}

let head = getTree();
printTree(head);


module.exports = {
    Node,
}