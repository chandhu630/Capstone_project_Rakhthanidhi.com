
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Nextpage.css";
import { getAllquestions } from "../Redux/ProductReducer/Action";

function Nextpage() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const dispatch = useDispatch();
  const questionData = useSelector(state => state.question.questionData);

  useEffect(() => {
    dispatch(getAllquestions());
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const renderQuestionSet = (start, end) => {
    return questionData?.slice(start, end).map((question) => (
      <div key={question.id} className="nextquestion-container">
        <div className="nextquestion">
          {question.question_Name}
        </div>
        <div className="nextanswer">
          {question.question_Answer}
        </div>
         </div>
    ));
  };

  return (
    <div className="next-donate-container">
      <div className="DIVSTORE">
       
          <div className="divquestion_Answer">
           <img className="next_Image_Width" src="photos/donate.png" alt="chandhu" />
           <div className="Middle_text"> {renderQuestionSet(20, 21)} </div>
          </div>
          <div className="divquestion_Answer back_color">
           <div className="third_One">{renderQuestionSet(21, 22)}</div>
           <img className="Image_Width" src="photos/image1.jpeg" alt="chandhu" />
           </div>
        
           <div className="divquestion_Answer">
           <img className="Image_Width" src="photos/cancerpic.png" alt="chandhu" />
           <div>{renderQuestionSet(22, 23)}</div>
           </div>
           <div className="divquestion_Answer back_color">
           <div className="third_One">{renderQuestionSet(23, 24)}</div>
           <img className="Image_Width" src="photos/vegtables.png" alt="chandhu " />
           </div>
           <div className="backtotop" onClick={scrollToTop}> Back to Top </div>
       </div>
     </div>
  );
}

export default Nextpage;
