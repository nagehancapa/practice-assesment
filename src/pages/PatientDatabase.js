import { useEffect, useState } from "react";
import axios from "axios";
import PatientCard from "../components/PatientCard";

function compareName(patientA, patientB) {
  return patientA.lastName.localeCompare(patientB.lastName);
}

const PatientDatabase = () => {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [filterDr, setFilterDr] = useState(1);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
        );
        console.log(response);
        setDoctors(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
        );
        console.log(response);
        setPatients(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPatients();
  }, []);
  console.log(patients);

  const sortedPatients = [...patients].sort(compareName);
  const filteredPatients = sortedPatients.filter(
    (patient) => patient.doctorId === parseInt(filterDr)
  );
  console.log(filteredPatients);

  return (
    <div>
      <h2>Patient Database</h2>
      <div>
        <label>doctor: </label>
        <select
          onChange={(event) => setFilterDr(event.target.value)}
          value={filterDr}
        >
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.doctor}
            </option>
          ))}
          <option value="all">all</option>
        </select>
      </div>
      <div>
        {patients && filterDr === "all"
          ? sortedPatients.map((patient) => {
              return (
                <PatientCard
                  key={patient.id}
                  patientName={`${patient.firstName} ${patient.lastName}`}
                  patientId={patient.id}
                  patientDateOfBirth={patient.dateOfBirth}
                />
              );
            })
          : filteredPatients.map((patient) => {
              return (
                <PatientCard
                  key={patient.id}
                  patientName={`${patient.firstName} ${patient.lastName}`}
                  patientId={patient.id}
                  patientDateOfBirth={patient.dateOfBirth}
                />
              );
            })}
      </div>
    </div>
  );
};

export default PatientDatabase;
