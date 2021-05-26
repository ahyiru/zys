import {useState,useEffect,useRef} from 'react';
import {utils} from '@common';
import './index.less';

const {scrollToTop,scrollTop,debounce,sort}=utils;

const Index=props=>{
  const isScrolling=useRef(false);
  const timer=useRef(0);
  const items=useRef({});
  const currentName=useRef('');
  const menu=props.store.getState('appMenu');
  const sidebar=menu.find(item=>item.active)?.utils??[];
  useEffect(()=>{
    if(currentName.current!==props.params.name){
      currentName.current=props.params.name;
      const offsetTop=items.current[props.params.name]?.offsetTop??0;
      isScrolling.current=true;
      scrollToTop(offsetTop);
      timer.current=setTimeout(()=>isScrolling.current=false,600);
    }
    return ()=>{
      clearTimeout(timer.current);
    };
  },[props.params.name]);
  useEffect(()=>{
    const refList=Object.keys(items.current).map(key=>({name:key,offsetTop:items.current[key]?.offsetTop??0}));
    if(!props.params.name){
      props.router.push({query:{name:refList[0]?.name}});
    }
    const offsetTops=sort(refList,'offsetTop',true);
    window.addEventListener('scroll',debounce(()=>{
      if(!isScrolling.current){
        const name=offsetTops.find(item=>scrollTop()>=item.offsetTop)?.name;
        if(currentName.current!==name){
          currentName.current=name;
          props.router.push({query:{name}});
        }
      }
    }),false);
  },[]);
      
  // console.log(111,offsetTop,isScrollBottom());
  return <div className="page">
    {
      sidebar.map(item=><div key={item.name} className="page-item" ref={ref=>items.current[item.name]=ref}>
        <h4>{item.name}</h4>
        <section>{item.describe}</section>
        <section>{item.code}</section>
      </div>)
    }
  </div>;
};

export default Index;

