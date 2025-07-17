import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItems:(state,action)=>{
            const index=state.items.findIndex(item=>item.id===action.payload.id);
            if(index!==-1){
                state.items.splice(index,1);
            }
        },
        clearCart:(state)=>{
            //this will not work because the state is not getting updated
            //state=[];
            // these will work
            state.items=[];
            //return {items:[]};
            //state.items.length=0;
        }
    }
})
export const {addItems,removeItems,clearCart}=cartSlice.actions
export default cartSlice.reducer;