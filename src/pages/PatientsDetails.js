import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PatientDetails = () => {
  const [patientDetails, setPatientDetails] = useState({});
  const routeParams = useParams();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${routeParams.patientId}`
        );
        console.log(response.data);
        setPatientDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPatient();
  }, [routeParams.patientId]);

  return (
    <div>
      {" "}
      <h2>{`${patientDetails.firstName} ${patientDetails.lastName}`}</h2>
      <div style={{ border: "2px solid red", margin: 20 }}>
        <div>
          <p>id: {patientDetails.id}</p>
          <p>date of birth: {patientDetails.dateOfBirth}</p>
          <p>gender: {patientDetails.gender}</p>
          <dl>
            <dt>contact details:</dt>
            <dd>- email: {patientDetails.email}</dd>
            <dd>- phone number: {patientDetails.phoneNumber}</dd>
            <dt>prescriptions</dt>
            <dd>- {patientDetails.prescriptions}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
