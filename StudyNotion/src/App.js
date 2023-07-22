import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', country: "India", paymentmethod: ""
  })


  function changeHandler(event) {
    setFormData(prevData => {
      return {
        ...prevData, [event.target.name]: event.target.value
      }
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("Form submitted with data:");
    console.log(formData);

  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'> First name  </label><br />
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='Name'
          value={formData.firstName}
          onChange={changeHandler}
          className='outline'
        />
        <br />
        <label htmlFor='lastName'> last name</label><br />
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='Last Name'
          value={formData.lastName}
          onChange={changeHandler}
          className='outline'
        />
        <br />
        <label htmlFor='email'> email address</label><br />
        <input
          type='text'
          name='email'
          id='email'
          placeholder='adc@gmail.com'
          value={formData.email}
          onChange={changeHandler}
          className='outline'
        />
        <br />
        <label htmlFor='country'> Country </label><br />
        <select name='country'
          id='country'
          value={formData.country}
          onChange={changeHandler}
          className='outline'>
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />
        <label htmlFor='pincode'>Pin Code</label><br />
        <input
          type='text'
          name='pincode'
          id='pincode'
          placeholder='pincode'
          value={formData.pincode}
          onChange={changeHandler}
          className='pincode'
        />

        {/* <fieldset>
          <legend>Gender</legend>
          <div className='' >
            <div>
              <input id='male'
                type='checkbox'
                name='male'
                onClick={changeHandler}
                value={formData.male}
              ></input>
              <label htmlFor='male'>male</label>
            </div>
            <div>
              <input id='female'
                type='checkbox'
                name='male'
                onClick={changeHandler}
                value={formData.female}
              ></input>
              <label htmlFor='female'>female</label>
            </div>
          </div>
        </fieldset> */}

        <fieldset>
          <legend>pay method </legend>

          <input type='radio'
            name='paymentmethod'
            id='COD'
            onChange={changeHandler}
            value="cash on deleivery"
          />
          <label htmlFor='COD'>Cash on delivery</label>
          <br />

          <input type='radio'
            name='paymentmethod'
            id='UPI'
            value="UPI payment"
            onChange={changeHandler}
          />
          <label htmlFor='UPI'>UPI payment</label>
        </fieldset>

        <button>save</button>
      </form>
    </div>
  );
}

export default App;
