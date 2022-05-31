import React, { Component} from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, postAnswer, selectAnswer } from "../state/action-creators"

class Quiz extends Component{

 state ={
   isActive: false,
   notActive: false,
   correct: ""
 }
 
  componentDidMount(){
  if(this.props.select === null){
   this.props.fetchQuiz(); }
  }  
  
  

  handleSubmit=(evt)=>{
    evt.preventDefault()
    this.props.postAnswer({ 
      quiz_id: this.props.quiz.quiz_id,
      answer_id: this.state.correct,
    })
    
    this.setState({
      ...this.state,
      isActive: false,
      notActive: false,
      correct: ""
    })
  }

  
    
  
 

  toggleClass=()=>{ 
    if(this.state.isActive === false){
      this.setState({
        ...this.state,
        isActive: !this.state.isActive,
        notActive: false,
        correct: this.props.quiz.answers[0].answer_id
      })
      this.props.selectAnswer(this.props.quiz.answers[0].answer_id)
    }
  }

  toggleClass1=()=>{
    if(this.state.notActive === false){
      this.setState({
        ...this.state,
        isActive: false,
        notActive: !this.state.notActive,
        correct: this.props.quiz.answers[1].answer_id
      })
      this.props.selectAnswer(this.props.quiz.answers[1].answer_id)
    }
  }



 

render(){ 

  return (
    <div id="wrapper">
      { 
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        this.props.quiz.question ? (
          <>
            <h2>{this.props.quiz.question}</h2>

            <div id="quizAnswers">
           
            
            <div onClick={this.toggleClass} key={this.props.quiz.answer_id}
             className={this.state.isActive ? "answer selected": "answer"}>{this.props.quiz.answers[0].text}
             <button>{this.state.isActive ? "SELECTED" : "Select" }</button>
             </div>
             
            <div onClick={this.toggleClass1} key={this.props.quiz.answer_id}
             className={this.state.notActive ? "answer selected": "answer"}>{this.props.quiz.answers[1].text}
             <button>{this.state.notActive ? "SELECTED" : "Select" }</button>
             </div>
             
            
            </div>
            <form onSubmit={evt=>this.handleSubmit(evt)}>
            <button id="submitAnswerBtn" type="submit" 
            disabled={!this.state.isActive && !this.state.notActive}
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
    select: s.selectedAnswer
  }
}

export default connect(mapState, { fetchQuiz, postAnswer, selectAnswer } )(Quiz)

