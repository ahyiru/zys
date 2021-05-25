// const linkReg=/!?\[.*\]\(.*\)/g;

const imgReg=/!\[.*\]\((.*)\)/g;
const getImgName=url=>{
  const filepaths=url.split('/');
  return filepaths[filepaths.length-1];
};
// const getPaths=names=>Promise.all(names.map(name=>import(`../../doc/images/${name}`)));

const getPaths=async defaultPaths=>{
  const asyncPaths={};
  for(let i=0,j=defaultPaths.length;i<j;i++){
    const defaultPath=defaultPaths[i];
    const name=getImgName(defaultPath);
    asyncPaths[defaultPath]=(await import(`../doc/images/${name}`))?.default;
  }
  return asyncPaths;
};

const replacePath=async context=>{
  const src=[...context.matchAll(imgReg)].filter(Boolean);
  const defaultPaths=src.map(src=>src[1]);
  const asyncPaths=await getPaths(defaultPaths);
  defaultPaths.map(defaultPath=>{
    context=context.replace(defaultPath,asyncPaths[defaultPath]);
  });
  return context;
};

export default replacePath;
