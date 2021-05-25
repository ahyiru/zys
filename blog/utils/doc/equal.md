## equal

对象比较。

```javascript
const isEqual=equal(obj1,obj2);

```

### 使用

```javascript
const arr1=[
    {
      name:'cccc',
      children:[
        {
          name:'yiru',
          children:[
            {
              name:'t9',
            },
            {
              name:'t1',
            },
            {
              name:'ggg',
            },
          ],
        },
        {
          name:'huy',
        },
      ],
    },
    {
      name:'aata',
      children:[
        {
          name:'444',
        },
        {
          name:'555',
        },
      ],
    },
  ];
  const arr2=[
    {
      name:'cccc',
      children:[
        {
          name:'yiru',
          children:[
            {
              name:'t9',
            },
            {
              name:'t1',
            },
            {
              name:'ggg',
            },
          ],
        },
        {
          name:'huy',
        },
      ],
    },
    {
      name:'aata',
      children:[
        {
          name:'444',
        },
        {
          name:'555',
        },
      ],
    },
  ];

  const isEqual=equal(arr1,arr2);

  console.log(isEqual); //true

```













