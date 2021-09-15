import React from "react";
import Button from "./Button";
import "font-awesome/css/font-awesome.min.css";

function Task3() {
  return (
    <div>
      <h3>Task 3</h3>
      <div
        style={{
          width: "400px",
          margin: "10px auto",
          boxShadow: "1px 1px 10px gray",
          padding: "10px",
          fontFamily: "Roboto",
        }}
      >
        <i
          className="fa fa-twitter"
          style={{ color: "#1da1f2", fontSize: "3rem" }}
        ></i>
        <h2>Happening now</h2>
        <p>Join Twitter today.</p>
        <Button text="Sign up" customClass="btn signup" />
        <Button text="Log in" customClass="btn login" />
      </div>
    </div>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
