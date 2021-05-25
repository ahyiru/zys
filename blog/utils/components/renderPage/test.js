import {utils} from '@common';

const {createStore}=utils;

const {getState,setState,subscribe}=createStore();


const test=()=>{
  console.log('start:');
  setState({
    testData:{
      name:'test',
    },
  });
  const testGet=()=>{
    const result=getState('testData');
    console.log('getState: ',result);
  };

  const asyncFn=()=>{
    setTimeout(()=>{
      setState({
        asyncTest:{
          name:'asyncTest',
        },
      });
    },2000);
  };

  subscribe('asyncTest',result=>{
    console.log('asyncTest: ',result);
  });

  testGet();
  asyncFn();
  console.log('end:');
};


export default test;

