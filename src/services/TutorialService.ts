
import { getReq, getReqParam, postReq, putReqParam, deleteReqParam }
  from "./apiCall"

export function getAll() {
  return (dispatch:any) => {
   
    getReq("http://localhost:8080/api/tutorials").then((res: any) => {
      // setTimeout(() => {

       // console.log("retrieve all",res.data)
        
        
       
        dispatch({
          type: 'RETRIEVE_TUTORIALS',
          payload: {
            data: res.data,
            loader: false
          }
        })
      // }, 2000);
    })

  }
}

export function get( id: any) {
  return (dispatch:any) => {
   
    getReqParam(`http://localhost:8080/api/tutorials/${id}`).then((res: any) => {
      // setTimeout(() => {
       // console.log("retrieve by id",res.data)
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        
        dispatch({
          type: 'RETRIEVE_TUTORIALS',
          payload: {
            data: res.data,
            loader: false
          }
        })
      // }, 2000);
    })

  }
}


export function create( data: any) {
  return (dispatch:any) => {
   
    postReq("http://localhost:8080/api/tutorials", data).then((res: any) => {
      // setTimeout(() => {

       // console.log("retrieve",res.data)
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        
        dispatch({
          type: 'CREATE_TUTORIAL',
          payload: {
            data: res.data,
            loader: false
          }
        })
    
      
      // }, 2000);
    }
    
    )

  }
}


export function update( id: any, data: any) {
  return (dispatch:any) => {
   
    putReqParam(`http://localhost:8080/api/tutorials/${id}`, data).then((res: any) => {

      // setTimeout(() => {
          //  console.log(res.data)
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      
        dispatch({
          type: 'UPDATE_TUTORIAL',
          payload: {
            data: res.data,
            loader: false
          }
        })
    
      // }, 2000);
    })

  }
}


export function remove( id: any) {
  return (dispatch:any) => {
   
    deleteReqParam(`http://localhost:8080/api/tutorials/${id}`).then((res: any) => {
      // setTimeout(() => {
      // console.log(res.data)
       // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    
        dispatch({
          type: 'DELETE_TUTORIAL',
          payload: {
            data: res.data,
            loader: false
          }
        })
  
      
      // }, 2000);
    })

  }
}


export function removeAll() {
  return (dispatch: any) => {
    
    deleteReqParam("http://localhost:8080/api/tutorials").then((res: any) => {
      // setTimeout(() => {

      
        // dispatch({
        //   type: DELETE_ALL_TUTORIALS,
        //   payload: {
        //     data: res.data,
        //     loader: false
        //   }
        // })
    
      // }, 2000);
    })

  }
}


export function findByTitle(title:any) {
  return (dispatch: any) => {
   
    getReq(`http://localhost:8080/api/tutorials?title=${title}`).then((res: any) => {
      setTimeout(() => {

        console.log("retrieve",res.data)
        // dispatch({
        //   type: RETRIEVE_TUTORIALS,
        //   payload: {
        //     data: res.data,
        //     loader: false
        //   }
        // })
      }, 2000);
    })

  }
}


const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;