export const Articles = {
    getArticles: {
        // url: `https://site-api.datocms.com/items?filter[type]=1831736`,
        url: `https://site-api.datocms.com/items?filter[fields][is_side][eq]=false&filter[type]=1831736&order_by=number_ASC`,
        // url: `https://site-api.datocms.com/items?filter[fields]&filter[type]=1831736&order_by=number_ASC`,
        method: 'GET',
     },
    getSideArticles :{
        url: `https://site-api.datocms.com/items?filter[fields][is_side][eq]=true&filter[type]=1831736&order_by=number_ASC`,
        method: 'GET',
    },
    getArticle :{
        url:(id) => `https://site-api.datocms.com/items/${id}`,
        method: 'GET',
    }
  
}