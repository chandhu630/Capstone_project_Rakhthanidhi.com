// import "./Nextpage.css"
// function Nextpage()
// {
//     return(
//         <div>
//             <h2> this Nextpage</h2>

//         </div>
//     )
// }
// export default Nextpage;

// NextPage.jsimport React from "react";

// Nextpage.js
// // Nextpage.js// Nextpage.js
// import React from "react";
// import { useLocation } from "react-router-dom";

// function Nextpage() {
//   // Use useLocation hook to access the location state
//   const location = useLocation();
//   const selectedQuestion = location.state?.selectedQuestion;

//   return (
//     <div>
//       <h1>Next Page</h1>
//       {selectedQuestion ? (
//         <div>
//           <h2>Selected Question:</h2>
//           <p>Question: {selectedQuestion.question_Name}</p>
//           <p>Answer: {selectedQuestion.question_Answer}</p>
//           {/* Add more details as needed */}
//         </div>
//       ) : (
//         <p>No question selected</p>
//       )}
//     </div>
//   );
// }

// export default Nextpage;














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











// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./Nextpage.css";
// import { getAllquestions } from "../Redux/ProductReducer/Action";

// function Nextpage() {
//   const [selectedQuestion, setSelectedQuestion] = useState(null);
//   const dispatch = useDispatch();
//   const questionData = useSelector(state => state.question.questionData);

//   useEffect(() => {
//     dispatch(getAllquestions());
//   }, [dispatch]);

//   const renderFirstQuestionSet = () => {
//     const firstQuestion = questionData && questionData[20]; // Assuming the index is correct
//     return (
//       <div className="question-container">
//         <div className="next_Image_Width">
//           <img src="photos/donate.png" alt="chandhu" />
//         </div>
//         <div className="Middle_text">
//           <div className="question">{firstQuestion?.question_Name}</div>
//           <div className="answer">{firstQuestion?.question_Answer}</div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="DIVSTORE">
//       {renderFirstQuestionSet(20,24)}
//     </div>
//   );
// }

// export default Nextpage;


// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./Nextpage.css";
// import { getAllquestions } from "../Redux/ProductReducer/Action";

// function Nextpage() {
//   const [selectedQuestion, setSelectedQuestion] = useState(null);
//   const dispatch = useDispatch();
//   const questionData = useSelector((state) => state.question.questionData);

//   useEffect(() => {
//     dispatch(getAllquestions());
//   }, [dispatch]);

//   const renderQuestionSet = (startIndex, endIndex) => {
//     return questionData
//       ?.slice(startIndex, endIndex)
//       .map((question) => (
//         <div key={question.id} className="question-container">
//           <div className="next_Image_Width">
//             <img src="photos/donate.png" alt="chandhu" />
//             <img className="Image_Width" src="photos/image1.jpeg" alt="chandhu" />
//             <img className="Image_Width" src="photos/cancerpic.png" alt="chandhu" />
//            <img className="Image_Width" src="photos/vegtables.png" alt="chandhu " />
//           </div>
//           <div className="Middle_text">
//             <div className="question">{question?.question_Name}</div>
//             <div className="answer">{question?.question_Answer}</div>
//           </div>
//         </div>
//       ));
//   };

//   return <div className="DIVSTORE">{renderQuestionSet(20, 24)}</div>;
// }

// export default Nextpage;
