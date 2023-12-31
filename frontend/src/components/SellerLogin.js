import "./navbar.css"
import "./aboutview.css"
import { Link } from "react-router-dom"
const SellerLogin = () =>{
    return(
        <div className="container-fluid">
            <div className="abo2">
            <div className="leadtext text-center pt-3">Become a Seller</div>
            <form class="row g-3 text-light px-5 pt-3 pb-5 m-0" data-bs-theme="dark">
            <div class="col-md-4">
  <label for="inputFirstName" class="form-label">First Name</label>
    <input type="text" class="form-control" id="inputFirstName" />
  </div>
  <div class="col-md-4">
  <label for="inputMiddleName" class="form-label">Middle Name (optional)</label>
    <input type="text" class="form-control" id="inputMiddleName" />
  </div>
  <div class="col-md-4">
  <label for="inputLastName" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="inputLastName" />
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email(*)</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-3">
    <label for="inputPassword4" class="form-label">Password(*)</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  <div class="col-md-3">
    <label for="inputPassword5" class="form-label">Confirm Password(*)</label>
    <input type="password" class="form-control" id="inputPassword5" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address(*)</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="House Number, Street, Landmark" />
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2(*)</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Area, Locality" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City(*)</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State(*)</label>
    <select name="state" id="inputState" class="form-control">
      <option selected>Choose...</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
      
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Pin Code(*)</label>
    <input type="text" class="form-control" id="inputZip"  />
  </div>
  <div class="col-md-6">
    <label for="residenceType" class="form-label">Residence Type</label>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Rural
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label class="form-check-label" for="flexRadioDefault2">
    Urban
  </label>
</div>
  </div>
  
  <div class="input-group mb-3 col-md-6">
  <span class="input-group-text" id="basic-addon1">₹</span>
  <input type="text" class="form-control" placeholder="Annual Income" aria-label="AnnualIncome" aria-describedby="basic-addon1" />

    
  </div>

  <div class="col-md-3">
    <label for="aadharid" class="form-label">Aadhar</label>
    <input type="text" class="form-control" id="aadharid" placeholder="12 Digit Aadhar Number" />
  </div>
  <div class="col-md-3">
    <label for="voter" class="form-label">Voter</label>
    <input type="text" class="form-control" id="voter" placeholder="EPIC Number" />
  </div>
  <div class="col-md-3">
    <label for="pannum" class="form-label">Pan</label>
    <input type="text" class="form-control" id="pannum" placeholder="PAN Number" />
  </div>
  <div class="col-md-3">
    <label for="gst" class="form-label">GST</label>
    <input type="text" class="form-control" id="gst" placeholder="GST Number" />
  </div>
  <label for="inputGroupFile02" class="form-label">Profile Picture</label>
  <div class="input-group mb-3 mt-0">
  
  <input type="file" class="form-control" id="inputGroupFile02" />
  {/* <label class="input-group-text" for="inputGroupFile02">Upload</label> */}
</div>
<div className="captext3">(*) Fields marked are to be filled with the same information as entered during user login </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Accept Terms & Conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <Link to="listitems"><button type="button" class="button-87">Sign Up</button></Link>
  </div>
</form>
        </div>
        </div>
    )
}
export default SellerLogin;