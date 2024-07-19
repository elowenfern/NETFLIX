import React, { useReducer, useState } from 'react'
const initialstate={
    count:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
        
        case 'decrement':
            return {count:state.count-1}
        
        default:
            return state

    }
}
function Counter() {
    const[state,dispatch]=useReducer(reducer,initialstate)
    
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
    </div>
  )
}

export default Counter
