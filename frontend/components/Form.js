import axios from 'axios'
import React, { Component } from 'react'
import { connect, useDispatch} from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { postQuiz, inputChange } from "../state/action-creators"

class Form extends Component {


 componentDidMount(){
  
   let newQuestion = localStorage.getItem('newQuestion');
   let newTrueAnswer = localStorage.getItem('newTrueAnswer');
   let newFalseAnswer= localStorage.getItem('newFalseAnswer');

  this.props.inputChange({newQuestion: newQuestion})

 }
 componentWillUnmount(){
   let newQuestion,newTrueAnswer, newFalseAnswer;

   newQuestion = document.getElementById("newQuestion").value
   newTrueAnswer = document.getElementById("newTrueAnswer").value
   newFalseAnswer = document.getElementById("newFalseAnswer").value

  localStorage.setItem('#newQuestion', newQuestion);
  localStorage.setItem('#newTrueAnswer', newTrueAnswer);
  localStorage.setItem('#newFalseAnswer', newFalseAnswer);
 }

  onSubmit = (evt) => {
    evt.preventDefault()
    this.props.postQuiz({
      question_text: this.props.form.newQuestion,
      true_answer_text: this.props.form.newTrueAnswer,
      false_answer_text: this.props.form.newFalseAnswer,
    })
    const inputs = document.querySelectorAll("#newQuestion, #newTrueAnswer, #newFalseAnswer")
    inputs.forEach(input => {
      input.value =""
    });
  }

  render(){
 
    return (
    <form id="form" onSubmit={evt=>this.onSubmit(evt)}>
      <h2>Create New Quiz</h2>

      <input 
      type="text" 
      maxLength={50}
       name= "newQuestion"
       value={this.props.form.newQuestion} 
       onChange={(evt)=> this.props.inputChange(evt.target)} 
       id="newQuestion" 
       placeholder="Enter question" />

      <input 
      maxLength={50} 
      name="newTrueAnswer"
      value={this.props.form.newTrueAnswer} 
      onChange={(evt) => this.props.inputChange(evt.target)} id="newTrueAnswer" 
      placeholder="Enter true answer" />

      <input 
      maxLength={50} 
      name="newFalseAnswer"
      value={this.props.form.newFalseAnswer} 
      onChange={(evt) => this.props.inputChange(evt.target)} id="newFalseAnswer" 
      placeholder="Enter false answer" />
      
      
      <button id="submitNewQuizBtn" 
        disabled={
          !this.props.form.newQuestion.trim().length > 0  ||
          !this.props.form.newTrueAnswer.trim().length > 0  ||
          !this.props.form.newFalseAnswer.trim().length > 0
         }
        
         >
            Submit new quiz
      </button >
    </form>
  )
}

}
const mapState = (s) =>{
 
  return{
    form: s.form,
    selected: s.selected
  }
}


export default connect(mapState,{ postQuiz, inputChange })(Form)

