// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios"

export function moveClockwise(initialWheelState) { 
  return({ type: "MOVE_CLOCKWISE", payload: initialWheelState})
}

export function moveCounterClockwise(initialWheelState) { 
  return({ type: "MOVE_COUNTERCLOCKWISE", payload: initialWheelState})
}

export function selectAnswer(initialSelectedAnswerState) { 
  return ({type: "SET_SELECTED_ANSWER", payload: initialSelectedAnswerState })
}

export function setMessage(initialMessageState) {
  return ({type: "SET_INFO_MESSAGE",payload:initialMessageState}) 
}

export function setQuiz(initialQuizState) { 
  return ({type: "SET_QUIZ_INTO_STATE", payload: initialQuizState })
 }

export function inputChange({ name, value }) { 
  return ({type: "INPUT_CHANGE", payload: { name, value }}) 
}

export function resetForm() { 
  return { type: "RESET FORM"}
}

// ❗ Async action creators
export const fetchQuiz = () => (dispatch)=> {
  dispatch(setMessage(""))
  dispatch(setQuiz({}))
  axios
  .get("http://localhost:9000/api/quiz/next")
  .then(res =>{
    dispatch(setQuiz(res.data))   
  })
  .catch(err =>{
    console.log({err})
  })
}
  // dispatch(setQuiz(""))
    // return function (dispatch) {
      // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
      // On successful GET:
      // - Dispatch an action to send the obtained quiz to its state}
      
export const postAnswer=(addAnswer)=>(dispatch)=> {
  dispatch(selectAnswer(null))
  axios
  .post("http://localhost:9000/api/quiz/answer", addAnswer)
  .then(res =>{
    console.log(res)
    dispatch(setMessage(res.data.message))
    
  })
  .catch(err =>{
    dispatch(setMessage(err.response.data.message))
  })
  dispatch(fetchQuiz())
  
}
  // return function (dispatch) {

  //   // On successful POST:
  //   // - Dispatch an action to reset the selected answer state
  //   // - Dispatch an action to set the server message to state
  //   // - Dispatch the fetching of the next quiz
  // }

export const postQuiz = (newQuiz) =>(dispatch) =>{
  axios
    .post("http://localhost:9000/api/quiz/new", newQuiz)

    .then(res =>{
      console.log(res)
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
    })
    .catch(err =>{
      // console.log({err})
      dispatch(setMessage(err.response.data.message))
    })
    dispatch(resetForm)
  }
  
  // On successful POST:
  // - Dispatch the correct message to the the appropriate state
  // - Dispatch the resetting of the form
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
