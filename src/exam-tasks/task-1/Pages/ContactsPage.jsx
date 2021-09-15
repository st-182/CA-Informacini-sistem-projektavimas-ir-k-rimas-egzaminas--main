import React from "react";
import { useHistory } from "react-router-dom";

const ContactsPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>ContactsPage</h1>
      <button onClick={() => history.goBack()}>Grįžti atgal</button>
    </div>
  );
};

export default ContactsPage;
