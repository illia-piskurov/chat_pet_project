import React from "react"
import ChatListItem from "../ChatListItem/ChatListItem";
import cl from "./ChatList.module.css"

const ChatList = ({ chats }) => {
    return (
        <div className={cl.ChatList}>
            <h1 className={cl.Chats}>Chats</h1>
            {chats.map((chat) =>
                <ChatListItem chat={chat} />
            )}
        </div>
    );
}

export default ChatList;