const routers=[
  {
    path:'/',
    name:'文档系统',
    icon:'HomeOutlined',
    component:()=>import('@app/components/renderMd'),
  },
  {
    path:'/404',
    name:'404',
    component:props=><span>{props.inputPath} is not found</span>,
    hideMenu:true,
  },
];

export default routers;



