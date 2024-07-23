import React, { useEffect } from 'react';
import axios from 'axios';
import './DialogflowChatbot.css'
const DialogflowChatbot = () => {
  useEffect(() => {
    
    const loadChatbot = () => {
    const container = document.getElementById('dialogflow-container');

    if (!container.querySelector('iframe')) {
        const agentId = 'e8db55cc-b112-40d4-8bce-8584e397432e';

        const apiUrl = `https://console.dialogflow.com/api-client/demo/embedded/${agentId}`;

        const apiKey = 'Y27af41feea09ee0a9672b0edc4edc048b1bb729f';

        const iframe = document.createElement('iframe');
        iframe.width = '350';
        iframe.height = '430';
        iframe.allow = 'microphone;';
        iframe.src = `${apiUrl}?apiKey=${apiKey}`;

        container.appendChild(iframe);
    }
    };

    loadChatbot();
  }, []);

  return <div id="dialogflow-container" className="center-chatbot">

  </div>;
};

export default DialogflowChatbot;