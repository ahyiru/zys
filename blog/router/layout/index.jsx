import {Link} from '@common';
import './index.less';

const renderMenu=menu=>{
  return menu.map(item=>{
    const {path,name,open,active,children}=item;
    if(children?.length){
      return <li key={path||name} className={open?'open':''}>
        <Link to={path} className={active?'active':''} preventDefault>
          <span>{name}</span>
        </Link>
        <ul>{renderMenu(children)}</ul>
      </li>;
    }
    return <li key={path||name}>
      <Link to={path} className={active?'active':''} stopPropagation>
        <span>{name}</span>
      </Link>
    </li>;
  });
};

const Index=props=>{
  const menu=props.store.getState('appMenu');
  const {children}=props;
  const sidebar=menu.find(item=>item.active)?.children??[];
  return <div className="frame">
    <div className="header">
      <div className="banner">banner</div>
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
        {renderMenu(sidebar)}
      </ul>
    </div>
    <div className="main-page">
      {children}
    </div>
  </div>;
};

export default Index;


