import getNeighborhoodsList from './ES6_basic/2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);

/*
npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
*/