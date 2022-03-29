export const Positions = {
    getFilledPositions: {
        url: `https://site-api.datocms.com/items?filter[type]=1962252&filter[fields][filled][eq]=true`,
        method: 'GET',
    },
    getUnfilledPositions: {
        url: `https://site-api.datocms.com/items?filter[type]=1962252&filter[fields][filled][eq]=false`,
        method: 'GET',
    },
  
}