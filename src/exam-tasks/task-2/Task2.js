import React, { useReducer, useState } from "react";
import "font-awesome/css/font-awesome.min.css";

const likesFromFetch = { like: 5, dislike: 3 }; //simulating fetch response
const initialState = {
  like: likesFromFetch.likes,
  dislike: likesFromFetch.dislikes,
  voted: undefined,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADDLIKE":
      //simulates post request to server
      return { ...state, like: state.like + 1, voted: true };
    case "ADDDISLIKE":
      //simulates post request to server
      return { ...state, dislike: state.dislike + 1, voted: true };
    case "CHANGETOLIKE":
      //simulates post request to server
      return { like: state.like + 1, dislike: likesFromFetch.dislike };
    case "CHANGETODISLIKE":
      //simulates post request to server
      return { like: likesFromFetch.like, dislike: state.dislike + 1 };
    default:
      return state;
  }
};
function Task2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleClick = (action) => {
    if (state.voted) {
      if (action === "Like") {
        dispatch({ type: "CHANGETODISLIKE" });
      } else {
        dispatch({ type: "CHANGETOLIKE" });
      }
    } else {
      if (action === "Like") {
        dispatch({ type: "ADDLIKE" });
      } else {
        dispatch({ type: "ADDDISLIKE" });
      }
    }
  };
  return (
    <div>
      <h3>Task 2</h3>
      <p>{state.voted}</p>
      <button onClick={() => handleClick("Like")}>
        <i className="fa fa-thumbs-up"></i>
        {state.like}
      </button>
      <button onClick={() => handleClick("Dislike")}>
        <i className="fa fa-thumbs-down"></i>
        {state.dislike}
      </button>
    </div>
  );
}

export default Task2;

/* Task 2
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, vartotojui leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
