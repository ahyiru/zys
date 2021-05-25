import {useEffect,useRef} from 'react';
import {utils} from '@common';

import RenderContext from '@app/components/renderMd/renderContext';
// import test from './test';
// test();

const {scrollToTop,scrollTop,debounce,sort}=utils;

const Index=props=>{
  const {params,router,context}=props;
  const timer=useRef(0);
  const isScrolling=useRef(false);
  const items=useRef({});
  const currentName=useRef('');
  useEffect(()=>{
    if(currentName.current!==params.name){
      currentName.current=params.name;
      const offsetTop=items.current[params.name]?.offsetTop??0;
      isScrolling.current=true;
      scrollToTop(offsetTop);
      timer.current=setTimeout(()=>isScrolling.current=false,600);
    }
    return ()=>{
      clearTimeout(timer.current);
    };
  },[params.name]);
  useEffect(()=>{
    const refList=Object.keys(items.current).map(key=>({name:key,offsetTop:items.current[key]?.offsetTop??0}));
    if(!props.params.name){
      props.router.push({query:{name:refList[0]?.name}});
    }
    const scrollToAnchor=()=>{
      if(!isScrolling.current){
        const offsetTops=sort(Object.keys(items.current).map(key=>({name:key,offsetTop:items.current[key]?.offsetTop??0})),'offsetTop',true);
        const name=offsetTops.find(item=>scrollTop()>=item.offsetTop)?.name;
        if(currentName.current!==name){
          currentName.current=name;
          router.push({query:{name}});
        }
      }
    };
    window.addEventListener('scroll',debounce(scrollToAnchor),false);
    return ()=>window.removeEventListener('scroll',scrollToAnchor,false);
  },[]);

  return <div className="page">
    {
      context.map((item,i)=><div key={item.name} className="page-item" ref={ref=>items.current[item.name]=ref}>
        <h2>{`${item.name}`}</h2>
        <RenderContext name={item.name} />
      </div>)
    }
  </div>;
};

export default Index;

