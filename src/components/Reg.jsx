import React from "react";

function reg() {
  return (
    <>
      <div className="cont">
        <div className="image1"></div>
        <div className="image2">
          <h1 className="text">Hey! Get Yourself Registered</h1>
          <form className="form mt-5">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="University Roll No."
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Contact No."
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <select className="form-control" id="exampleFormControlSelect1">
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
              <select className="form-control" id="exampleFormControlSelect1">
                <option selected="disabled">Year</option>
                <option>I</option>
                <option>II</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default reg;
