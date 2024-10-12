import React, {useState} from 'react';
import styles from './MessageForm.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
  useRecoilState,
} from 'recoil';
import axios from 'axios';
import { messagesAtom } from '../state/atoms';

export const MessageForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useRecoilState(messagesAtom);

  const handleButtonClick = async () => {
    const messageData = {
      phoneNumber,
      message,
    }

    try {
      const response = await axios.post(`http://localhost:4000/send-message`, messageData);
      const newMessage = response.data;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setPhoneNumber('');
      setMessage('');
    } catch(e) {
      console.log(e.message, 'error')
    }
  }

  return (
    <div className={styles.container}>
      <TextField
          id="phone-number"
          label="Phone Number"
          placeholder="Enter phone number"
          className={styles.phoneNumber}
          onChange={(evt) => setPhoneNumber(evt.target.value)}
          value={phoneNumber}
        />

        <TextField
          id="Message"
          label="Message"
          placeholder="Enter your message"
          multiline
          className={styles.message}
          onChange={(evt) => setMessage(evt.target.value)}
          value={message}
        />

      <Button
        variant="contained"
        className={styles.button}
        onClick={handleButtonClick}
      >
        Send Message
      </Button>
    </div>
  )
}

export default MessageForm;