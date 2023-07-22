import { useEffect, useState, useMemo } from "react";
import Button from './Button';

import "./index.css";

function Form({ onSubmit }) {

    const [formData, setFormData] = useState({
        name: "", fatherName: "", dob: "", cityName: "", email: "", phoneNumber: "", mode: ""
    });

    function changeHandler(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData, [event.target.name]: event.target.value
            }
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        onSubmit(formData);
    }

    const clear = () => {
        setFormData({});
    }

    const [error, setError] = useState(null);

    // const validateEmail = () => {
    //     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    //     if (!emailRegex.test(email)) {
    //         setError('Please enter a valid email address');
    //     } else {
    //         setError('');
    //     }
    // };

    // useEffect(() => {
    //     validateEmail();
    // }, [email]);

    return (
        <div  className="form-container">
            <div> <h3 className="formheading">My form</h3>
                <form action="#"  onSubmit={submitHandler}>
                
                    <div>
                        <input type="text"  className="inputfield"  maxLength={20} value={formData.name} name="name" onChange={changeHandler} placeholder="name" />
                    </div>
                    <div>
                        <input type="text"  className="inputfield" maxLength={20} value={formData.fatherName} onChange={changeHandler} name="fatherName" placeholder="Father name" />
                    </div>
                    <div>
                        <input type="date"   className="inputfield" name="dob" value={formData.dob} onChange={changeHandler} placeholder="date of birth" />
                    </div>
                    <div>
                        <input type="text"  className="inputfield" name="cityName" value={formData.cityName} onChange={changeHandler} placeholder="City Name" />
                    </div>
                    <div>
                        <input type="email"  className="inputfield"name="email" value={formData.email} onChange={changeHandler} maxLength={30} placeholder="Email" ></input>
                    </div>
                    <div>
                        <input type="number"  className="inputfield" name="phoneNumber" value={formData.phoneNumber} onChange={changeHandler} placeholder="Phone Number" />
                    </div>
                    <div className="choice">
                        <input type="radio"  name="mode" id="Online-mode" value="Online-mode" checked={formData.mode === "Online-mode"} onChange={changeHandler}></input>
                        <label htmlFor="Online-mode">Online mode</label>
                        <input type="radio" name="mode" id="Offline-mode" value="Offline-mode" checked={formData.mode === "Offline-mode"} onChange={changeHandler}></input>
                        <label htmlFor="Offline-mode">Offline mode</label>
                    </div>
                    <br />
                    <input className="btn" type="submit" value="submit" />
                </form>
                {error && (
                    <div className="error" style={{ color: "red" }}>
                        <span>  {error}</span>
                    </div>
                )}
            </div>

        </div>
    );
}
export default Form;
