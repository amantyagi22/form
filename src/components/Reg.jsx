import React, {useEffect, useState } from "react";
// import {useNavigate} from "react-router-dom";
import validation from './validation';
import Axios from "axios";
function Reg() {
    // const navigate = useNavigate();
  const[submitform,setSubmitform] = useState(false);
  const [values, setValues] = useState({
    Name: "",
    Rollno: "",
    Contactno: "",
    Email: "",
    Gender: "",
    Year: "",
    Branch: "",
  });
  const [errors,setErrors]=useState({});
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    
  };
  useEffect(()=>{
    if(Object.keys(errors).length === 0){
        setSubmitform(true);
    }
},[errors]);
  const url = "https://workshopregistration.herokuapp.com/api/users/register";
  const handleFormSubmit = (event) => {
    console.log(values);
    event.preventDefault();
    setErrors(validation(values));
    Axios.post(url, {
      Name: values.Name,
      Rollno: values.Rollno,
      Email: values.Email,
      Contactno: values.Contactno,
      Gender: values.Gender,
      Year: values.Year,
      Branch: values.Branch,
    }).then((res) => {
      console.log(res.data);
    });
    Axios.post(
      "https://workshopregistration.herokuapp.com/api/users/confirmemail",
      {
        Email: values.Email,
      }
    ).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <div className="cont">
        <div className="image1"></div>
        <div className="image2">
          <h2 className="hed my-4">Hey! Get Yourself Registered</h2>
          
        </div>
      </div>
    </>
  );
}
export default Reg;
