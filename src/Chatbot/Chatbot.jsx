import { useState } from 'react';
import './Chatbot.css'

const Chat = () => {
    const [input, setInput] = useState('');

    const chatbox = document.querySelector(".chatbox");

    let userMessage;
    const API_KEY = "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";

    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent = className === "outgoing" ? ` <p>${message}</p>` : `<span className='text-red-500'>@</span><p>${message}`;
        chatLi.innerHTML = chatContent;
        return chatLi;
    }
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const generateResponse = () => {

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }]
            })
        }

        fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleChat = () => {
        userMessage = input;
        console.log(userMessage);
        if (!userMessage) return;

        chatbox.appendChild(createChatLi(userMessage, "outgoing"));

        setTimeout(() => {
            chatbox.appendChild(createChatLi("Thinking..... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque cum laudantium beatae porro", 'incoming'));
            generateResponse();
        }, 600)
    }


    return (
        <div className="body show-chatbot">
            <button className="chatbot-toggler">
                <span>open</span>
                <span>close</span>
            </button>
            <div className="chatbot">
                <header>
                    <h2>chatbot</h2>
                    <span>close</span>
                </header>
                <ul className="chatbox">
                    <li className="chat incoming">
                        <span className='text-red-500'>@</span>
                        <p>Hi there <br /> How can I help you?</p>
                    </li>
                </ul>
                <div className="chat-input">
                <input type="text" onChange={(e) => setInput(e.target.value)} placeholder='Enter a message....' id='inputField'/>
                <button onClick={handleChat}>send</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;

// const Chatbot = () => {
//     return (
//         <div>
//             <h2>hi there</h2>
//         </div>
//     );
// };

// export default Chatbot;