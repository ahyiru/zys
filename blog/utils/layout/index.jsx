import {Link} from '@common';
import renderMenu from '@app/components/renderMenu';
import RenderPage from '@app/components/renderPage';
import './index.less';

const test=()=>{
  const context=require.context('../doc',true,/\.md$/);
  console.log(context.keys());
  // return context.keys().map(name=>name.replace(/^\.\/(.+)\.md$/,'$1'));
};
test();
const Index=props=>{
  const menu=props.store.getState('appMenu');
  const sidebar=menu.find(item=>item.active)?.utils??[];
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
        {renderMenu(sidebar,props.inputPath)}
      </ul>
    </div>
    <div className="main-page">
      <RenderPage {...props} sidebar={sidebar} />
    </div>
  </div>;
};

export default Index;


