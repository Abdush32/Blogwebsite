export const loginAction = (token) => {
  console.log("Log from AuthAction", token);
  return {
    type: "LOGIN",
    token,
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};
