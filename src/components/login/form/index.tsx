import React from "react";
import "./form.css";
import "./responsive.css";
import Login from "../../../pages/Login";

function Form(props) {
  return (
    <div className="abc">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      button
    </div>
  );
}

function Form2(props: string) {
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      button
    </div>
  );
}

export { Form, Form2 };
