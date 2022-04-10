const Validation = (values) => {
    let errors={};
    if(!values.Name){
        errors.Name="Name is required."
    }
    if(!values.Rollno){
        errors.Rollno="Roll no. is required."
    }
    if(!values.Contactno){
        errors.Contactno="Contact is required."
    } else if(values.Contactno.length < 10 || values.Contactno.length > 10){
        errors.Contactno="Contact should be of 10 digits."
    }
    if(!values.Email){
        errors.Email="Email is required."
    } else if(!/\S+@\S+\.\S+/.test(values.Email)){
        errors.Email="Email is invalid."
    }    
  return errors;
};

export default Validation;
