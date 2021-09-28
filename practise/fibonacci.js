const getIndexVal = (n)=>{
    let lastOne = 1;
    let lastTwo = 1;
    let index = 3;

    if(n<2){
        return 1;
    }else{
        while(index<n){
            let temp = lastTwo;
            lastTwo = lastOne;
            lastOne = lastOne + temp;
            console.log(`lastTwo=${lastTwo}---lastOne=${lastOne}`);
            index ++;
        }
        console.log(`val = ${lastOne + lastTwo}`);
        return lastOne + lastTwo;
    }
}

getIndexVal(3);

/*
async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}
async function async2() {
    console.log("async2");
}
console.log("script start");
setTimeout(function() {
    console.log("setTimeout");
}, 0);
async1();
new Promise(function(resolve) {
    console.log("promise1");
    resolve();
}).then(function() {
    console.log("promise2");
});
console.log("script end");
*/




/*
已知如下数组：

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组




给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1：

输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
输出: [5, 6, 7, 1, 2, 3, 4]
解释:
    向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
示例 2：

输入: [-1, -100, 3, 99] 和 k = 2
输出: [3, 99, -1, -100]
解释:
    向右旋转 1 步: [99, -1, -100, 3]
向右旋转 2 步: [3, 99, -1, -100]





第 86 题：周一算法题之「两数之和」
答案： 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

示例：

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回[0, 1]







第 88 题：实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度
答案： 以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：

// 原始 list 如下
let list = [{
        id: 1,
        name: '部门A',
        parentId: 0
    },
    {
        id: 2,
        name: '部门B',
        parentId: 0
    },
    {
        id: 3,
        name: '部门C',
        parentId: 1
    },
    {
        id: 4,
        name: '部门D',
        parentId: 1
    },
    {
        id: 5,
        name: '部门E',
        parentId: 2
    },
    {
        id: 6,
        name: '部门F',
        parentId: 3
    },
    {
        id: 7,
        name: '部门G',
        parentId: 2
    },
    {
        id: 8,
        name: '部门H',
        parentId: 4
    }
];
const result = convert(list, ...);

// 转换后的结果如下
let result = [{
    id: 1,
    name: '部门A',
    parentId: 0,
    children: [{
            id: 3,
            name: '部门C',
            parentId: 1,
            children: [{
                id: 6,
                name: '部门F',
                parentId: 3
            }, {
                id: 16,
                name: '部门L',
                parentId: 3
            }]
        },
        {
            id: 4,
            name: '部门D',
            parentId: 1,
            children: [{
                id: 8,
                name: '部门H',
                parentId: 4
            }]
        }
    ]
}, ···];


第 92 题：已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
答案：

>
const value = '112' >
    const fn = (value) => {
            >
            ...
            >
        } >
        fn(value) // 输出 [1， 11， 112]
        >




第 93 题：给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))。
答案： 示例 1：

nums1 = [1, 3];
nums2 = [2];
中位数是 2.0

示例 2：

nums1 = [1, 2];
nums2 = [3, 4];
中位数是(2 + 3) / 2 = 2.5




第 99 题：编程算法题
用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。




第 101 题：修改以下 print 函数，使之输出 0 到 99，或者 99 到 0
要求：

1、只能修改 setTimeout 到 Math.floor(Math.random() * 1000 的代码

2、不能修改 Math.floor(Math.random() * 1000

3、不能使用全局变量

> function print(n) {
    >
    setTimeout(() => {
        >
        console.log(n); >
    }, Math.floor(Math.random() * 1000)); >
} >
for (var i = 0; i < 100; i++) {
    >
    print(i); >
} >


第 110 题：编程题，请写一个函数，完成以下功能
输入 '1, 2, 3, 5, 7, 8, 10'

输出 '1~3, 5, 7~8, 10'

答案：



第 121 题：统计 1 ~ n 整数中出现 1 的次数。
例如统计 1 ~ 400W 出现 1 的次数。

答案：

function findOne(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        count += String(i).split('').filter(item => item === '1').length
    }
    return count;
}


第 125 题：算法题
如何将 [{id: 1}, {id: 2, pId: 1}, ...] 的重复数组（有重复数据）转成树形结构的数组 [{id: 1, child: [{id: 2, pId: 1}]}, ...] （需要去重）

答案：

哈希表，时间复杂度O(n)

const fn = arr => {
    const res = []
    const map = arr.reduce((res, item) => ((res[item.id] = item), res), {})
    for (const item of Object.values(map)) {
        if (!item.pId) {
            res.push(item)
        } else {
            const parent = map[item.pId]
            parent.child = parent.child || []
            parent.child.push(item)
        }
    }
    return res
}

// const arr = [{id: 1}, {id:2, pId: 1}, {id: 3, pId: 2}, {id: 4}, {id:3, pId: 2}, {id: 5, pId: 4}]
// fn(arr) => [{id: 1, child: [{id: 2, pId: 1, child: [{ id: 3, pId: 2}]}]}, {id: 4, child: [{id: 5, pId: 4}]}]


第 126 题：扑克牌问题
有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；

最后桌子上的牌顺序为： (牌底) 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 (牌顶)；

问：原来那堆牌的顺序，用函数实现。




第 135 题：算法题（盛大）
在一个字符串数组中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，请为该数组排序。使得排序后数组中球的顺序为: 黄、红、蓝。

例如：红蓝蓝黄红黄蓝红红黄红，排序后为：黄黄黄红红红红红蓝蓝蓝。
*/

/*
第 31 题：改造下面的代码，使之输出 0 - 9，写出你能想到的所有解法。

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

for (var i = 0; i < 10; i++) {
    ((i)=>{
        setTimeout(() => {
            console.log(i);
        }, 1000);
    })(i);
}

*/


















