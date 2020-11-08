function getAll() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

export default {
  getAll
};
