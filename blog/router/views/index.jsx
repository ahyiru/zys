import {useState} from 'react';
import './index.less';

let age=0;
const Index=props=>{
  // console.log(props);
  const {path,current,history,params,store,router,updateRouter}=props;
  const {getState,back}=history;
  const state=getState();
  const [menu,setMenu]=useState();
  const update=()=>{
    updateRouter(prev=>{
      prev.routers[2].denied=!prev.routers[2].denied;
      return {...prev,uptest:prev.uptest?prev.uptest+1:1};
    });
  };
  return <div className="page">
    <div className="page-item">当前路由：{path}</div>
    <div className="page-item">
      <span>面包屑：</span>
      <span>{current.map((item,i)=><span key={item.path}>{`${i?' > ':''}${item.name}`}</span>)}
      </span>
    </div>
    <div className="page-item"><button onClick={e=>back()}>返回上一个路由页面</button></div>
    <div className="page-item">
      <span>resolve异步加载数据：</span>
      <span>{props.p1_1?.pending?'loading...':JSON.stringify(props.p1_1?.result)}</span>
    </div>
    <div className="page-item">
      <span>页面参数：</span>
      <span>{JSON.stringify(params||{})}</span>
    </div>
    <div className="page-item">
      <span>history state：</span>
      <span>{JSON.stringify(state||{})}</span>
    </div>
    <div className="page-item">
      <span>获取菜单：</span>
      <button onClick={e=>setMenu(prev=>prev?null:store.getState('appMenu'))}>{menu?'清空':'获取'}</button>
      <span>{JSON.stringify(menu||{})}</span>
    </div>
    <div className="page-item">
      <span>更新路由：</span>
      <button onClick={e=>update()}>更新project2权限</button>
      <span>{props.uptest??0}</span>
    </div>
    <div className="page-item">
      <span>页面跳转：</span>
      <button onClick={e=>router.push('/project1/p1-1')}>/project1/p1-1</button>
    </div>
    <div className="page-item">
      <span>query参数跳转：</span>
      <button onClick={e=>router.push('/project1/p1-1?query=12&name=huy')}>/project1/p1-1query参数</button>
    </div>
    <div className="page-item">
      <span>params参数跳转：</span>
      <button onClick={e=>router.push({path:'/project1/p1-1',params:{test:123}})}>/project1/p1-1params参数</button>
    </div>
    <div className="page-item">
      <span>state参数跳转：</span>
      <button onClick={e=>router.push({path:'/project1/p1-1',state:{test:'state123'}})}>/project1/p1-1state参数</button>
      <span>页面刷新后state参数仍然保存</span>
    </div>
    <div className="page-item">
      <span>跳转到一级子页面：</span>
      <button onClick={e=>router.push(`/project1/p1-4/${++age}`)}>/project1/p1-4/:age</button>
    </div>
    <div className="page-item">
      <span>跳转到二级子页面：</span>
      <button onClick={e=>router.push(`/project1/p1-4/${++age}/huy${age}`)}>/project1/p1-4/:age/:name</button>
    </div>
    <div className="page-item">
      <span>跳转到三级子页面：</span>
      <button onClick={e=>router.push(`/project1/p1-4/${++age}/huy${age}/${+new Date()}`)}>/project1/p1-4/:age/:name/:id</button>
    </div>
  </div>;
};

export default Index;

