import { useState } from 'react';
import InputItem from '../../components/Form/InputItem/InputItem';
import TextareaItem from '../../components/Form/TextareaItem/TextareaItem';
import Button from '../../components/Button/Button';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const sendMessage = (e) => {
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
    <form onSubmit={sendMessage} className="bodyContainer">
      <div>
        <InputItem
          label="Full Name"
          type="text"
          placeholder="Enter your full name..."
          state={fullName}
          setState={setFullName}
        />
        <InputItem
          label="Email"
          type="email"
          placeholder="Enter your email..."
          state={email}
          setState={setEmail}
        />
        <InputItem
          label="Phone"
          type="number"
          placeholder="Enter your contact phone number..."
          state={phone}
          setState={setPhone}
        />
        <TextareaItem
          label="Message"
          rows="4"
          cols="50"
          state={message}
          setState={setMessage}
        />
      </div>

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

export default Contact;
