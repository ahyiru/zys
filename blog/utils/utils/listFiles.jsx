const listFiles=()=>require.context('../doc',true,/^\.\/(.+)\.md$/).keys().map(name=>({name:name.replace(/^\.\/(.+)\.md$/,'$1')}));

export default listFiles;

