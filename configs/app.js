const app={
  HOST:process.env.IP||'localhost',
  PORT:process.env.PORT||9500,
  PRO_PORT:process.env.PRO_PORT||9501,
  BUILD_DIR:'./build',//'build',
  // DIST:'../build',
  PUBLIC_DIR:'../public',
  DEV_ROOT_DIR:'',
  PRD_ROOT_DIR:'/',
  PROXY_URL:'http://47.105.94.51:9202',
  // PROXY_URL:'http://192.168.31.160:9202',
  MOCK:'http://localhost:9502',
  SERVER_PORT:9202,
  basepath:'/',
  platform:'pc',
  appNane:'...',
  // publicPath:'http://localhost:9500/',
};

module.exports=app;
