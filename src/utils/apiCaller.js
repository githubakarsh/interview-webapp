function apiCaller(endpoint, method, body) {
  const response = fetch("http://localhost:3333/employees")
    .then((data) => data.json())
    .catch((error) => {
      console.log("error here");
      return error;
    });
  return response;
}

export default apiCaller;
