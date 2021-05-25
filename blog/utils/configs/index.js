export const browserRouter=!process.env.isDev;

const {DEV_ROOT_DIR,PRD_ROOT_DIR}=require('@configs');

export const basepath=browserRouter?PRD_ROOT_DIR:DEV_ROOT_DIR;

export default {
  browserRouter,
  // beforeRender,
  basepath,
  // afterRender,
  // store:createStore(),
};



