import React from "react";
import { useHistory } from "react-router-dom";

const AboutUsPage = () => {
  const history = useHistory();
  return (
    <div>
      <h1>AboutUsPage</h1>
      <button onClick={() => history.goBack()}>Grįžti atgal</button>
    </div>
  );
};

export default AboutUsPage;
