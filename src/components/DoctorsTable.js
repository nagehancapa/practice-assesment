const DoctorsTable = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{props.doctor}</th>
            <th>{props.availability}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default DoctorsTable;
