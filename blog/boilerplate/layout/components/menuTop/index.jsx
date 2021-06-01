import defUser from '@app/assets/images/4.png';
import './index.less';

const Index=props=>{
  
  return <div className="menu-tpbar">
    <div className="tpbar-user">
      <img src={defUser} />
    </div>
    <h4>{'admin2'}</h4>
  </div>;
};

export default Index;


