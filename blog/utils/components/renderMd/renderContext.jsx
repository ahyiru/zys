import {useEffect,useState} from 'react';
import {utils,components} from '@common';
import replacePath from '@app/utils/replacePath';

import marked from './marked';

const {str2React}=utils;
const {Spinner}=components;

const Index=({name})=>{
  const [context,setContext]=useState('');
  useEffect(()=>{
    const getContext=async ()=>{
      try{
        const context=(await import(`../../doc/${name}.md`))?.default;
        const newContext=await replacePath(context);
        setContext(marked(newContext));
      }catch(err){
        setContext(err?.message);
      }
    };
    getContext();
  },[]);

  return <div className="content">
    {str2React(context)}
    {!context&&<Spinner global />}
  </div>;
};

export default Index;

