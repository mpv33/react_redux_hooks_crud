

const axios = require("axios");
export function getReq(url: string) {
  return axios.get(url);
}

export function getReqParam(url: string) {
  return axios.get(url);
}
export function postReq(url: string, args: any) {
  return axios({
    method: "post",
    url: url,
    data: args,
  });
}
export function postReqParam(url: string, args: any) {
  return axios({
    method: "post",
    url: url,
    data: args,
  });
}
export function putReqParam(url: string, args: any) {
  return axios({
    method: "put",
    url: url,
    data: args,
  });
}
export function deleteReqParam(url: string) {
  return axios.delete(url);
}