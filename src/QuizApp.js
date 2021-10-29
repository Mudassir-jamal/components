// import { Modal } from '@mui/material'
import "./CssFiles/Quizapp.css"
import Modal from "./Components/ModalComp"
import Multiplebtn from "./Components/Multiplebtn"
import { useState } from "react"
import { Button, Grid, Typography } from "@mui/material"
import QuizShowResult from "./Components/QuizShowResult"
import { Timer } from "./Components/Timer"
// import DateRangeIcon from '@mui/icons-material/DateRange';   


const QuizApp = () => {
    const [ date ,setDate] = useState()
    const [showResult,setShowResult] = useState(false)
    const [marks,setMarks] = useState(0)
    const [btnDisable,setbtnDisable] = useState(false)
    const [Index,setIndex] = useState(0)
    const [Questions,setQuestions] = useState(
        [
            {
            numb: 1,
            question: "What does HTML stand for?",
            answer: "Hyper Text Markup Language",
            options: [
              "Hyper Text Preprocessor",
              "Hyper Text Markup Language",
              "Hyper Text Multiple Language",
              "Hyper Tool Multi Language"
            ]
          },
            {
            numb: 2,
            question: "What does CSS stand for?",
            answer: "Cascading Style Sheet",
            options: [
              "Common Style Sheet",
              "Colorful Style Sheet",
              "Computer Style Sheet",
              "Cascading Style Sheet"
            ]
          },
            {
            numb: 3,
            question: "What does PHP stand for?",
            answer: "Hypertext Preprocessor",
            options: [
              "Hypertext Preprocessor",
              "Hypertext Programming",
              "Hypertext Preprogramming",
              "Hometext Preprocessor"
            ]
          },
            {
            numb: 4,
            question: "What does SQL stand for?",
            answer: "Structured Query Language",
            options: [
              "Stylish Question Language",
              "Stylesheet Query Language",
              "Statement Question Language",
              "Structured Query Language"
            ]
          },
            {
            numb: 5,
            question: "What does XML stand for?",
            answer: "eXtensible Markup Language",
            options: [
              "eXtensible Markup Language",
              "eXecutable Multiple Language",
              "eXTra Multi-Program Language",
              "eXamine Multiple Language"
            ]
          },
          {
            numb: 6,
            question: "What does HTML stand for?",
            answer: "Hyper Text Markup Language",
            options: [
              "Hyper Text Preprocessor",
              "Hyper Text Markup Language",
              "Hyper Text Multiple Language",
              "Hyper Tool Multi Language"
            ]
          },
            {
            numb: 7,
            question: "What does CSS stand for?",
            answer: "Cascading Style Sheet",
            options: [
              "Common Style Sheet",
              "Colorful Style Sheet",
              "Computer Style Sheet",
              "Cascading Style Sheet"
            ]
          },
            {
            numb: 8,
            question: "What does PHP stand for?",
            answer: "Hypertext Preprocessor",
            options: [
              "Hypertext Preprocessor",
              "Hypertext Programming",
              "Hypertext Preprogramming",
              "Hometext Preprocessor"
            ]
          },
            {
            numb: 9,
            question: "What does SQL stand for?",
            answer: "Structured Query Language",
            options: [
              "Stylish Question Language",
              "Stylesheet Query Language",
              "Statement Question Language",
              "Structured Query Language"
            ]
          },
            {
            numb: 10,
            question: "What does XML stand for?",
            answer: "eXtensible Markup Language",
            options: [
              "eXtensible Markup Language",
              "eXecutable Multiple Language",
              "eXTra Multi-Program Language",
              "eXamine Multiple Language"
            ]
          }
         
        ]
    )
  
    

const nextBtn = () => {
   
     setIndex(Index + 1)
     
     if(Questions.length -1 == Index){
         setShowResult(true)
     }
     else{
         setIndex(Index + 1)
     }
}
 
   let currentDate = new Date().toLocaleDateString()



      
    return (
        <div id="Quiz">
            {showResult == false ? <>

            <div className="quiz_first_side" >
                <Typography variant="h5"> Date:  {currentDate}</Typography>
                <Typography variant="h4"> Question {Questions[Index].numb == 5 ? 5: Questions[Index].numb}/10</Typography>

                <Typography variant="h4">Total:{marks}/100</Typography>

            </div>


            <div className="second_div">
                <Timer /> <span>Timer </span>
            
            <Multiplebtn
             btnDisable={btnDisable}
             setbtnDisabe={setbtnDisable}
             Questions={Questions} 
             Index={Index}
             setMarks={setMarks}
             />

            

             
             <div >
          

             <Button variant="outlined"
                className="nxtBtn"
                sx={{position:"absolute", marginLeft:"40%",marginTop:"1rem" ,width:"150px" ,height:"55px",backgroundColor:"#00001a"}}
                onClick={() => nextBtn()}
                >Next</Button>

              

             </div>


             </div>
              </>
             :
                <QuizShowResult 
                  marks={marks}
                  
                />
            }


             
             
        </div>
    )
}

export default QuizApp
