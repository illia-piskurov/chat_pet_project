import React from "react";
import MyImage from "../UI/MyImage/MyImage";
import cl from "./Chat.module.css"
import MyInput from "../UI/MyInput/MyInput";
import SendButtonImage from "../UI/SendBtnImage/SendButtonImage";
import MessageBox from "../MessageBox/MessageBox";

const Chat = (props) => {
    return (
        <div className={cl.Chat}>
            <div className={cl.ChatHeader}>
                <MyImage />
                <h3 className={cl.Name}>Alice Freeman</h3>
            </div>
            <div className={cl.Content}>

                <MessageBox
                    message={"Hi! How are you?"}
                    isUser={false}
                    date={"8/17/2022, 7:43 AM"}
                />

                <MessageBox
                    message={"Not bad! What about you?"}
                    isUser={true}
                    date={"8/17/2022, 7:45 AM"}
                />

                <MessageBox
                    message={"How was your meeting?"}
                    isUser={true}
                    date={"8/17/2022, 7:48 AM"}
                />

            </div>
            <div className={cl.MessageArea}>
                <form className={cl.MessageBox}>
                    <MyInput placeholder="Type your message" style={{
                        padding: "10px 60px 10px 20px",
                        margin: "30px 10px 30px 10px",
                    }} />
                    <button>
                        <SendButtonImage />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chat;