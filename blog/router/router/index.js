import {utils} from '@common';
const {sleep}=utils;
const routers=[
  {
    path:'/',
    name:'首页',
    icon:'HomeOutlined',
    component:()=>import('@app/layout'),
    children:[
      {
        path:'/demo1',
        name:'demo1',
        component:()=>import(`@app/views`),
      },
      {
        path:'/demo2',
        name:'demo2',
        component:()=>import(`@app/views`),
      },
    ],
  },
  {
    path:'/project1',
    name:'project1',
    icon:'HomeOutlined',
    denied:false,
    component:()=>import('@app/layout'),
    children:[
      {
        path:'/p1-1',
        name:'p1-1',
        resolve:{
          p1_1:async ()=>{
            await sleep(2000);
            return {
              result:[1,2,3],
            };
          },
        },
        component:()=>import(`@app/views`),
      },
      {
        path:'/p1-2',
        name:'p1-2',
        component:()=>import(`@app/views`),
      },
      {
        path:'/p1-3',
        name:'p1-3',
        component:()=>import(`@app/views`),
      },
      {
        path:'/p1-4',
        name:'p1-4',
        component:()=>import(`@app/views`),
      },
      {
        path:'/p1-4/:age',
        name:'p1-4:age',
        component:()=>import(`@app/views`),
      },
      {
        path:'/p1-4/:age/:name',
        name:'p1-4:age:name',
        component:()=>import(`@app/views`),
      },
      {
        path:'/p1-4/:age/:name/:id',
        name:'p1-4:age:name:id',
        component:()=>import(`@app/views`),
      },
    ],
  },
  {
    path:'/project2',
    name:'project2',
    icon:'HomeOutlined',
    denied:false,
    component:()=>import('@app/layout'),
    children:[
      {
        path:'/p2-1',
        name:'p2-1',
        component:()=>import(`@app/views`),
      },
      {
        path:'/p2-2',
        name:'p2-2',
        component:()=>import(`@app/views`),
      },
      {
        path:'/p2-3',
        name:'p2-3',
        component:()=>import(`@app/views`),
      },
    ],
  },
  {
    path:'/404',
    name:'404',
    component:props=><span>{props.inputPath} is not found</span>,
    hideMenu:true,
  },
];

export default routers;



