import React, {useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import validation from './validation';
import axios from "axios";
function Reg() {
  const [formdata, setFormdata] = useState({
    Name:"",
    Rollno:"",
    Contactno:"",
    Email:"",
    Branch:"",
    Year:"",
    Gender:"",
    resi:""
  });
  let name, value;
  const handleform = (e) =>
{
  name = e.target.name;
  value = e.target.value;
  setFormdata({...formdata,[name]:[value]});
}
const submit = async (e) =>
{
 e.preventDefault(); 
 const {  Name ,  Rollno, Contactno, Email, Branch, Year, Gender, resi} = formdata;
 const response = await fetch("https://workshopregistration.herokuapp.com/api/users/register",{
   method: "POST",
   body:JSON.stringify({
    Name ,  Rollno, Contactno, Email, Branch, Year, Gender, resi
   })
 });
 const resdata = await response.json();
 console.log(resdata);
 const email_res = await fetch("https://workshopregistration.herokuapp.com/api/users/confirmemail",{
   method:"POST",
   body:JSON.stringify({
   Email
   })
 });
 const email_n = await email_res.json();
 console.log(email_n);
}
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
          <input type="text"  className="input_field" placeholder="Name" name="Name" value={formdata.Name}
          onChange ={handleform}/>
        </div>
        <div className="input_container">
          <input type="text"  className="input_field" placeholder="University Roll No." name="Rollno" value={formdata.Rollno}
          onChange ={handleform}/>
        </div>
        <div className="input_container">
          <input type="text"  className="input_field" placeholder="Contact No." name="Contactno" value={formdata.Contactno}
          onChange ={handleform}/>
        </div>
        <div className="input_container">
          <input type="text"  className="input_field" placeholder="Email Address" name="Email" value={formdata.Email}
          onChange ={handleform}/>
        </div>
        <div className="input_container">
        <select className=" input_field" id="Branch" name="Branch" required value={formdata.Branch}
          onChange ={handleform}>
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
        <select className="input_field" name="Gender" value={formdata.Gender}
          onChange ={handleform} >
              <option selected>gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
        </select>
          </div>
        <div className="input_container">
        <select className="input_field " name="Year" value={formdata.Year}
          onChange ={handleform} >
              <option selected>Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
        </select>
          </div>
          <div className="d-flex justify-content-center">
             <div className="justify">
              <div className= "radio">
              <span className="radio_text">Hosteler</span> 
                <input type="radio" className="form-check-input bg-blue " name="resi" required
                  value="Hosteler"
                  onChange ={handleform}/>
          
              </div>
              <div className="radio">
              <span className="radio_text">Day-Scholar</span> 
                <input type="radio" className="form-check-input bg-blue " name="resi" required
                  value="Day-Scholar"
                  onChange ={handleform}
                   />
                   </div>
              </div>
              </div>
              <div className="input_container">
              <button type="button" class="btn input_field" onClick={submit}>Register</button>
              </div>
</form>
          
          </div>
          
        </div>
    </>
  );
}
export default Reg;
