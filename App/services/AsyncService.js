
export function fetchMovies(){
  return fetch('http://danielgeslin.com/movies.json')
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}
