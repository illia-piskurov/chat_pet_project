import React from "react";
import cl from "./Menu.module.css"
import MyImage from "../UI/MyImage/MyImage";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const Menu = () => {
    return (
        <header className={cl.Menu}>
            <div className={cl.Wrapper}>
                <MyImage />
                <MyButton>Log Out</MyButton>
            </div>

            <form>
                <MyInput
                    type="text"
                    placeholder="🔍 Search or start new chat">
                </MyInput>
            </form>
        </header>
    );

}

export default Menu;
