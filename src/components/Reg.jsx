import React from "react";

function Reg() {
  return (
    <>
      <div className="cont">
        <div className="image1"></div>
        <div className="image2">
          <h1 className="text">Hey! Get Yourself Registered</h1>
          <div>
            <form className="container">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reg;
