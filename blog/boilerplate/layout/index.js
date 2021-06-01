import Layout from '@huxy/layout';
import useNavList from './components/useNavList';

import useThemeCfg from './useThemeCfg';

let id=0;

const Index=props=>{
  const {store}=props;
  const [leftList,rightList]=useNavList({store});
  const configs=useThemeCfg({store});

  return <Layout key={id++} {...props} leftList={leftList} rightList={rightList} {...configs} />;
};

export default Index;

