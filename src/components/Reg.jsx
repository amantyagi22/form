<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./validation";
import Axios from "axios";
function Reg() {
  const resi = ["Hosteler", "Day-Scholar"];
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
  // console.log(errors);
  console.log(values.Branch);
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
  async function handleFormSubmit(event) {
    console.log(values);
    event.preventDefault();
    setErrors(validation(values));
    const result = await fetch(url, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        Name: values.Name,
        Rollno: values.Rollno,
        Email: values.Email,
        Contactno: values.Contactno,
        Gender: values.Gender,
        Year: values.Year,
        Branch: values.Branch,
        Residence: values.Residence,
      }),
    });

    const data = result.json();
    if (result.status === 400 || !data) {
      window.alert("enter correct credentials");
      // console.log("Registered user");
    } else {
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
  }
  return (
    <>
      <div className="cont">
        <div className="image1"></div>
        <div className="image2">
          <h2 className="text" style={{}}>Hey! Get Yourself Registered</h2>
          <form className="form">
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
                <option defaultValue="Branch">Branch</option>
                <option value="CSE" >CSE</option>
                <option value="CSE(DS)">CSE(DS)</option>
                <option value="CSE(AI&ML)">CSE(AI&ML)</option>
                <option value="CS">CS</option>
                <option value="IT">IT</option>
                <option value="CS&IT">CS&IT</option>
                <option value="ECE">ECE</option>
                <option value="EN">EN</option>
                <option value="ME">ME</option>
                <option value="CIVIL">CIVIL</option>
              </select>
              {errors.Branch && <p className="error">{errors.Branch}</p>}
            </div>
            <div className="form-group">
              <select
                name="Year"
                value={values.Year}
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={handleChange}
              >
                <option defaultValue="Year">Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              {errors.Year && <p className="error">{errors.Year}</p>}
            </div>
            <div className="form-group">
              <select
                name="Gender"
                value={values.Gender}
                onChange={handleChange}
                className="form-control"
                id="exampleFormControlSelect2"
              >
                <option defaultValue="Gender">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.Gender && <p className="error">{errors.Gender}</p>}
            </div>
            <div className="form-group">
              <div className="radio">
                {resi.map((result) => (
                  <>
                    <input
                      type="radio"
                      value={result}
                      className="dot"
                      name="Residence"
                      onChange={handleChange}
                    />
                    <b className="rad">{result}</b>
                  </>
                ))}
              </div>
              {errors.Residence && <p className="error">{errors.Residence}</p>}
            </div>
            <div
              className="form-group g-recaptcha"
              data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S"
            >
              {/* <input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha"/> */}
            </div>
          </form>
          <div className="register">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleFormSubmit}
              //  onClick={submitform ? navigate("/"): handleFormSubmit}
            >
              Register
            </button>
          </div>
=======
import React, {useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import validation from './validation';
import axios from "axios";
function Reg() {
  return (
    <>
      <div className="form_container">
        <div className="image_left"></div>
        <div className="image_right">
          <div className="heading">
          <span className="left_heading">Hey!</span>
          <span className="left_heading"> Get Yourself Registered</span></div>
          <form className="input">
        <div className="input_container">
          <input type="text"  className="input_field" placeholder="Name"/>
        </div>
        <div className="input_container">
          <input type="text"  className="input_field" placeholder="University Roll No."/>
        </div>
        <div className="input_container">
          <input type="text"  className="input_field" placeholder="Contact No."/>
        </div>
        <div className="input_container">
          <input type="text"  className="input_field" placeholder="Email Address"/>
        </div>
        <div className="input_container">
        <select className=" input_field" id="branch" name="branch" required>
            <option selected>branch</option>
            <option >CSE</option>
            <option >CSE(DS)</option>
            <option >CSE(AI&ML)</option>
            <option >CS</option>
            <option >CS&IT</option>
            <option >IT</option>
            <option >ECE</option>
            <option >EN</option>
            <option >ME</option>
            <option >CIVIL</option>
        </select>
        </div>

        <div className="input_container">
        <select class="input_field" >
              <option selected>gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="2">Other</option>
              <option value="3">prefer not to say</option>
        </select>
          </div>
          <div className="d-flex justify-content-center">
             <div className="justify">
              <div className= "radio">
              <span className="radio_text">Hosteler</span> 
                <input type="radio" className="form-check-input bg-blue " name="gender" required
                  value="Hosteler "
                   />
              {/* <span style = {{opacity}}className="radio_text">Hosteler</span> 
                <input type="radio" onChange={() => setOpacity(1)} className="form-check-input bg-blue " name="gender" required
                  value="Hosteler "
                   /> */}
              </div>
              <div className="radio">
              <span className="radio_text">Day-Scholar</span> 
                <input type="radio" className="form-check-input bg-blue " name="gender" required
                  value="Day-Scholar "
                   />
                   </div>
              </div>
              </div>
              <div className="input_container">
              <button type="button" class="btn input_field">Register</button>
              </div>
</form>
          
          </div>
          
>>>>>>> 6ede2f183f6b3151dd4f51c3386fa4887c816b48
        </div>
    </>
  );
}
export default Reg;