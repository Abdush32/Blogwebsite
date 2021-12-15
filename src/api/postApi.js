const baseUrl = "https://blogmitiz.readandfeel.in/api/v1/get_home";
const localdata = JSON.parse(localStorage.getItem("data"));
const token = localdata.token;

export const gethomePost = (pageno) => {
    console.log();
    return fetch(`${baseUrl}?page=${pageno}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  };