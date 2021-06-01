import {defaults,demo1,demo2,demo3} from './themes';

const themeList=()=>[
  {
    name:'defaults',
    key:'defaults',
    list:defaults,
    type:'theme',
  },
  {
    name:'demo1',
    key:'demo1',
    list:demo1,
    type:'theme',
  },
  {
    name:'demo2',
    key:'demo2',
    list:demo2,
    type:'theme',
  },
  {
    name:'demo3',
    key:'demo3',
    list:demo3,
    type:'theme',
  },
];

export default themeList;

