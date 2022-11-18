function getAPI({ req }) {
  const API = `https://fakestoreapi.com/${req}`;
  return API;
}

export default getAPI;
