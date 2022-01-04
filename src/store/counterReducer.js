import { createSlice } from "@reduxjs/toolkit";

const initialcountState  = {
    
    followerslist : [{id:1, name:"toast"}, {id:2, name:"rae"}, {id:3, name:"ash"}, {id:4, name:"sykk"}, {id:5,name:"micheal"},{id:6, name:"noname"}],
    followinglist : [{id:1, name:"yvvone"}, {id:2, name:"lily"}, {id:3, name:"poki"}, {id:4, name:"scarra"}, {id:5,name:"john"}],

}
    
export const counterReducer = createSlice({
    name: "counter",
    initialState : initialcountState,
    
    
    reducers :{
        follow(state){
            state.followerslist.length+=1
        },
        
        remove(state){
            state.followerslist.length-=1
           

        },
     
        removefollower(state,action){
            return {
               ...state,
               followerslist : state.followerslist.filter((name)=>(name.id)!==action.payload)
            }
        },
        removeuser(state,action){
            return {
               ...state,
               followinglist : state.followinglist.filter((name)=>(name.id)!==action.payload)
            }
        },
       

    }

})

export const {follow,remove,removefollower, removeuser} = counterReducer.actions
export default counterReducer.reducer