const earningsReducerDefaultState = [];
export default (state = earningsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EARNING":
      return [...state, action.earning];
    case "REMOVE_EARNING":
      return state.filter(earning => earning.id !== earning.removeId);
    case "SET_EARNING":
      return action.earnings;
    case "EDIT_EARNING":
      return state.map(earning => {
        if (earning.id === action.id) {
          return {
            ...earning,
            ...action.updates
          };
        } else return earning;
      });
    default:
      return state;
  }
};
