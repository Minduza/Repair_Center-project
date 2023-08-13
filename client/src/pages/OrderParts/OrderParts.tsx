import { useState } from 'react';
import InputItem from '../../components/Form/InputItem/InputItem';
import TextareaItem from '../../components/Form/TextareaItem/TextareaItem';
import Button from '../../components/Button/Button';

const OrderParts = () => {
  const [brandName, setBrandName] = useState('');
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [discription, setDiscription] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return sent ? (
    <div className="bodyContainer message">
      <div>
        <h3>Thank you for your message.</h3>
        <h3>We will contact you as soon as possible.</h3>
      </div>

      <Button type="button" className="success mg-b-40 " path="/">
        Back to Home Page
      </Button>
    </div>
  ) : (
    <form onSubmit={submitForm}>
      <InputItem
        label="Device manufacturer*"
        type="text"
        state={brandName}
        setState={setBrandName}
      />
      <InputItem
        label="Device model*"
        type="text"
        state={model}
        setState={setModel}
      />
      <InputItem
        label="Serial number*"
        type="text"
        state={serialNumber}
        setState={setSerialNumber}
      />
      <TextareaItem
        label="Message*"
        rows="4"
        cols="50"
        state={discription}
        setState={setDiscription}
      />

      <InputItem
        label="Phone*"
        type="number"
        state={phone}
        setState={setPhone}
      />
      <InputItem
        label="Full Name*"
        type="text"
        state={fullName}
        setState={setFullName}
      />
      <InputItem
        label="Email*"
        type="email"
        state={email}
        setState={setEmail}
      />

      <div className="btnContainer">
        <Button type="button" className="danger" path="/">
          Back
        </Button>
        <Button type="submit" className="success">
          Send
        </Button>
      </div>
    </form>
  );
};

export default OrderParts;
