import {Link} from '@common';
import renderMenu from '@app/components/renderMenu';
import RenderPage from '@app/components/renderPage';
import listFiles from '@app/utils/listFiles';
import './index.less';

const Index=props=>{
  const menu=props.store.getState('appMenu');
  const files=listFiles();
  return <div className="frame">
    <div className="header">
      <div className="banner">utils示例</div>
      <ul className="nav">
        {
          menu.map(({path,name,active})=><li key={path||name}>
            <Link to={path} className={active?'active':''} stopPropagation>
              <span>{name}</span>
            </Link>
          </li>)
        }
      </ul>
    </div>
    <div className="menu">
      <ul className="menu-root">
        {renderMenu(files,props.inputPath)}
      </ul>
    </div>
    <div className="main-page">
      <RenderPage {...props} context={files} />
    </div>
  </div>;
};

export default Index;


