import React, { useReducer } from "react";
const initalState = {
  likes: 10,
  dislikes: 5,
  voteType: "",
  errorMessage: "",
};
// useReducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "LIKE":
      if (state.voteType !== "like") {
        if (state.voteType === "dislike") {
          return {
            ...state,
            likes: state.likes + 1,
            dislikes: state.dislikes - 1,
            voteType: "like",
            errorMessage: "",
          };
        }
        return {
          ...state,
          likes: state.likes + 1,
          voteType: "like",
          errorMessage: "",
        };
      } else {
        return { ...state, errorMessage: "You cant like for second time" };
      }
    case "DISLIKE":
      if (state.voteType !== "dislike") {
        if (state.voteType === "like") {
          return {
            ...state,
            likes: state.likes - 1,
            dislikes: state.dislikes + 1,
            voteType: "dislike",
            errorMessage: "",
          };
        }
        return {
          ...state,
          dislikes: state.dislikes + 1,
          voteType: "dislike",
          errorMessage: "",
        };
      } else {
        return { ...state, errorMessage: "You cant dislike for second time" };
      }
    default:
      break;
  }
};
function Task2() {
  // Custom Functions
  const [state, dispatch] = useReducer(reducer, initalState);
  const handleLikes = () => {
    dispatch({ type: "LIKE" });
  };
  const handleDislikes = () => {
    dispatch({ type: "DISLIKE" });
  };
  return (
    <div>
      <h3>Task 2</h3>
      <div>
        <button onClick={handleLikes}>👍</button>
        {state.likes}
        <button onClick={handleDislikes}>👎</button>
        {state.dislikes}
        <p>{state.errorMessage}</p>
      </div>
    </div>
  );
}
