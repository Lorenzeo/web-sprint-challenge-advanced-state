import React, { Component} from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, postAnswer, selectAnswer } from "../state/action-creators"

class Quiz extends Component{

//  state ={
//    answerA: false,
//    answerB: false,
//    correct: ""
//  }
 
  componentDidMount(){
  if(this.props.quiz === null){
   this.props.fetchQuiz(); }
  }  
  
  

  handleSubmit=(evt)=>{
    evt.preventDefault()
    this.props.postAnswer({ 
      quiz_id: this.props.quiz.quiz_id,
      answer_id: this.props.selectedAnswer,
    })
  }

  
    
  
 

  // toggleClass=()=>{ 
  //   if(this.state.answerA === false){
  //     this.setState({
  //       ...this.state,
  //       answerA: !this.state.answerA,
  //       answerB: false,
  //       correct: this.props.quiz.answers[0].answer_id
  //     })
  //     this.props.selectAnswer(this.props.quiz.answers[0].answer_id)
  //   }
  // }

  // toggleClass1=()=>{
  //   if(this.state.answerB === false){
  //     this.setState({
  //       ...this.state,
  //       answerA: false,
  //       answerB: !this.state.answerB,
  //       correct: this.props.quiz.answers[1].answer_id
  //     })
  //     this.props.selectAnswer(this.props.quiz.answers[1].answer_id)
  //   }
  // }



 

render(){ 
  console.log(this.props)
  return (
    <div id="wrapper">
      { 
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        this.props.quiz ? (
          <>
            <h2>{this.props.quiz.question}</h2>

            <div id="quizAnswers">
           
            
            <div onClick={()=> this.props.selectAnswer(this.props.quiz.answers[0].answer_id)} key={this.props.quiz.answer_id}
             className={this.props.selectedAnswer === this.props.quiz.answers[0].answer_id ? "answer selected": "answer"}>{this.props.quiz.answers[0].text}
             <button>{this.props.selectedAnswer === this.props.quiz.answers[0].answer_id  ? "SELECTED" : "Select" }</button>
             </div>
             
            <div onClick={()=> this.props.selectAnswer(this.props.quiz.answers[1].answer_id)} key={this.props.quiz.answer_id}
             className={this.props.selectedAnswer === this.props.quiz.answers[1].answer_id  ? "answer selected": "answer"}>{this.props.quiz.answers[1].text}
             <button>{this.props.selectedAnswer === this.props.quiz.answers[1].answer_id ? "SELECTED" : "Select" }</button>
             </div>
             
            
            </div>
            <form onSubmit={evt=>this.handleSubmit(evt)}>
            <button id="submitAnswerBtn" type="submit" 
            disabled={!this.props.selectedAnswer}
             >Submit answer</button>
            </form>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
}
const mapState = (s) => {
  console.log(s)
  return {
    quiz: s.quiz,
    selectedAnswer: s.selectedAnswer
  }
}

export default connect(mapState, { fetchQuiz, postAnswer, selectAnswer } )(Quiz)

