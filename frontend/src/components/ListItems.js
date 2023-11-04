import "./navbar.css"
import "./aboutview.css"

const ListItems = () =>{
    return(
        <div className="container-fluid">
        <div className="abo2">
            <div className="leadtext text-center pt-3">List an Item</div>
            <form class="row g-3 text-light px-5 pt-3 pb-5 m-0" data-bs-theme="dark">
  <div class="col-md-4">
    <label for="productName" class="form-label">Product Name</label>
    <input type="email" class="form-control" id="productName" />
  </div>
  <div class="col-md-2">
    <label for="priceItem" class="form-label">Price</label>
    
    <input type="number" class="form-control" id="priceItem" />
  </div>
  <div class="col-md-3">
    <label for="inputCity" class="form-label">Stock</label>
    <input type="number" class="form-control" id="inputCity" />
  </div>
  <div class="col-12 pb-4 pt-4">
    <label for="productDescription text-align-start" class="form-label">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="1234 Main St"></textarea>


    
  </div>
  <label for="inputGroupFile02" class="form-label">Add Picture</label>
  <div class="input-group mb-3 mt-0">
  
  <input type="file" class="form-control" id="inputGroupFile02" />
  
</div>
  
  
  <div class="col-md-3">
    <label for="inputState" class="form-label">Item Type</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Perishable</option>
      <option>Non-Perishable</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="inputZip" class="form-label">Size (Applicable for Apparel)</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        I hereby accept the Seller Terms and Conditions (*)
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="button-87">List Item</button>
  </div>
</form>
            
            
            
            </div>
            </div>
            
    )
}




export default ListItems;