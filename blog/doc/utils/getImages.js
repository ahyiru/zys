const getImages=async ({folder,name})=>(await import(`../doc/${folder}/${name}`))?.default;

export default getImages;

