import {Link,utils} from '@common';
const {getParams}=utils;
const renderMenu=(menu,inputPath,params)=>{
  return menu.map(item=>{
    const {path,name,open,children}=item;
    const active=name===params?.name;
    if(children?.length){
      return <li key={path||name} className={open?'open':''}>
        <Link to={{query:{name}}} className={active?'active':''} preventDefault>
          <span>{name}</span>
        </Link>
        <ul>{renderMenu(children,inputPath)}</ul>
      </li>;
    }
    return <li key={path||name}>
      <Link to={{query:{name}}} className={active?'active':''} stopPropagation>
        <span>{name}</span>
      </Link>
    </li>;
  });
};

export default renderMenu;


