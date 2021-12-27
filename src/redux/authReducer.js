const authInitial = {
  token: null,
};

const authReducer = (state = authInitial, action) => {
    console.log("AUTHREDUCER HELLO");
  switch (action.type) {
      case "LOGIN":
          return {
        ...state,
        token: action.token,
      };

    case "LOGOUT":
      return {
        ...state,
        user_id: null,
        email: null,
        mobile: null,
        name: null,
        profile_pic: null,
        token: null,
      };
      default:
          return state;
  }
};

export default authReducer;