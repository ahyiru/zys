const routers=[
  {
    path:'/',
    name:'概览',
    icon:'HomeOutlined',
    component:()=>import('@app/layout'),
    children:[
      {
        path:'/dashboard',
        name:'Dashboard',
        icon:'DashboardOutlined',
        component:()=>import('@app/views'),
      },
      {
        path:'/products',
        name:'Products',
        icon:'FundProjectionScreenOutlined',
        component:()=>import('@app/views'),
      },
      {
        path:'/designs',
        name:'Designs',
        icon:'LaptopOutlined',
        component:()=>import('@app/views'),
      },
      {
        path:'/apis',
        name:'Apis',
        icon:'ApiOutlined',
        component:()=>import('@app/views'),
      },
      {
        path:'/users',
        name:'Users',
        icon:'UsergroupAddOutlined',
        component:()=>import('@app/views'),
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



