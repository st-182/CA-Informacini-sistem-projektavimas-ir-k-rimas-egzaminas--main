import React, { useRef } from "react";

function Task5() {
  const ref = useRef();
  return (
    <div ref={ref}>
      <h3>Task 5</h3>

      <h1>Some big text</h1>
      <p> Some small text</p>
      <button
        onClick={() => {
          ref.current.style.background = "#f1f1f1";
          ref.current.style.color = "#000000";
        }}
      >
        Light theme
      </button>
      <button
        onClick={() => {
          ref.current.style.background = "#000000";
          ref.current.style.color = "#f1f1f1";
        }}
      >
        Dark theme
      </button>
    </div>
  );
}

export default Task5;

/* Task 5
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
