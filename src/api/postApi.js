const baseUrl = "https://blogmitiz.readandfeel.in/api/v1";
const baseUrl2 = "https://blogmitiz.readandfeel.in/api/v1/post";

// const localdata = JSON.parse(localStorage.getItem("data"));
// const token = localdata.token;

export const gethomePost = (pageno) => {
  console.log();
  return fetch(`${baseUrl}/get_home?page=${pageno}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const singlePost_api = (id) => {
  return fetch(`${baseUrl2}/get_single_front/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const singleCategory = (id) => {
  console.log(id);
  return fetch(`${baseUrl2}/get_category_post/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
