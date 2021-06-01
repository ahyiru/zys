import {useEffect} from 'react';
import {useRouter,components} from '@common';

import configs from '@app/configs';
import {setTheme} from '@app/configs/defaultConfigs';
import routers from '@app/router';

const {Spinner}=components;

const App=()=>{
  const {store,output,loading}=useRouter({...configs,routers});
  useEffect(()=>{
    if(store){
      setTheme(store);
    }
  },[store]);
  return <>
    {output}
    {loading&&<Spinner global />}
  </>;
};

export default App;


