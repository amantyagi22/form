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
          <h2 className="left_heading my-4">Hey! Get Yourself Registered</h2>
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
          <div className="d-flex justify">
            
              <div className="form-check radio">
                hosteler
                <input type="radio" className="form-check-input bg-dark " name="gender" required
                  value="male"
                   />
              </div>

              <div className="form-check  radio">
              Day-Scholar
                <input type="radio" className="form-check-input bg-dark " name="gender" required
                  value="female"
                   />

              </div>
            </div>

</form>
          
          </div>
          
        </div>
    </>
  );
}
export default Reg;
