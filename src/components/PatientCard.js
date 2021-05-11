import { Link } from "react-router-dom";

const PatientCard = (props) => {
  return (
    <div style={{ border: "2px solid red", margin: 20 }}>
      <div>
        <p>name: {props.patientName}</p>
        <p>id: {props.patientId}</p>
        <p>date of birth: {props.patientDateOfBirth}</p>
      </div>
      <Link to={`/patientdatabase/${props.patientId}`}>
        <button>show details</button>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default PatientCard;
