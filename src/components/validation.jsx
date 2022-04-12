const Validation = (values) => {
    let errors={};
    if(!values.Name){
        errors.Name="Required*"
    }
    if(!values.Rollno){
        errors.Rollno="Required*"
    }
    if(!values.Contactno){
        errors.Contactno="Required*"
    } else if(values.Contactno.length < 10 || values.Contactno.length > 10){
        errors.Contactno="Contact should be of 10 digits."
    }
    if(!values.Email){
        errors.Email="Required*"
    } else if(!/\S+@\S+\.\S+/.test(values.Email)){
        errors.Email="Email is invalid*"
    }
    if(!values.Branch || values.Branch ==="Branch"){
        errors.Branch="Required*"
    }
    if(!values.Year || values.Branch ==="Year"){
        errors.Year="Required*"
    }
    if(!values.Gender || values.Branch ==="Gender"){
        errors.Gender="Required*"
    }
    if(!values.Residence){
        errors.Residence="Required*"
    }
  return errors;
};

export default Validation;