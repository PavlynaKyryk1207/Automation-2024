import dataFromFile from "./example.json" with { type: "json" };
console.log(dataFromFile);
async function getSingleUserData() {
  let response = await fetch("https://reqres.in/api/users/2");
  let data = await response.json();
  console.log(data);
  //console.log(response) - log all data for responce
}

getSingleUserData();
// JSON =>
// JSON.parse
// JSON.stringify
// const dataJSON = {
//     "name": "morpheus",
//     "job": "leader"
// }
const dataJSONObject = {
  name: "morpheus",
  job: "leader",
};

// const data = {
//     "name": "morpheus",
//     "job": "leader"
// }
async function createSingleUser() {
  const post_response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    body: dataFromFile,
  });
  let statusCode = post_response.status;
  console.log(statusCode);
  let data_response = post_response.data;
  console.log(data_response);
}
createSingleUser();

let convertJSONInJS = JSON.stringify(dataJSONObject);
console.log(convertJSONInJS);
