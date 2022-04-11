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
          <h2 className="left_heading pb-4">Hey! Get Yourself Registered</h2>
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
          <div className="input_container">
           <div className="input_field">
             <div className="justify">
              <div className= "radio">
              Hosteler
              <div>
                <input type="radio" className="form-check-input bg-blue " name="gender" required
                  value="Hosteler "
                   />
                   </div>
              </div>
              <div className="radio">
              Day-Scholar
              <div>
                <input type="radio" className="form-check-input bg-blue " name="gender" required
                  value="Day-Scholar "
                   />
                   </div>
              </div>
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
