import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 10px auto;
  gap: 10px;
  min-width: 1020px;
  background-color: #d1d1d1;
  div:first-of-type {
    text-align: center;
  }
  div {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    p {
      padding: 5px;
    }
  }
`;

function Task4() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setUserData([...data.data]));
  }, []);
  return (
    <div>
      <h3>Task 4</h3>
      <StyledDiv>
        <div>
          <p>Name</p>
          <p>Email</p>
          <p>Address</p>
          <p>Phone</p>
          <p>Company</p>
        </div>
        {userData.map((user) => (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>
              {user.address.street}, {user.address.city}
            </p>
            <p>{user.phone}</p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </StyledDiv>
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
