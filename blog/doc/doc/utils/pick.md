## pick

在数组或树里获取指定属性，返回新的数组或树。

```javascript
const newTree=_ pick(data,keys=[],childKey='children');

```

keys是我们指定属性列表。childKey为子级字段名，默认为children。

### 使用

对树排序：

```javascript
const arr=[
  {
    name:'bbbb',
    age:18,
    children:[
      {
        name:'111',
        age:33,
      },
      {
        name:'22',
        age:21,
      },
    ],
  },
  {
    name:'cccc',
    age:30,
    children:[
      {
        name:'yiru',
        age:22,
        children:[
          {
            name:'t9',
            age:34,
          },
          {
            name:'t1',
            age:20,
          },
          {
            name:'ggg',
            age:29,
          },
        ],
      },
      {
        name:'huy',
        age:35,
      },
    ],
  },
  {
    name:'aaaa',
    age:40,
  },
];

const newArr=_pick(arr,['age']);

```

结果：

![pick](./images/pick.png)












