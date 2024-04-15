import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import { type } from "@testing-library/user-event/dist/type";

const App = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    mobileno: "",
    address:"",
    postcode:""
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First name should be 3-16 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "First name should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id:7,
      name:"mobileno",
      type:"text",
      placeholder:"Enter the Mobile number",
      errorMessage:"Please valid Number",
      label:"Mobile Number",
      pattern:values.mobile,
      required: true,

    },
    {
      id:8,      
      name:"address", 
      type:"text",     
      placeholder:"Enter the Address",
      errorMessage:"Please valid Number",
      label:"Address",
      pattern:values.address,
      required: true,

    },
    {
      id:9,
      name:"postcode",
      type:"text",
      placeholder:"Enter the Pin/Post code number",
      errorMessage:"Please Pin Code",
      label:"Post/Pin Code",
      pattern:values.postcode,
      required: true,

    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1 style={{color:"darkblue"}}>Registration</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
