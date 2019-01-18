export default (state = null, action) => {
  switch (action.type) {
    case "select_library":
      console.log("inside case>>>", action);
      console.log("inside case>>>>>>", action.payload);
      return action.payload;
    default:
      return state;
  }
};
