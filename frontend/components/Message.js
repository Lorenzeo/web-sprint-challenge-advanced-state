import React from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, postAnswer, setMessage } from "../state/action-creators"

function Message(props) {
  
  
return <div id="message">
  
  {props.message && <h1>{props.message}</h1>}


  </div>

}
const mapState = (s) => {
  return {
    message: s.infoMessage
  }
}
export default connect(mapState, { postAnswer, fetchQuiz, setMessage } )(Message)
