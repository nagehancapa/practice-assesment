const Info = (props) => {
  let day = new Date();
  let hour = day.getHours();

  let isOpen = hour >= 8 && hour <= 16 ? "open" : "closed";

  return (
    <div>
      {" "}
      <h3>We are: {isOpen}</h3>
      <h4>To make an appointment</h4>
      <h4>call: 020 555 5555</h4>
    </div>
  );
};

export default Info;
