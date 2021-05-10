import { useEffect, useState } from "react";
import axios from "axios";
import Info from "../components/Info";
import DoctorsTable from "../components/DoctorsTable";

const DoctorSchedule = () => {
  const [doctors, setDoctors] = useState();

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

  return (
    <div>
      <h2>Who is on duty?</h2>
      {!doctors
        ? "Loading..."
        : doctors.map((doctor) => {
            return (
              <DoctorsTable
                key={doctor.id}
                doctor={doctor.doctor}
                availability={doctor.onDuty ? "on duty" : "off duty"}
              />
            );
          })}
      <Info />
    </div>
  );
};

export default DoctorSchedule;
