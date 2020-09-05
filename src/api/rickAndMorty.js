const axios = require('axios');

const getData = async (n = 1) => {
  const { data } = await axios(`https://rickandmortyapi.com/api/character/${n}`);
  return data;
}

module.exports = {
  getData
};