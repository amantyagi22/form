import axios from "axios";
import React, {useEffect, useState } from "react";
// import {useNavigate} from "react-router-dom";
import validation from './validation';
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
    axios.post(url, {
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
    axios.post(
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
                required
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
              {(result) => (
                <>
                  <label htmlFor="Hostelers">
                    <span>Hostelers</span>
                  </label>
                  <input
                    type="radio"
                    id="Hostelers"
                    name="valid"
                    value="Hostelers"
                  />
                  <label htmlFor="Day-scholars" id="day-scholars">
                    <span>Day-scholars</span>
                  </label>
                  <input
                    type="radio"
                    id="Day-scholars"
                    name="valid"
                    value="Day-scholars"
                  />
                  <b>{result}</b>
                </>
              )}
            </div>
            <div
              class="form-group g-recaptcha"
              data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S"
            >
              {/* <input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha"/> */}
            </div>
            <button
              type="button"
              class="btn btn-primary btn-lg"
              onClick={submitform ? handleFormSubmit: handleFormSubmit}
            //   onClick={submitform ? navigate("/"): handleFormSubmit}
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
