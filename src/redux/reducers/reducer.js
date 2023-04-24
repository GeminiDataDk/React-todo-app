const Inital_State = {
  User_data: [],
};

export const todoreducers = (state = Inital_State, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        User_data: [...state.User_data, action.payload],
      };
    case "REMOVE_DATA":
      const deleteData = state.User_data.filter(
        (ele, key) => key !== action.payload
      );
      return {
        ...state,
        User_data: deleteData,
      };
    case "UPDATE_DATA":
      // eslint-disable-next-line
      const updateData = state.User_data.map((ele, key) => key == action.d ? action.payload : ele);
      return {
        ...state,
        User_data: updateData,
      };
    default:
      return state;
  }
};
