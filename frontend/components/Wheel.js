import React from 'react'
import { connect, useDispatch} from 'react-redux'
import { moveClockwise, moveCounterClockwise} from '../state/action-creators'



function Wheel(props) {
  

  const dispatch = useDispatch()
  return (
    <div id="wrapper">
      <div id="wheel">
        
        <div className={`cog ${props.wheel.cog[0] === "B" ? "active" : ""}`} style={{ "--i":  0 }}>{props.wheel.cog[0] === "B" ? "B" : ""}</div>
        <div className={`cog ${props.wheel.cog[1] === "B" ? "active" : ""}`} style={{ "--i":  1 }}>{props.wheel.cog[1] === "B" ? "B" : ""}</div>
        <div className={`cog ${props.wheel.cog[2] === "B" ? "active" : ""}`} style={{ "--i":  2 }}>{props.wheel.cog[2] === "B" ? "B" : ""}</div>
        <div className={`cog ${props.wheel.cog[3] === "B" ? "active" : ""}`} style={{ "--i":  3 }}>{props.wheel.cog[3] === "B" ? "B" : ""}</div>
        <div className={`cog ${props.wheel.cog[4] === "B" ? "active" : ""}`} style={{ "--i":  4 }}>{props.wheel.cog[4] === "B" ? "B" : ""}</div>
        <div className={`cog ${props.wheel.cog[5] === "B" ? "active" : ""}`} style={{ "--i":  5 }}>{props.wheel.cog[5] === "B" ? "B" : ""}</div>
        
       
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={()=> dispatch(moveCounterClockwise())}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={()=> dispatch(moveClockwise())}>Clockwise</button>
      </div>
    </div>
  )
}

const wheelReducer = (s) =>{
  return{
    wheel: s.wheel
  }
}

export default connect(wheelReducer)(Wheel)