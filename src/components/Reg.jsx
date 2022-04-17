import React, {useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
function Reg() {
  const  [formdata, setFormdata] = useState({
    Name:"",
    Rollno:"",
    Contactno:"",
    Email:"",
    Branch:"",
    Year:"",
    Gender:"",
    Residence:""
  });

  var checkStatus=false;
  var checkStatusAll=false;
const [formErrors,setFormErrors] =useState({});
const [formErrorsName,setformErrorsName] =useState({});
const [formErrorsRoll,setformErrorsRoll] =useState({});
const [formErrorsContactno,setformErrorsContactno] =useState({});
const [formErrorsBranch,setformErrorsBranch] =useState({});
const [isSubmit, setIsSubmit] = useState(false);
const [focused, setFocused] = useState(false);


  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length=== 0 && isSubmit)
    {
      console.log(formdata);
    }
    }, [formErrors,formErrorsBranch,formErrorsContactno,formErrorsRoll,formdata,isSubmit]);

  const handleFocus =(e)=>{ 
    setFocused(true);
    
    setFormErrors(validate(formdata));
  
  };
  const handleFocusName =(e)=>{ 
    setFocused(true);
    
    setformErrorsName(validateName(formdata));
  
  };
  const handleFocusRoll =(e)=>{ 
    setFocused(true);
    
    setformErrorsRoll(validateRoll(formdata));
  
  };
  const handleFocusContactno =(e)=>{ 
    setFocused(true);
    
    setformErrorsContactno(validateContactno(formdata));
  
  };

  // const handleFocusBranch =(e)=>{ 
  //   setFocused(true);
    
  //   setformErrorsBranch(validateBranch(formdata));
  
  // };
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
 
 setformErrorsName(validateName(formdata));
 setFormErrors(validate(formdata));
 setformErrorsContactno(validateContactno(formdata));
 setformErrorsRoll(validateRoll(formdata));
setIsSubmit(true);   
api();
}
const api = async () =>
{
  // const {  Name ,  Rollno, Contactno, Email, Branch, Year, Gender, Residence} = formdata;
  const response = await axios({
    url:"https://nameless-citadel-14148.herokuapp.com/api/users/register",
    method:'post',
    data:({
     Name:formdata.Name ,  Rollno:formdata.Rollno, Contactno:formdata.Contactno, Email:formdata.Email, Branch:formdata.Branch, Year:formdata.Year, Gender:formdata.Gender, Residence:formdata. Residence
    })
  });
  const resdata = await response.json();
  console.log(resdata);
  const email_res = await axios({url:"https://nameless-citadel-14148.herokuapp.com/api/users/confirmemail",
    method:"post",
    data:({
    Email:formdata.Email,
    })
  });
  const email_n = await email_res.json();
  console.log(email_n);
}




 
 
  const validate =(value)=> {
    const errors ={}
    let regex = new RegExp('[a-z0-9]+@akgec.ac.in'); 
    
    if(!value.Email)
    {
      errors.Email="email is required!";
    
    }
    
    
    else if(!regex.test(value.Email))
    {
      errors.Email="This is not a valid email format!";
      
    }
    
    else{
      checkStatus=true;
    }
    return errors;
    };

    const validateName =(value)=>{
const errors ={};
let regex = new RegExp("^[A-Za-z ]{7,29}$"); 
      if(!value.Name)
      {
        errors.Name="Name is required!";
      
      }
      else if(!regex.test(value.Name))
    {
      errors.Name="Name should only include alphabets";
      
    }
     else{
        checkStatusAll=true;
      }
      return errors;
    };
    const validateRoll =(value)=>{
      const errors ={};
      let regex = new RegExp('[0-9]'); 
            if(!value.Rollno)
            {
              errors.Rollno="Roll number is required!";
            
            }
            else if(!regex.test(value.Rollno))
            {
              errors.Rollno="Roll number should only be numeric";
              
            }

           else{
              checkStatusAll=true;
            }
            return errors;
          };


// contact number validation

          const validateContactno =(value)=>{
            const errors ={};
            let regex = new RegExp('^[0-9]{10}$'); 
                  if(!value.Contactno)
                  {
                    errors.Contactno="Contact  number is required!";
                  
                  }
                  else if(!regex.test(value.Contactno))
                  {
                    errors.Contactno="Contact  number should only 10 digit";
                    
                  }
                 else{
                    checkStatusAll=true;
                  }
                  return errors;
                };


                // const validateBranch =(value)=>{
                //   const errors ={};
                //         if(!value.Branch)
                //         {
                //           errors.Branch="Branch is required!";
                        
                //         }
                //        else{
                //           checkStatusAll=true;
                //         }
                //         return errors;
                //       };
      

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
          onChange ={handleform} onBlur={handleFocusName} focused={focused.toString()}/>   <p className='error_msg'>{formErrorsName.Name}</p>
        </div>
        <div className="input_container">
          <input type="text"  className="input_field" placeholder="University Roll No." name="Rollno" value={formdata.Rollno}
          onChange ={handleform} onBlur={handleFocusRoll}  focused={focused.toString()}/>   <p className='error_msg'>{formErrorsRoll.Rollno}</p>
        </div>
        <div className="input_container">
          <input type="text"  className="input_field" placeholder="Contact No." name="Contactno" value={formdata.Contactno}
          onChange ={handleform} onBlur={handleFocusContactno} focused={focused.toString()}/>   <p className='error_msg'>{formErrorsContactno.Contactno}</p>
        </div>
        <div className="input_container">
          <input type="email"  className="input_field emailinp" placeholder="Email: xyz@akgec.ac.in" name="Email" value={formdata.Email}
          onChange ={handleform} onBlur={handleFocus} focused={focused.toString()}/>   <p className='error_msg'>{formErrors.Email}</p>
        </div>
        <div className="input_container">
        <select className=" input_field select" id="Branch" name="Branch" required value={formdata.Branch}
          onChange ={handleform} focused={focused.toString()} placeholder="Branch">
            <option selected>Branch</option>
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
        <select className="input_field select" name="Gender" value={formdata.Gender}
          onChange ={handleform}  onBlur={handleFocusName} focused={focused.toString()}>
              <option selected>gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
        </select>
          </div>
        <div className="input_container">
        <select className="input_field select" name="Year" value={formdata.Year}
          onChange ={handleform} onBlur={handleFocusName} focused={focused.toString()}>
              <option selected>Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
        </select>
          </div>
          <div className="d-flex justify-content-center">
             <div className="justify select">
              <div className= "radio">
              <span className="radio_text">Hosteler</span> 
                <input type="radio" className="form-check-input bg-blue " name="Residence" required
                  value="Hosteler"
                  onChange ={handleform}/>
          
              </div>
              <div className="radio">
              <span className="radio_text">Day-Scholar</span> 
                <input type="radio" className="form-check-input bg-blue " name="Residence" required
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