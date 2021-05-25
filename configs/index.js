const appName=require('./appName');
const app=require('./app');
const vue=require('./vue');
const cfg={
  app,
  vue,
  demo1:app,
  login:app,
  'blog/router':{...app,PORT:7000,PRO_PORT:7001},
  'blog/utils':{...app,PORT:7010,PRO_PORT:7011},
  'blog/hooks':{...app,PORT:7020,PRO_PORT:7021},
  'blog/components':{...app,PORT:7030,PRO_PORT:7031},
  'blog/styles':{...app,PORT:7040,PRO_PORT:7041},
  'blog/nodejs':{...app,PORT:7050,PRO_PORT:7051},
  'blog/mongodb':{...app,PORT:7060,PRO_PORT:7061},
  'blog/modules':{...app,PORT:7070,PRO_PORT:7071},
  'blog/boilerplate':{...app,PORT:7080,PRO_PORT:7081},
};

const configs=cfg[appName]||app;
configs.appName=appName;

module.exports=configs;
