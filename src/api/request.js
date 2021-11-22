import axios from "axios";

export const HttpMethod = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
};

const request = (options) => axios(options);

export default request;
