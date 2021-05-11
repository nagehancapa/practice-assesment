import { useState } from "react";
// import PatientForm from "../components/PatientForm";

const PatientSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted", {
      firstName,
      lastName,
      email,
      phone,
      gender,
      dateOfBirth,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setGender("");
    setDateOfBirth("");
    setMessage("Successfully logged your information");
  };

  return (
    <div>
      <h1>Patient Signup</h1>
      <form onSubmit={(event) => formSubmit(event)}>
        <div>
          <label>first name</label>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <label>last name</label>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>phone</label>
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div>
          <label>gender</label>
          <select onChange={(event) => setGender(event.target.value)}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div>
          <label>date of birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default PatientSignup;
