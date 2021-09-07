import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
} from "./actionTypes";



const initialState = {
    tutorials: {
      data: [],
      loader: false,
    },
    createTutorial: {
      data: [],
      loader: false,
    },
    updateTutorial: {
      data: [],
      loader: false,
    },
    deleteTutorial: {
      data: [],
      loader: false,
    }
  }


function tutorialReducer(state = initialState, action: any) {

  switch (action.type) {
    case CREATE_TUTORIAL:
      return {
        ...state,
        createTutorial: {
          ...state.createTutorial,
          data: action.payload.data,
          loader: action.payload.loader
        }
      }


    case RETRIEVE_TUTORIALS:
      return {
        ...state,
        
        tutorials: {
          ...state.tutorials,
          data: action.payload.data,
          loader: action.payload.loader
        }
      }

    case UPDATE_TUTORIAL:
     // console.log(':::::::::::::::state......',state.data)
      return {
        ...state,
    
       updateTutorial: {
         ...state.updateTutorial,
        data: action.payload.data,
        loader: action.payload.loader
       }
      }
      // return state.data.map((tutorial: any) => {
      //   if (tutorial.id === action.payload.id) {
      //     return {
      //       ...state,
        
      //     data: action.payload.data,
      //     loader: action.payload.loader
      //     };
      //   } else {
      //     return tutorial;
      //   }
      // });

     case DELETE_TUTORIAL:
      return {
        ...state,
        
          deleteTutorial: {
            ...state.deleteTutorial,
            data: action.payload.data,
          loader: action.payload.loader
          }
      }
      //  return {
      //    state.data.filter((id: any) => (id) !== action.payload.id);
      //  }
      //  return state.data.map((tutorial: any) => {
      //   if (tutorial.id !== action.payload.id) {
      //     return {
      //       ...state,
        
      //     data: action.payload.data,
      //     loader: action.payload.loader
      //     };
      //   } else {
      //     return tutorial;
      //   }
      // });

     case DELETE_ALL_TUTORIALS:
      return {
        ...state,
        
          data: action.payload.data,
          loader: action.payload.loader
      }
    //   return [];

    default:
      return state;
  }
};

export default tutorialReducer;