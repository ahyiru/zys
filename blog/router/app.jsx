import {useRouter,components} from '@common';

import configs from '@app/configs';
import routers from '@app/router';

const {Spinner}=components;

const App=()=>{
  const {output,loading}=useRouter({...configs,routers});
  return <>
    {output}
    {loading&&<Spinner global />}
  </>;
};

export default App;


