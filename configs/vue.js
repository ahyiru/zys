const app={
  HOST:process.env.IP||'localhost',
  PORT:process.env.PORT|7500,
  PRO_PORT:process.env.PRO_PORT||7501,
  BUILD_DIR:'../build',//'build',
  DIST:'../build',
  PUBLIC_DIR:'../public',
  DEV_ROOT_DIR:'',
  PRD_ROOT_DIR:'/',
  DEFAULT_TOKEN:'Basic 123456',
  PROXY_URL:'http://47.105.94.51:9202',
  // PROXY_URL:'http://127.0.0.1:9202',
  SALT:'yiru',
  TOKEN_SECRET:'yiru',
  mongoUrl:'mongodb://localhost:27017/test',
  serverUrl:'http://localhost:7500',
  serverPort:9202,
  basepath:'/',
  platform:'pc',
  appNane:'...',
  publicPath:'http://localhost:7500/',
};

module.exports=app;
