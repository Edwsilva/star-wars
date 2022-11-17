const API_URL = "https://swapi.dev/api";

const swapi = async (path, params) => {
  console.log("NA API", params, path);
  let response = await fetch(`${API_URL}/${path}`);
  console.log("RESPONSE ", response);
  let json = await response.json();
  console.log("JSON ", json);
  return json;
};

const extractPathFromUrl = (url) => {
  let rgx = /(https?:\/\/\w+\.\w+\/api\/)/g;
  let extractedPath = url;
  if (rgx.test(url)) {
    extractedPath = url.replace(rgx, "");
  }
  return extractedPath;
};

export { swapi, extractPathFromUrl };
