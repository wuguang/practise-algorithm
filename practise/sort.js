class JsSort {
    swap(list, i, j) {
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
        }
        //冒泡排序
    bubble(list) {
        let swapCount = 0;
        let compareCount = 0;
        if (Array.isArray(list) && list.length > 1) {
            let len = list.length;
            for (let startIndex = 0; startIndex < len - 1; startIndex++) {
                for (let i = 1, len = list.length - startIndex; i < len; i++) {
                    compareCount++;
                    if (list[i - 1] > list[i]) {
                        this.swap(list, i - 1, i);
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

    selectionSort(list) {
        let swapCount = 0;
        let compareCount = 0;
        if (Array.isArray(list) && list.length > 1) {
            for (let i = 0, len = list.length; i < len; i++) {
                let selected = i;
                for (let j = selected + 1; j < len; j++) {
                    compareCount++;
                    if (list[j] < list[selected]) {
                        selected = j;
                    }
                }
                this.swap(list, i, selected);
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

    insertSort(list) {
        let swapCount = 0;
        let compareCount = 0;
        if (Array.isArray(list) && list.length > 1) {
            for (let i = 1, len = list.length; i < len; i++) {
                for (let j = i; j > 0; j--) {
                    compareCount++;
                    if (list[j] < list[j - 1]) {
                        console.log(`list[j] = ${list[j]}----list[j-1] = ${list[j-1]}`);
                        this.swap(list, j, j - 1);

                        swapCount++;
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

    shellSort(list) {
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

    initArrForQuickSort(arr, left, right) { 
        //right-left
        let middle = Math.floor((right - left) / 2);
        //对三个数排序
        if (arr[left] > arr[middle]) {
            this.swap(arr, left, middle);
        }
        //console.log(`111111-initArrForQuickSort = arr = ${JSON.stringify(arr)}`);
        if (arr[middle] > arr[right]) {
            this.swap(arr, middle, right);
        }
        //console.log(`22222222--initArrForQuickSort = arr = ${JSON.stringify(arr)}`);
        if (arr[left] > arr[middle]) {
            this.swap(arr, left, middle);
        }
        //console.log(`333333-initArrForQuickSort = arr = ${JSON.stringify(arr)}`);
        //最后一步将 目标值放在合理的位置上
        this.swap(arr, middle, right - 1);
        //console.log(`initArrForQuickSort = arr = ${JSON.stringify(arr)}`);
       
        return arr;
    }

    quickSort(list) {
        let swapCount = 0;
        let compareCount = 0;
        let exeTimes = 0;
        let doQucik = (list, left, right) => {
            console.log(`left = ${left}-----------right = ${right}`);
            list = this.initArrForQuickSort(list, left, right);
            let len = list.length;
            let privot = list[right - 1];

            console.log(`init----initArrForQuickSort = list = ${JSON.stringify(list)}`);
            while (left <= right) {
                while (list[left] <= privot) {
                    left++;
                }
                while (list[right] >= privot) {
                    right--;
                }
                console.log(`left = ${left}----right = ${right}`);
                //left 走到更大的位置了
                if(left>right){
                    //得到正确的位置完毕
                    this.swap(list, left, len - 2);
                    break;
                }else{
                    console.log(`left = {}`);
                    this.swap(list, left, right);
                    //交换之后又可以比较了
                }
                
            }

            console.log(`privot = ${privot}---list = ${JSON.stringify(list)}`);
            
            //完成，执行新的二分排序，求新的left，及right
            let left_new_left = 0;
            let left_new_right = left - 1;

            //左边排序递归排序
            if (left_new_right - left_new_left > 2) {
                doQucik(list, left_new_left, left_new_right);
            } 
            //右边递归排序
            let right_new_left = left + 1;
            let right_new_right = len - 1;
            if (right_new_right - right_new_left > 2) {
                doQucik(list, right_new_left, right_new_right);
            } 
            //一轮排序完成
            return list;
        }

        if (Array.isArray(list) && list.length > 1) {
            let len = list.length;
            list = doQucik(list, 0, len - 1);
        }
        console.log(JSON.stringify(list));
        return list;
    }

}


//test
let mySort = new JsSort();

mySort.quickSort([34,12,3,16,2,5,18,10]);