import {useEffect} from 'react';
import {Link} from '@common';
import renderMenu from '@app/components/renderMenu';
import RenderPage from '@app/components/renderPage';
import listFiles from '@app/utils/listFiles';
import './index.less';

const Index=props=>{
  const {params,inputPath}=props;
  const {folder}=params;
  const files=listFiles();
  useEffect(()=>{
    if(!folder){
      props.router.push({query:{folder:files[0]?.name,name:files[0]?.children[0]?.name}});
    }
  },[]);
  const sidebar=files.find(item=>item.name===folder)?.children??[];
  return <div className="frame">
    <div className="header">
      <div className="banner">文档系统</div>
      <ul className="nav">
        {
          files.map(({name,children})=><li key={name}>
            <Link to={{query:{folder:name,name:children[0]?.name}}} className={name===folder?'active':''} stopPropagation>
              <span>{name}</span>
            </Link>
          </li>)
        }
      </ul>
    </div>
    <div className="menu">
      <ul className="menu-root">
        {renderMenu(sidebar,inputPath,params)}
      </ul>
    </div>
    <div className="main-page">
      <RenderPage {...props} context={sidebar} />
    </div>
  </div>;
};

export default Index;


