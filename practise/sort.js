class JsSort{
    swap(list,i,j){
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
    //冒泡排序
    bubble(list){
        let swapCount = 0;
        let compareCount = 0;
        if(Array.isArray(list) && list.length>1){
            let len = list.length;
            for(let startIndex=0;startIndex<len-1;startIndex++){
                for(let i= 1,len=list.length-startIndex;i<len;i++){
                    compareCount ++;
                    if(list[i-1]>list[i]){
                        this.swap(list,i-1,i);
                        swapCount++;
                    }
                }
            }
        }
        console.log(`swapCount = ${swapCount}`);
        console.log(`compareCount = ${compareCount}`);
        let n = list.length;
        console.log(`n = ${n}---1/2(n^2-n) = ${(n*n-n)/2}`);
        console.log(JSON.stringify(list));
        //比较次数 (n-1 + 1)/2*(n-1) = 1/2(n^2-n)    O(n^2)
        //交换次数 等量的  如何定????
        //时间复杂度: O(n^2)
        //空间复杂度: O(1)
        //稳定
        return list;
    }

    selectionSort(list){
        let swapCount = 0;
        let compareCount = 0;
        if(Array.isArray(list) && list.length>1){
            for(let i=0,len=list.length;i<len;i++){
                let selected = i;
                for(let j=selected+1;j<len;j++){
                    compareCount++;
                    if(list[j]<list[selected]){
                        selected = j;
                    }
                }
                this.swap(list,i,selected);
                swapCount++;
            }
        }
        console.log(`swapCount = ${swapCount}`);
        console.log(`compareCount = ${compareCount}`);
        let n = list.length;
        console.log(`n = ${n}---1/2(n^2-n) = ${(n*n-n)/2}`);
        console.log(JSON.stringify(list));
        return list;
    }

    insertSort(list){
        let swapCount = 0;
        let compareCount = 0;
        if(Array.isArray(list) && list.length>1){
            for(let i=1,len=list.length;i<len;i++){
                for(let j=i;j>0;j--){
                    compareCount++;
                    if(list[j]<list[j-1]){
                        console.log(`list[j] = ${list[j]}----list[j-1] = ${list[j-1]}`);
                        this.swap(list,j,j-1);
                        console.log(JSON.stringify(list));
                        swapCount ++;
                        break;
                    }
                }
            }
        }

        console.log(`swapCount = ${swapCount}`);
        console.log(`compareCount = ${compareCount}`);
        let n = list.length;
        //console.log(`n = ${n}---1/2(n^2-n) = ${(n*n-n)/2}`);
        console.log(JSON.stringify(list));
        return list;
    }




}


//test
let mySort = new JsSort();

mySort.insertSort([2,3,52,4,576,8,982,23,23,34]);