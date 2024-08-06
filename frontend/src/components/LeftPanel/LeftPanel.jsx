import React, { useState } from "react";
import Menu from "../Menu/Menu";
import ChatList from "../ChatList/ChatList";
import cl from "./LeftPanel.module.css"

const LeftPanel = () => {
    const [chats, setChats] = useState([
        { name: "Alice Freeman", Data: "Aug 17, 2024", messages: ["How was your meeting!"] },
        { name: "Josefina", Data: "Aug 16, 2024", messages: ["Hi No, I am going for a walk."] },
        { name: "Yarik Gorlachenko", Data: "Aug 17, 2024", messages: ["Hi! I am a little sad, tell me a joke please."] },
    ]);

    return (
        <div className={cl.LeftPanel}>
            <Menu />
            <ChatList chats={chats} />
        </div>
    );
}

export default LeftPanel;