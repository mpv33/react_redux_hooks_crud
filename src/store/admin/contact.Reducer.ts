

const initialState = {
  data:[]
};
  
  export const adminReducer = (state = initialState, action:any) => {
    switch (action.type) {

      case "ALL_USERS":
        return {
          ...state,
          data: action.payload
        };
        
      case "ADD_USER":
        return {
          ...state,
          data: [...state.data, action.payload]
        }
      case "DELETE_USER":
        const contactFilter = state.data.filter((contact:any) =>
          contact.id !== action.payload ?contact:null
        );
        return {
          ...state,
          data: contactFilter
        };
        
      case "UPDATE_USER":
        const contactUpdate = state.data.filter((contact:any) =>
          contact.id === action.payload.id
            ? Object.assign(contact, action.payload)
            : contact
        );
        return {
          ...state,
          data: contactUpdate
        };
        
      default:
        return state;
    }
  };