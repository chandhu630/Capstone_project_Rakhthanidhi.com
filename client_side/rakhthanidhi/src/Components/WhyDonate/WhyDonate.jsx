

import React, { useState, useEffect } from "react";
import './WhyDonate.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllquestions } from "../Redux/ProductReducer/Action";
import Footerpage from "../Footer/Footer";
import Navbar from "../Navbar/Nav";

function WhyDonateBlood() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const dispatch = useDispatch();
  const questionData = useSelector(state => state.question.questionData);

  useEffect(() => {
    dispatch(getAllquestions());
  }, [dispatch]);

  const handleQuestionClick = (question) => {
    setSelectedQuestion((prevQuestion) => {
      // Toggle the question
      return prevQuestion === question ? null : question;
    });
  };

  const renderQuestionSet = (start, end) => {
    return questionData?.slice(start, end).map((question) => (
      <div key={question.id} className="question-container">
        <div
          className={`question ${selectedQuestion === question ? 'selected' : ''}`}
          onClick={() => handleQuestionClick(question)}
        >
          {question.question_Name}
        </div>
        {selectedQuestion === question && (
          <div className="answer">
            {question.question_Answer}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="why-donate-container">
     <div className ="navbarbottom"> <Navbar /></div>
     <div className="firstHalf">
      <div className="why_flex_first">
        <div className="Storing_First_two"><Link className="nextlink" to ="/next">
        <div ><img className = "Image_Width_why" src = "photos/donate.png" alt = "chandhu" /></div>
        <div>{renderQuestionSet(20,21)}</div> </Link> </div>

        <div className="two_gap"> <Link className="nextlink" to ="/next">
        <div ><img className = "Image_Width_why" src = "photos/image1.jpeg" alt = "chandhu" /></div>
        <div>{renderQuestionSet(21,22)}</div> </Link></div>
      </div>
        

      <div className="why_flex_first">
        <div className="Storing_First_two"><Link className="nextlink" to ="/next">
        <div ><img className = "Image_Width_why" src = "photos/cancerpic.png" alt = "chandhu" /></div>
        <div>{renderQuestionSet(22,23)}</div> </Link></div>

        <div className="two_gap"> <Link className="nextlink" to ="/next">
        <div ><img className = "Image_Width_why"  src = "photos/vegtables.png" alt = "chandhu " /></div>
        <div>{renderQuestionSet(23,24)}</div> </Link></div>
     
      </div>
      <hr className="HrLine"></hr>
      </div>


      <div className="firstDiv"> 
        <div className="image_que_one"></div>
        <div className="firstFive">{renderQuestionSet(0, 5)}</div>
      </div>

      <div className="firstDiv"> 
        <div className="firstFive">{renderQuestionSet(5, 10)}</div>
        <div className="image2_que_two"></div>
      </div>

      <div className="firstDiv"> 
        <div className="image3_que_three"></div>
        <div className="firstFive">{renderQuestionSet(10, 15)}</div>
      </div>

      <div className="firstDiv"> 
        <div className="firstFive">{renderQuestionSet(15, 20)}</div>
        <div className="image4_que_four"></div>
      </div>
      <Footerpage/>

    </div>
  );
}

export default WhyDonateBlood;
