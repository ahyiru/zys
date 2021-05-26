import {useEffect,useState} from 'react';
import {utils,components} from '@common';
import getContext from '@app/utils/getContext';
import replacePath from '@app/utils/replacePath';

import marked from './marked';

const {str2React}=utils;
const {Spinner}=components;

const Index=({item})=>{
  const [context,setContext]=useState('');
  useEffect(()=>{
    const getMd=async ()=>{
      try{
        const context=await getContext(item);
        const newContext=await replacePath(context,item);
        setContext(marked(newContext));
      }catch(err){
        setContext(err?.message);
      }
    };
    getMd();
  },[]);

  return <div className="content">
    {str2React(context)}
    {!context&&<Spinner global />}
  </div>;
};

export default Index;

