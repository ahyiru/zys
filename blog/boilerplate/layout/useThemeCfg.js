import {useEffect,useState} from 'react';
import MenuTop from './components/menuTop';
import * as configs from './configs';

const asideStyle={
  top:0,
  zIndex:15,
};
const navMenuStyle={
  float:'left',
};
const menuType='navMenu';

const themeCfg={
  defaults:{...configs},
  demo1:{...configs,menuType},
  demo2:{...configs,asideStyle,MenuTop},
  demo3:{...configs,menuType,navMenuStyle},
};

const Index=props=>{
  const {store}=props;
  const defThemeKey=store.getState('huxy-theme')?.key??'defaults';
  const [themeKey,setThemeKey]=useState(defThemeKey);
  useEffect(()=>{
    store.subscribe('huxy-theme',result=>{
      setThemeKey(result.key);
    });
  },[]);
  return themeCfg[themeKey];
};

export default Index;

