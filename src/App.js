import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import DoctorSchedule from "./pages/DoctorSchedule";
import PatientSignup from "./pages/PatientSignup";
import PatientDatabase from "./pages/PatientDatabase";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route path="/patientdatabase" component={PatientDatabase} />
          <Route path="/patientsignup" component={PatientSignup} />
          <Route path="/doctorschedule" component={DoctorSchedule} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
