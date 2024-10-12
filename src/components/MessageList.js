import React, {useEffect} from 'react';
import styles from './MessageList.module.scss';
import {
    useRecoilState
} from 'recoil';
import axios from 'axios';
import { messagesAtom } from '../state/atoms';

export const MessageList = () => {
  const [messages, setMessages] = useRecoilState(messagesAtom);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:4000/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, [setMessages]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Sent Messages
      </div>

      {messages.map(message => {
        return (
          <div
            className={styles.sentMessageContainer}
            key={message.id}
          >
            <div className={styles.recipientNumber}>
                Recipient: {message.recipient_phone}
            </div>
            <div className={styles.messageBody}>
                Message: {message.message_body}
            </div>
            <div className={styles.timestamp}>
                Timestame: {message.timestamp}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MessageList;