import { Link } from "react-router-dom";
import Info from "../components/Info";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <Info />
      <Link to="/doctorschedule">
        <button>Who is on duty?</button>
      </Link>
      <br />
      <Link to="/patientsignup">
        <button>I am a new patient</button>
      </Link>
    </div>
  );
};

export default HomePage;
