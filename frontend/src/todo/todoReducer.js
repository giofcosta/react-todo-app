const INITIAL_STATE = {
  description: "",
  filteredList: [],
  list: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return {
        ...state,
        description: action.payload,
        filteredList: state.list.filter(t =>
          t.description.includes(action.payload)
        )
      };
    case "TODO_SEARCHED":
      return {
        ...state,
        list: action.payload,
        filteredList: action.payload.filter(t =>
            t.description.includes(state.description)
          )
      };
    case "TODO_CLEARED":
      return { ...state, description: "" };
    default:
      return state;
  }
};
