export const SET_USER = (user) => {
  return {
    type: "SET_USER",
    user: user,
  };
};
export const GRT_USER = () => {
  return {
    type: "GRT_USER",
  };
};
export const SET_USER_NULL = () => {
  return {
    type: "SET_USER_NULL",
    user: null,
  };
};
