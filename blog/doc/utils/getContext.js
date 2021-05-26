const getContext=async ({folder,name})=>(await import(`../doc/${folder}/${name}.md`))?.default;

export default getContext;

