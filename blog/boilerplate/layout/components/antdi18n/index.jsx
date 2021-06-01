import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';
import jaJP from 'antd/es/locale/ja_JP';

const antLang={
  zh:zhCN,
  en:enUS,
  jp:jaJP,
};

const Index=props=>{
  const {store}=props;
  const language=store.getState('language');
  return <ConfigProvider locale={antLang[language]||zhCN}>
    {props.children}
  </ConfigProvider>;
};

export default Index;
