import getImages from '@app/utils/getImages';
// const linkReg=/!?\[.*\]\(.*\)/g;

const imgReg=/!\[.*\]\((.*)\)/g;
const getImgName=url=>{
  // const filepaths=url.split('/');
  // return filepaths[filepaths.length-1];
  return url.slice(2);
};
// const getPaths=names=>Promise.all(names.map(name=>import(`../../doc/images/${name}`)));

const getPaths=async (defaultPaths,folder)=>{
  const asyncPaths={};
  for(let i=0,j=defaultPaths.length;i<j;i++){
    const defaultPath=defaultPaths[i];
    const name=getImgName(defaultPath);
    asyncPaths[defaultPath]=await getImages({folder,name});
  }
  return asyncPaths;
};

const replacePath=async (context,{folder})=>{
  const src=[...context.matchAll(imgReg)].filter(Boolean);
  const defaultPaths=src.map(src=>src[1]);
  if(defaultPaths?.length){
    const asyncPaths=await getPaths(defaultPaths,folder);
    defaultPaths.map(defaultPath=>{
      context=context.replace(defaultPath,asyncPaths[defaultPath]);
    });
  }
  return context;
};

export default replacePath;
