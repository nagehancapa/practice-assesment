import { useState } from "react";
import PatientForm from "../components/PatientForm";

const PatientSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setGender("");
    setDateOfBirth("");
    setFormSubmitted(false);
  };

  const patient = { firstName, lastName, email, phone, gender, dateOfBirth };

  return (
    <div>
      <h1>Patient Signup</h1>
      <form onSubmit={(event) => formSubmit(event)}>
        <div>
          <label>first name</label>
          <input
            type="text"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <label>last name</label>
          <input
            type="text"
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>phone</label>
          <input
            type="text"
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
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        {isFormSubmitted && (
          <div>
            <PatientForm patient={patient} />
          </div>
        )}
      </form>
    </div>
  );
};

export default PatientSignup;
