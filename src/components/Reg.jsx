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
          
        </div>
    </>
  );
}
export default Reg;
