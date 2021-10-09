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
                        
                        swapCount ++;
                        //break;
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

    shellSort(list){
        let swapCount = 0;
        let compareCount = 0;
        /*
        if(Array.isArray(list) && list.length>1){
            let len = list.length;
            //变多
            let gap = Math.ceil(len/2);
            while(gap>0){
                let group = Math.floor(len/gap);
                //i 提供组
                for(let i=0;i<group;i++){
                    for(let j=i*gap+i;j>0;j-=gap){
                        
                        if(list[j]<list[j-1]){
                            this.swap(list,j,j-1);
                        }
                        
                    }
                }
                //变少/3是什么选择??
                gap = Math.floor(gap/3);
            }
        }
        */
        return list;
    }

    initArrForQuickSort(arr){
        let len = arr.length;
        if(len>2){
            let middle = Math.floor(len/2);
            if(arr[0]>arr[middle]){
                this.swap(arr,0,middle);
            }
            if(arr[middle]>arr[len-1]){
                this.swap(arr,middle,len-1);
            }
            this.swap(arr,middle,len-1);
        }
        return arr;
    }

    quickSort(list){
        let swapCount = 0;
        let compareCount = 0;
        let doQucik = list=>{
            list = this.initArrForQuickSort(list);
            let len = list.length;
            let left = 1;
            let right = len-3;
            let target = list[len-2];
            while(left !==right){
                while(list[left]<=target){
                    left++;
                }
                while(list[right]>=target){
                    right++;
                    //console.log(`right = ${right}`);
                }
                if(left !== right){

                    console.log(` this.swap----left = ${left}---right = ${right}`);
                    console.log(`before list[left] = ${list[left]}-----list[right] = ${list[right]}`);
                    this.swap(list,left,right);
                    console.log(`after list[left] = ${list[left]}-----list[right] = ${list[right]}`);
                }
                break;

            }

            if(list[left]>=target){
                this.swap(list,left,len-2);
                list = [...doQucik(list.slice(0,left)),target,...doQucik(list.slice(left+1,len))];

            }else{
                this.swap(list,left+1,len-2);
                list = [...doQucik(list.slice(0,left+1)),target,...doQucik(list.slice(left+2,len))];
            }
            //一轮排序完成
            return list;
        }

        if(Array.isArray(list) && list.length>1){
            list = doQucik(list);
        }
        console.log(JSON.stringify(list));
        return list;
    }
}


//test
let mySort = new JsSort();

mySort.quickSort([2,12,2,3,12,2,4,12,14,16,17,3,52,4,576,8,982,28,23,34]);