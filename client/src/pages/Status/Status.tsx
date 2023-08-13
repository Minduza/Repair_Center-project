import { useState } from 'react';
import InputItem from '../../components/Form/InputItem/InputItem';
import axios from 'axios';
import Button from '../../components/Button/Button';
import './Status.scss';

const Status = () => {
  const [repairStatus, setRepairStatus] = useState({});
  const [repairNumber, setRepairNumber] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .get(`http://localhost:3000/rma/${repairNumber}`)
      .then((resp) => resp.data)
      .then((response) => {
        setRepairStatus(response);
      });
  };

  const manufacturer = repairStatus?.deviceInfo?.manufacturer || '';
  const deviceModel = repairStatus?.deviceInfo?.deviceModel || '';
  const rmaNumber = repairStatus?.deviceInfo?.repairNumber || '';
  const rmaStatus = repairStatus?.deviceInfo?.rmaStatus || '';

  console.log(rmaStatus);

  return (
    <>
      <form onSubmit={submitForm}>
        <InputItem
          label="RMA number:"
          placeholder="Enter repair act number"
          type="string"
          state={repairNumber}
          setState={setRepairNumber}
        />
        <Button type="submit" className="success">
          Check status
        </Button>
      </form>

      {rmaNumber && (
        <div className="statusContainer">
          <div className="statusTitle">Current status of RMA-{rmaNumber}</div>
          <div className="statusSubtitle">
            {manufacturer} {deviceModel}
          </div>
          <table>
            <tr>
              <th>Status</th>
              <th>Description</th>
            </tr>
            {Object.keys(rmaStatus).map((key, index) => {
              return (
                <tr key={index}>
                  <td>{key}</td>
                  <td>{rmaStatus[key]}</td>
                </tr>
              );
            })}
          </table>
          <div className="btnContainer"></div>
        </div>
      )}
      <div>
        <Button type="button" className="danger mg-b-40" path="/">
          Back
        </Button>
      </div>
    </>
  );
};

export default Status;
