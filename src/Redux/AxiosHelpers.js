import axios from "axios";
const api_root = import.meta.env.VITE_BACKED_API_ROOT;

const getData = async (url, body) => {
  const data = await axios
    .get(api_root + url, body, {
      withCredentials: true,
    })
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return data;
};

const postReq = async (url, body, header) => {
  const data = await axios
    .post(api_root + url, body, {
      withCredentials: true,
    })
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return data;
};

export default { getData, postReq };
