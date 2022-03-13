export const Projects = {
    getFeaturedProjects: {
        url: `https://site-api.datocms.com/items?filter[fields][featured][eq]=true&filter[type]=1799537&order_by=number_ASC`,
        method: 'GET',
    },
    getProjects: {
        url: `https://site-api.datocms.com/items?filter[type]=1799537`,
        method: 'GET',
    },
  
  
}