import { useState, useEffect } from 'react';
import InputItem from '../../components/Form/InputItem/InputItem';
import SelectItem from '../../components/Form/SelectItem/SelectItem';
import axios from 'axios';
import { MAIN_ROUTE } from '../../router/const';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../../styles/containers.scss';
import RatioButton from '../../components/Form/RatioButton/RatioButton';

const Register = () => {
  const [repairType, setRepairType] = useState<string>('');
  const [manufacturer, setManufacturer] = useState<string>('');
  const [deviceType, setDeviceType] = useState<string>('');
  const [deviceModel, setDeviceModel] = useState<string>('');
  const [serialNumber, setSerialNumber] = useState<string>('');
  const [repairPlace, setRepairPlace] = useState<string>('');
  const [tvBox, setTvBox] = useState<boolean>(false);
  const [delivery, setDelivery] = useState<string>('');
  const [repairNumber, setRepairNumber] = useState<string>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');

  const [step, setStep] = useState(1);
  const [submited, setSubmited] = useState(false);

  const navigate = useNavigate();

  const dateTime = new Date();

  const rma = {
    clientInfo: {
      firstName,
      lastName,
      phoneNumber,
      email,
      country,
      city,
      address,
      zipCode,
    },
    deviceInfo: {
      repairNumber,
      rmaStatus: {
        100: `Registered ${dateTime.toLocaleString('lt-GB')}`,
      },
      repairType,
      manufacturer,
      deviceType,
      deviceModel,
      serialNumber,
      repairPlace,
      tvBox,
      delivery,
    },
  };

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/register', rma)
      .then(() => setSubmited(true))
      .catch((error) => {
        console.error(error);
      });
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/getRMA')
      .then((resp) => resp.data)
      .then((response) => {
        setRepairNumber(response + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return submited ? (
    <div>
      <h2>Thank you for registration.</h2>
      <h2>Your repair act number is RMA-{repairNumber}</h2>
      <Button className="danger" type="button" path="/">
        Back To Home Page
      </Button>
    </div>
  ) : (
    <form onSubmit={submitForm} className="bodyContainer">
      {step === 1 && (
        <div>
          <SelectItem
            label="Repair warranty type"
            optionsList={['Warranty', 'Paid Service']}
            state={repairType}
            setState={setRepairType}
          />
          <SelectItem
            label="Device manufacturer"
            optionsList={['Lenovo', 'Asus']}
            state={manufacturer}
            setState={setManufacturer}
          />
          <SelectItem
            label="Device type"
            optionsList={['TV', 'Phone']}
            state={deviceType}
            setState={setDeviceType}
          />
          {deviceType === 'TV' && (
            <div>
              <input
                type="checkbox"
                id="TVBox"
                name="TVBox"
                value="tvBox"
                checked={tvBox}
                onChange={(e) => setTvBox(e.target.checked)}
              />
              <label htmlFor="TVBox">
                Please select checkbox if you have TV packaging for safe TV
                transportation
              </label>
            </div>
          )}
          <InputItem
            type="text"
            label="Device model"
            placeholder="Device model name"
            state={deviceModel}
            setState={setDeviceModel}
          />
          <InputItem
            type="text"
            label="Serial number"
            placeholder="Device serial number"
            state={serialNumber}
            setState={setSerialNumber}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <InputItem
            type="text"
            label="First Name"
            placeholder="First Name"
            state={firstName}
            setState={setFirstName}
          />
          <InputItem
            type="text"
            label="Last Name"
            placeholder="Last Name"
            state={lastName}
            setState={setLastName}
          />
          <InputItem
            type="tel"
            label="Phone number"
            placeholder="+370..."
            state={phoneNumber}
            setState={setPhoneNumber}
          />
          <InputItem
            type="text"
            label="Email"
            placeholder="yourEmail@email.com"
            state={email}
            setState={setEmail}
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <SelectItem
            label="Select how your device will be delivered to service center*"
            optionsList={['Carry In', 'Courier', 'Repair at Home']}
            state={repairPlace}
            setState={setRepairPlace}
          />
          {repairPlace === 'Carry In' && (
            <div>
              <div className="label">
                Select reception department where are you planning to deliver
                your device:
              </div>

              <RatioButton
                htmlFor="vilnius"
                label="Vilnius, Geležinio vilko g. 6"
                name="carryIn"
                value="Vilnius"
                checked={delivery === 'Vilnius'}
                onChange={(e) => setDelivery(e.target.value)}
              />
              <RatioButton
                htmlFor="kaunas"
                label="Kaunas, Savanorių pr. 194"
                name="carryIn"
                value="Kaunas"
                checked={delivery === 'Kaunas'}
                onChange={(e) => setDelivery(e.target.value)}
              />
              <RatioButton
                htmlFor="klaipeda"
                label="Klaipeda, Partizanų pr. 294"
                name="carryIn"
                value="Klaipeda"
                checked={delivery === 'Klaipeda'}
                onChange={(e) => setDelivery(e.target.value)}
              />
            </div>
          )}
          {(repairPlace === 'Repair at Home' || repairPlace === 'Courier') && (
            <div>
              {repairPlace === 'Repair at Home' && (
                <div className="alert">
                  Attention! Repair at home elegitable only for home appliance.
                </div>
              )}
              <SelectItem
                label="Country"
                optionsList={['Lithuania', 'Latvia', 'Estonia']}
                state={country}
                setState={setCountry}
              />
              <InputItem
                type="text"
                label="City"
                placeholder="City"
                state={city}
                setState={setCity}
              />

              <InputItem
                type="text"
                label="Address"
                placeholder="Address"
                state={address}
                setState={setAddress}
              />
              <InputItem
                type="text"
                label="Zip Code"
                placeholder="Zip Code"
                state={zipCode}
                setState={setZipCode}
              />
            </div>
          )}
        </div>
      )}
      <div className="btnContainer">
        {step === 1 ? (
          <Button className="danger" type="button" path="/">
            Cancel
          </Button>
        ) : (
          <Button className="danger" type="button" onClick={() => prevStep()}>
            Back
          </Button>
        )}

        {step === 3 ? (
          <div>
            <Button key="button-1" className="success" type="submit">
              Register
            </Button>
          </div>
        ) : (
          <div>
            <Button
              key="button-2"
              className="success"
              type="button"
              onClick={() => nextStep()}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </form>
  );
};

export default Register;
