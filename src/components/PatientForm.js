const PatientForm = (props) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    gender,
    dateOfBirth,
  } = props.patient;

  console.log("form submitted", {
    firstName,
    lastName,
    email,
    phone,
    gender,
    dateOfBirth,
  });

  return (
    <div>
      {" "}
      <p>Successfully logged your information!</p>
    </div>
  );
};

export default PatientForm;
