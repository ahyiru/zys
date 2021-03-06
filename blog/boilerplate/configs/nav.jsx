import { UserOutlined, PoweroffOutlined, RestOutlined,ApiOutlined, GithubOutlined,CameraOutlined } from '@ant-design/icons';
import {message} from 'antd';
import themeList from '@app/configs/theme';

import defUser from '@app/assets/images/logo.png';

import html2canvas from 'html2canvas';

import {components,utils} from '@common';
const {Anico}=components;
const {dlfile}=utils;

export const leftNav=({store})=>{
  const i18ns=store.getState('i18ns');
  const {left}=i18ns||{};
  return [
    {
      name:left?.['collapse'],
      type:'collapse',
      Custom:({status})=><Anico type={(status?.value??status)?'right':''} />,
    },
    {
      name:'demo列表',
      type:'projectList',
      Ricon:true,
      children:[
        {
          name:'zbxtable',
          icon:<ApiOutlined />,
          type:'link',
          link:'https://zbx.cactifans.com/',
        },
        {
          name:'PhoenixUI',
          icon:<ApiOutlined />,
          type:'link',
          link:'http://ihuxy.com:8088/',
        },
        {
          name:'API文档',
          icon:<ApiOutlined />,
          type:'link',
          link:'http://ihuxy.com:8010',
        },
      ],
    },
  ];
};
export const rightNav=({store})=>{
  const i18ns=store.getState('i18ns');
  const language=store.getState('language')||{};
  const user=store.getState('profile')||{};
  const themeKey=store.getState('huxy-theme')?.key;
  const {right,theme}=i18ns||{};
  return [
    {
      name:user?.name??right?.['user'],
      img:user?.avatar??defUser,
      children:[
        {
          name:right?.['profile'],
          type:'profile',
          icon:<UserOutlined />,
          path:'/profile',
        },
        {
          name:right?.['logout'],
          type:'logout',
          icon:<PoweroffOutlined />,
          path:'/user/login',
          /* handle:item=>{
            storage.rm('token');
            location.href='/';
          }, */
        },
      ],
    },
    {
      // name:left['themeList'],
      icon:'SettingOutlined',
      type:'themeList',
      // arrowDir:'lt',
      children:themeList(theme).map(v=>{
        v.key===themeKey&&(v.active=true);
        return v;
      }),
    },
    {
      icon:<GithubOutlined />,
      type:'link',
      link:'https://github.com/ahyiru/mern',
    },
    /* {
      name:'fullscreen',
      Custom:()=><FullPage />,
    }, */
    {
      // name:'screencapture',
      icon:<CameraOutlined />,
      handle:item=>{
        html2canvas(document.body).then(canvas=>{
          dlfile(canvas.toDataURL());
          message.success('页面截屏下载完成！');
        }).catch(error=>{
          message.error(error);
        });
      },
    },
    /* {
      name:right['clean_cookie'],
      icon:<RestOutlined />,
      type:'button',
      handle:item=>{
        storage.clear();
        location.href='/';
      },
    },
    {
      name:right['projectList'],
      type:'projectList',
      Ricon:true,
      children:[
        {
          name:'zbxtable',
          icon:<ApiOutlined />,
          type:'link',
          link:'https://zbx.cactifans.com/',
        },
        {
          name:'vue-demo',
          icon:<ApiOutlined />,
          type:'link',
          link:'http://ihuxy.com:8501/',
        },
        {
          name:'layout',
          icon:<ApiOutlined />,
          type:'link',
          link:'http://ihuxy.com:9301/test-app1/',
        },
        {
          name:'projectTest',
          icon:<ApiOutlined />,
          type:'link',
          link:'http://ihuxy.com:9501/',
        },
      ],
    },
    {
      name:'PhoenixUI',
      icon:<ApiOutlined />,
      type:'link',
      link:'http://ihuxy.com:8088/',
    }, */
  ];
};

