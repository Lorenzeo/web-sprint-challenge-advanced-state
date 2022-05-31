// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'



const initialWheelState = ["B","","","","",""]
function wheel(state = {cog:initialWheelState}, action) {
  switch(action.type){
    case "MOVE_CLOCKWISE":
      if(state.cog[0] === "B"){
      return {...state, cog:["","B","","","",""] }
    } else if(state.cog[1] === "B"){
      return {...state, cog:["","","B","","",""] }
    } else if(state.cog[2] === "B"){
      return {...state, cog:["","","","B","",""] }
    } else if(state.cog[3] === "B"){
      return {...state, cog:["","","","","B",""] }
    } else if(state.cog[4] === "B"){
      return {...state, cog:["","","","","","B"] }
    } else if(state.cog[5] === "B"){
      return {...state, cog:["B","","","","",""] }
    }
    break;
    case "MOVE_COUNTERCLOCKWISE":
      if(state.cog[0] === "B"){
        return {...state, cog:["","","","","","B"] }
      } else if(state.cog[5] === "B"){
        return {...state, cog:["","","","","B",""] }
      } else if(state.cog[4] === "B"){
        return {...state, cog:["","","","B","",""] }
      } else if(state.cog[3] === "B"){
        return {...state, cog:["","","B","","",""] }
      } else if(state.cog[2] === "B"){
        return {...state, cog:["","B","","","",""] }
      } else if(state.cog[1] === "B"){
        return {...state, cog:["B","","","","",""] }
      }
    break;
    default: 
      return state
  }
}

const initialQuizState = {}
function quiz(state = initialQuizState, action) {
  switch(action.type){
  case "SET_QUIZ_INTO_STATE":
    return action.payload
  case "RESET_FORM":
    return state = {}
  default:
    return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case "SET_SELECTED_ANSWER":
      return action.payload
    default:
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case "SET_INFO_MESSAGE":
      return action.payload
    default:
  return state;  
  }
 
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}

function form(state = initialFormState, action) {
  switch(action.type){
    case "INPUT_CHANGE":{
      const { name, value} = action.payload
      return {...state,
             [name]: value
        }
    }
    case "RESET FORM":{
      return initialFormState
    }
    
        
    default:
      return state
  }
  
}

const allReducers = combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })

export default allReducers