import React, { useState } from "react";
import "./EventRegister.css";

import axios from "axios";

const EventRegister = () => {
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inst, setInst] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "phno") setPhno(value);
    if (name === "email") setEmail(value);
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(value)
        ? prevSelectedOptions.filter((option) => option !== value)
        : [...prevSelectedOptions, value]
    );
  };

  return (
    <div className="mainn">
      <div className="mainObj">
        <div className="heading">
          <h4>Register here to volunteer for the event.</h4>
        </div>
        <div className="div">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            value={name}
            name="name"
            placeholder="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="div">
          <label htmlFor="tel">Phone number</label>
          <input
            required
            type="tel"
            value={phno}
            name="phno"
            placeholder="phone number"
            onChange={handleInputChange}
          />
        </div>
        <div className="div">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            value={email}
            name="email"
            placeholder="example@gss.com"
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <p>please select the fields that you wish to participate</p>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="exampleRadios"
            id="exampleRadios1"
            value="Health Care"
            onChange={handleCheckboxChange}
          />

          <label className="form-check-label" htmlFor="exampleRadios1">
            Health Care
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="exampleRadios"
            id="exampleRadios2"
            value="Social Welfare"
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Social Welfare
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="exampleRadios"
            id="exampleRadios3"
            value="Custom and Tradition"
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="exampleRadios3">
            Custom and Tradition
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="exampleRadios"
            id="exampleRadios4"
            value="Education"
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="exampleRadios4">
            Education
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="exampleRadios"
            id="exampleRadios5"
            value="Environment"
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="exampleRadios5">
            Environment
          </label>
        </div>
        <input
          type="submit"
          className="btn btn-success"
          value="Register"
          onClick={async () => {
            console.log(name, email, phno, selectedOptions);
            try {
              const response = await axios.post(
                "https://foundation-y0s5.onre0nder.com/registers",
                { name, email, phno, selectedOptions }
              );
              console.log(response.data.val1);
              if (response.data.val1) {
                setInst(1);
              } else {
                setInst(2);
              }
            } catch (e) {
              setInst(2);
              console.log(e);
            }
          }}
        />
        {inst > 0 &&
          (inst == 1 ? (
            <div className="alert alert-success" role="alert">
              user registration success
            </div>
          ) : (
            <div className="alert alert-warning" role="alert">
              user registration failed,please try again
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventRegister;
