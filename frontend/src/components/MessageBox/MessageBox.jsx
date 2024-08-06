import React from "react";
import cl from "./MessageBox.module.css";

const MessageBox = ({ message, date, isUser }) => {

    const stylesForUserMessage = [cl.MessageText, cl.FromUser].join(' ');
    const stylesForContactMessage = [cl.MessageText, cl.FromContact].join(' ');
    const alignRight = [cl.MessageBox, cl.User].join(' ');

    return (
        <div className={!isUser ? cl.MessageBox : alignRight}>
            <div className={isUser ? stylesForUserMessage : stylesForContactMessage}>
                <h3>{message}</h3>
            </div>
            <p className={cl.MessageDate}>{date}</p>
        </div>
    )
}

export default MessageBox;