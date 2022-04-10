import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import validation from "./validation";
import Axios from "axios";
function Reg() {
  const resi=["Hosteler","Day-Scholar"]
  const navigate = useNavigate();
  
  const [values, setValues] = useState({
    Name: "",
    Rollno: "",
    Contactno: "",
    Email: "",
    Gender: "",
    Year: "",
    Branch: "",
    Residence: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      
    }
  }, [errors]);
  const url = "https://workshopregistration.herokuapp.com/api/users/register";
  async function handleFormSubmit (event)
   {
    console.log(values);
    event.preventDefault();
    setErrors(validation(values));
    const result = await fetch (url,{
            method:'Post',
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },

            body:JSON.stringify({
              Name: values.Name,
              Rollno: values.Rollno,
              Email: values.Email,
              Contactno: values.Contactno,
              Gender: values.Gender,
              Year: values.Year,
              Branch: values.Branch,
              Residence: values.Residence,
            })
          });
    
    
            const data=result.json();
    if(result.status===400 || !data )
    {
      window.alert("Already Registered User")
      console.log("Registered user");
    }
    else
    {

     Axios.post(
      "https://workshopregistration.herokuapp.com/api/users/confirmemail",
      {
        Email: values.Email,
      }
    ).then((res) => {
      console.log(res.data);
    });
    navigate("/");
  }
  };
  return (
    <>
      <div className="cont">
        <div className="image1"></div>
        <div className="image2">
          <h2 className="text">Hey! Get Yourself Registered</h2>
          <form className="form mt-4">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                name="Name"
                value={values.Name}
                onChange={handleChange}
              />
              {errors.Name && <p className="error">{errors.Name}</p>}
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="University Roll No."
                name="Rollno"
                value={values.Rollno}
                onChange={handleChange}
              />
              {errors.Rollno && <p className="error">{errors.Rollno}</p>}
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Contact No."
                name="Contactno"
                value={values.Contactno}
                onChange={handleChange}
              />
              {errors.Contactno && <p className="error">{errors.Contactno}</p>}
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Address"
                name="Email"
                value={values.Email}
                onChange={handleChange}
              />
              {errors.Email && <p className="error">{errors.Email}</p>}
            </div>
            <div className="form-group">
              <select
                name="Branch"
                value={values.Branch}
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={handleChange}
              >
                <option selected="disabled">Branch</option>
                <option>CSE</option>
                <option>CSE(DS)</option>
                <option>CSE(AI&ML)</option>
                <option>CS</option>
                <option>IT</option>
                <option>CS&IT</option>
                <option>ECE</option>
                <option>EN</option>
                <option>ME</option>
                <option>CIVIL</option>
              </select>
            </div>
            <div className="form-group">
              <select
                name="Year"
                value={values.Year}
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={handleChange}
              >
                <option selected="disabled">Year</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="form-group">
              <select
                name="Gender"
                value={values.Gender}
                onChange={handleChange}
                className="form-control"
                id="exampleFormControlSelect2"
              >
                <option selected="disabled">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="form-group">
            <div className="radio">
                      {resi.map(result=>(
                          <>
                              <input type="radio" value={result} name="Residence" onChange={handleChange}/>
                              <b>{result}</b>
                              </>
                      ))}
                  </div>
            </div>
            <div
              className="form-group g-recaptcha"
              data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S"
            >
              {/* <input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha"/> */}
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={ handleFormSubmit}
                //  onClick={submitform ? navigate("/"): handleFormSubmit}
                // jai mata di
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Reg;