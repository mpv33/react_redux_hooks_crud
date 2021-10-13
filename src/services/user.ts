
import { getReq} from "./apiCall"

export function getAll() {

return (dispatch:any) => {
  getReq("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((res: any) => {
  
    console.log('all users ',res.data)
    if(res.status==200){
        dispatch({
            type: 'ALL_USERS',
            payload:res.data,
            
          })
    }
     
  })

}
}




const UserService = {
getAll,

};

export default UserService;