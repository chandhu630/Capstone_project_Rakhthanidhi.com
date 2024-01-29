
// import React, { useState } from 'react';
// import './Experience.css'; // Import your CSS file

// const Image_Slider = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 3; // Number of items to display at a time

//   const items = [
//     {
//       id: 1,
//       image: 'photos/siri.png',
//       name: 'B.shreerisha',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
    // {
    //   id: 2,
    //   image: 'photos/mani.png',
    //   name: 'Mani',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 3,
    //   image: 'photos/madhu.png',
    //   name: 'K.Madhavi',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 4,
    //   image: 'photos/deva.png',
    //   name: 'C. Devaraj',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 5,
    //   image: 'photos/sahithi.png',
    //   name: 'Sahithi',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 6,
    //   image: 'photos/kiran.png',
    //   name: 'M. Kiran',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 7,
    //   image: 'photos/swetha.png',
    //   name: 'B.Swetha',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },

//     // Add more items as needed
//   ];

//   const handleNext = () => {
//     setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const handlePrev = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//   };

//   return (
//     <div className="slider-container">
//         <div className="slider_button_lessathan" onClick={handlePrev}>
//         &lt; 
//       </div>
//       <div className="display_play_gap">
//         {[0, 1, 2].map((index) => {
//           const arrayIndex = (startIndex + index) % items.length;
//           return (
//             <div key={items[arrayIndex].id} className="box_epx">
//               <img className="exp_img" src={items[arrayIndex].image} alt="txt" />
//               <div className="backto_text">
//                 <h1>{items[arrayIndex].name}</h1>
//                 <p>{items[arrayIndex].description}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
      
//       <div className="slider_button_greaterthan" onClick={handleNext}>
//          &gt;
//       </div>
//     </div>
//   );
// };

// export default Image_Slider;

// import React, { useState } from 'react';
// import './Experience.css'; // Import your CSS file

// const Image_Slider = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const itemsPerPage = 3; // Number of items to display at a time

//   const items = [
    // {
    //   id: 1,
    //   image: 'photos/siri.png',
    //   name: 'B.shreerisha',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 2,
    //   image: 'photos/mani.png',
    //   name: 'Mani',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 3,
    //   image: 'photos/madhu.png',
    //   name: 'K.Madhavi',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 4,
    //   image: 'photos/deva.png',
    //   name: 'C. Devaraj',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 5,
    //   image: 'photos/sahithi.png',
    //   name: 'Sahithi',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 6,
    //   image: 'photos/kiran.png',
    //   name: 'M. Kiran',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 7,
    //   image: 'photos/swetha.png',
    //   name: 'B.Swetha',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },

//   ];

//   const handleNext = () => {
//     // Calculate the index of the middle item
//     const middleIndex = Math.floor(items.length / 2);
    
//     // Set the selectedItemId to the middle item id
//     setSelectedItemId(items[middleIndex].id);

//     // Update the startIndex to shift the images
//     setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const handlePrev = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//     setSelectedItemId((prevId) => (prevId - 1 + items.length) % items.length);
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider_button_lessathan" onClick={handlePrev}>
//         &lt;
//       </div>
//       <div className="display_play_gap">
//         {[0, 1, 2].map((index) => {
//           const arrayIndex = (startIndex + index) % items.length;
//           const isSelected = selectedItemId === items[arrayIndex].id;

//           return (
//             <div
//               key={items[arrayIndex].id}
//               className={`box_epx ${isSelected ? 'selected' : ''}`}
//             >
//               <img className="exp_img" src={items[arrayIndex].image} alt="txt" />
//               <div className="backto_text">
//                 <h1>{items[arrayIndex].name}</h1>
//                 <p>{items[arrayIndex].description}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="slider_button_greaterthan" onClick={handleNext}>
//         &gt;
//       </div>
//     </div>
//   );
// };

// export default Image_Slider;

// Image_Slider.js


// import React, { useState } from 'react';
// import './Experience.css'; // Import your CSS file

// const Image_Slider = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const itemsPerPage = 3; // Number of items to display at a time

//   const items = [
    // {
    //   id: 1,
    //   image: 'photos/siri.png',
    //   name: 'B.shreerisha',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 2,
    //   image: 'photos/mani.png',
    //   name: 'Mani',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 3,
    //   image: 'photos/madhu.png',
    //   name: 'K.Madhavi',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 4,
    //   image: 'photos/Deva.png',
    //   name: 'C. Devaraj',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 5,
    //   image: 'photos/sahithi.png',
    //   name: 'Sahithi',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 6,
    //   image: 'photos/kiran.png',
    //   name: 'M. Kiran',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 7,
    //   image: 'photos/swetha.png',
    //   name: 'B.Swetha',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },

//   ];

//   const handleNext = () => {
//     const middleIndex = Math.floor(items.length / 2);
//     setSelectedItemId(items[middleIndex].id);
//     setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const handlePrev = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//     setSelectedItemId((prevId) => (prevId - 1 + items.length) % items.length);
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider_button" onClick={handlePrev}>
//         &lt;
//       </div>
//       <div className="display_play_gap">
//         {[0, 1, 2].map((index) => {
//           const arrayIndex = (startIndex + index) % items.length;
//           const isSelected = selectedItemId === items[arrayIndex].id;

//           return (
//             <div
//               key={items[arrayIndex].id}
//               className={`box_epx ${isSelected ? 'selected' : ''}`}
//             >
//               <img className="exp_img" src={items[arrayIndex].image} alt="txt" />
//               <div className="backto_text">
//                 <h1>{items[arrayIndex].name}</h1>
//                 <p>{items[arrayIndex].description}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="slider_button" onClick={handleNext}>
//         &gt;
//       </div>
//     </div>
//   );
// };

// export default Image_Slider;

// import React, { useState } from 'react';
// import './Experience.css'; // Import your CSS file

// const Image_Slider = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const [showFullDescription, setShowFullDescription] = useState(false);
//   const itemsPerPage = 3; // Number of items to display at a time

//   const items = [
//     // ... (your items)
//     {
//       id: 1,
//       image: 'photos/siri.png',
//       name: 'B.shreerisha',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
//     {
//       id: 2,
//       image: 'photos/mani.png',
//       name: 'Mani',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
//     {
//       id: 3,
//       image: 'photos/madhu.png',
//       name: 'K.Madhavi',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
//     {
//       id: 4,
//       image: 'photos/Deva.png',
//       name: 'C. Devaraj',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
//     {
//       id: 5,
//       image: 'photos/sahithi.png',
//       name: 'Sahithi',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
//     {
//       id: 6,
//       image: 'photos/kiran.png',
//       name: 'M. Kiran',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
//     {
//       id: 7,
//       image: 'photos/swetha.png',
//       name: 'B.Swetha',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
//   ];

//   const handleNext = () => {
//     const middleIndex = Math.floor(items.length / 2);
//     setSelectedItemId(items[middleIndex].id);
//     setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
//     setShowFullDescription(false); // Reset showFullDescription when moving to the next image
//   };

//   const handlePrev = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//     setSelectedItemId((prevId) => (prevId - 1 + items.length) % items.length);
//     setShowFullDescription(false); // Reset showFullDescription when moving to the previous image
//   };

//   const handleToggleDescription = () => {
//     setShowFullDescription((prev) => !prev);
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider_button" onClick={handlePrev}>
//         &lt;
//       </div>
//       <div className="display_play_gap">
//         {[0, 1, 2].map((index) => {
//           const arrayIndex = (startIndex + index) % items.length;
//           const isSelected = selectedItemId === items[arrayIndex].id;

//           return (
//             <div
//               key={items[arrayIndex].id}
//               className={`box_epx ${isSelected ? 'selected' : ''}`}
//             >
//               <img className="exp_img" src={items[arrayIndex].image} alt="txt" />
//               <div className="backto_text">
//                 <h1>{items[arrayIndex].name}</h1>
//                 <p>
//                   {showFullDescription || items[arrayIndex].description.length <= 50
//                     ? items[arrayIndex].description
//                     : `${items[arrayIndex].description.slice(0, 50)}...`}
//                 </p>
//                 {items[arrayIndex].description.length > 50 && (
//                   <span className="read-more-link" onClick={handleToggleDescription}>
//                     {showFullDescription ? 'Read Less' : 'Read More'}
//                   </span>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="slider_button" onClick={handleNext}>
//         &gt;
//       </div>
//     </div>
//   );
// };

// export default Image_Slider;


// import React, { useState } from 'react';
// import './Experience.css'; // Import your CSS file

// const Image_Slider = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const [expandedItemId, setExpandedItemId] = useState(null);
//   const itemsPerPage = 3; // Number of items to display at a time

//   const items = [
    // {
    //   id: 1,
    //   image: 'photos/siri.png',
    //   name: 'B.shireesha',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
    // {
    //   id: 2,
    //   image: 'photos/mani.png',
    //   name: 'S.Mani',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    // },
  //       {
  // id: 3,
  //     image: 'photos/madhu.png',
  //     name: 'K.Madhavi',
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  //   },
  //   {
  //     id: 4,
  //     image: 'photos/Deva.png',
  //     name: 'C. Devaraj',
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  //   },
  //   {
  //     id: 5,
  //     image: 'photos/kiran.png',
  //     name: 'M.Kiran',
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  //   },
  //   {
  //     id: 6,
  //     image: 'photos/swetha.png',
  //     name: 'B.Swetha',
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  //   },
  //   {
  //     id: 7,
  //     image: 'photos/sahithi.png',
  //     name: 'Sahithi',
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
  //   },
//   ];

//   const handleNext = () => {
//     const middleIndex = Math.floor(items.length / 2);
//     setSelectedItemId(items[middleIndex].id);
//     setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
//     setExpandedItemId(null); // Reset expandedItemId when moving to the next image
//   };

//   const handlePrev = () => {
//     setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//     setSelectedItemId((prevId) => (prevId - 1 + items.length) % items.length);
//     setExpandedItemId(null); // Reset expandedItemId when moving to the previous image
//   };

//   const handleToggleDescription = (id) => {
//     setExpandedItemId((prevId) => (prevId === id ? null : id));
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider_button" onClick={handlePrev}>
//         &lt;
//       </div>
//       <div className="display_play_gap">
//         {[0, 1, 2].map((index) => {
//           const arrayIndex = (startIndex + index) % items.length;
//           const isSelected = selectedItemId === items[arrayIndex].id;
//           const isDescriptionVisible = expandedItemId === items[arrayIndex].id;

//           return (
//             <div
//               key={items[arrayIndex].id}
//               className={`box_epx ${isSelected ? 'selected' : ''}`}
//             >
//               <img className="exp_img" src={items[arrayIndex].image} alt="txt" />
//               <div className="backto_text">
//                 <h1>{items[arrayIndex].name}</h1>
//                 <p>
//                   {isDescriptionVisible || items[arrayIndex].description.length <= 50
//                     ? items[arrayIndex].description
//                     : `${items[arrayIndex].description.slice(0, 50)}...`}
//                 </p>
//                 {items[arrayIndex].description.length > 50 && (
//                   <span
//                     className="read-more-link"
//                     onClick={() => handleToggleDescription(items[arrayIndex].id)}
//                   >
//                     {isDescriptionVisible ? 'Read Less' : 'Read More'}
//                   </span>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="slider_button" onClick={handleNext}>
//         &gt;
//       </div>
//     </div>
//   );
// };

// export default Image_Slider;


import React, { useState } from 'react';
import './Experience.css'; // Import your CSS file

const Image_Slider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const itemsPerPage = 3; // Number of items to display at a time

  const items = [
    // Your data here...
    {
      id: 1,
      image: 'photos/siri.png',
      name: 'B.shireesha',
      description: 'i fell very happy to donating other it was great experience...',
    },
    {
      id: 2,
      image: 'photos/mani.png',
      name: 'S.Mani',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      id: 3,
      image: 'photos/madhu.png',
      name: 'K.Madhavi',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      id: 4,
      image: 'photos/Deva.png',
      name: 'C. Devaraj',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      id: 5,
      image: 'photos/swetha.png',
      name: 'B.Swetha',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      id: 6,
      image: 'photos/kiran.png',
      name: 'M.Kiran',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
   
    {
      id: 7,
      image: 'photos/sahithi.png',
      name: 'Sahithi',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
  ];

  const handleNext = () => {
    const middleIndex = Math.floor(items.length / 2);
    setSelectedItemId(items[middleIndex].id);
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
    setExpandedItemId(null); // Reset expandedItemId when moving to the next image
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    setSelectedItemId((prevId) => (prevId - 1 + items.length) % items.length);
    setExpandedItemId(null); // Reset expandedItemId when moving to the previous image
  };

  const handleToggleDescription = (id) => {
    setExpandedItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className='div_donars_containers'>
    <div className="slider-container">
      <div className="slider_button" onClick={handlePrev}>
        &lt;
      </div>
      <div className="display_play_gap">
        {[0, 1, 2].map((index) => {
          const arrayIndex = (startIndex + index) % items.length;
          const isSelected = selectedItemId === items[arrayIndex].id;
          const isDescriptionVisible = expandedItemId === items[arrayIndex].id;

          return (
            
            <div
              key={items[arrayIndex].id}
              className={`box_epx ${isSelected ? 'selected' : ''}`}
            >
            
              <div className="image-container">
                <img className="exp_img" src={items[arrayIndex].image} alt="txt" />
                <div className="name-overlay">
                  <h1 className='donar_name'>{items[arrayIndex].name}</h1>
                </div>
              </div>

              <div className="backto_text">
                <p>
                  {isDescriptionVisible || items[arrayIndex].description.length <= 50
                    ? items[arrayIndex].description
                    : `${items[arrayIndex].description.slice(0, 50)}...`}
                </p>
                {items[arrayIndex].description.length > 50 && (
                  <span
                    className="read-more-link"
                    onClick={() => handleToggleDescription(items[arrayIndex].id)}
                  >
                    {isDescriptionVisible ? 'Read Less' : 'Read More'}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="slider_button" onClick={handleNext}>
        &gt;
      </div>
    </div>
    </div>
  );
};

export default Image_Slider;
