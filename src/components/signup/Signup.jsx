import './Signup.css';
export default function Signup() {
    return (
      <div className="signup">
      <form>
          <div className="input">

              <div className="form-group">
                  <label htmlFor="inputname">Name</label>
                  <input type="text" className="form-control" id="inputname" placeholder="Please enter your Name"/>
              </div>
              <div className="form-row">
                  <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Email</label>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Please enter your Email"/>
                  </div>
                  <div className="form-group col-md-6">
                      <label htmlFor="inputPassword4">Password</label>
                      <input type="password" className="form-control" id="inputPassword4"/>
                  </div>
              </div>

              <div className="form-row">

                  <div className="form-group col-md-6">
                      <label htmlFor="inputGender">Gender</label>
                      <select className="form-control">
                          <option>Male</option>
                          <option>Female</option>
                      </select>
                  </div>
                  <div className="form-group col-md-6">
                      <label htmlFor="inputage">Age</label>
                      <input type="number" className="form-control" id="inputage" placeholder="Enter Your Age"/>
                  </div>
              </div>

              <button type="submit" className="btn btn-primary"><a href="main.html" style="color: white;">Sign
                      Up</a></button><br/>
              <p>OR Already have an account please <a href="Sign_in.html">Sign In</a></p>
          </div>
      </form>
    </div>


    )
}
