import React from "react"
import cl from "./ChatListItem.module.css"
import MyImage from "../UI/MyImage/MyImage";

const ChatListItem = ({ chat }) => {
    return (
        <div className={cl.Item}>
            <div className={cl.wrapper}>
                <div className={cl.ChatInfo}>
                    <MyImage />
                    <div className={cl.MessageBox}>
                        <h4>{chat.name}</h4>
                        <p>{chat.messages[0]}</p>
                    </div>
                </div>
                <div className={cl.Date}>
                    <p>{chat.Data}</p>
                </div>
            </div>
        </div>
    );
}

export default ChatListItem;