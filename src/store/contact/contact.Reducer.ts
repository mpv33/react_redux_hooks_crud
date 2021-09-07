const initialState = [
    
    { id: 0, name: "Raman Sharma", email: "email@email.com", phone: 1234567890,date:'2021-01-06',gender:'male',city:'delhi' },
    { id: 1, name: "Test Name", email: "test@test.com", phone: 4567891230 ,date:'2021-01-06',gender:'male',city:'delhi' },
  ];
  
  export const contactReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;
      case "UPDATE_CONTACT":
        const contactUpdate = state.filter((contact) =>
          contact.id === action.payload.id
            ? Object.assign(contact, action.payload)
            : contact
        );
        state = contactUpdate;
        return state;
      default:
        return state;
    }
  };