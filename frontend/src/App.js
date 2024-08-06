import React, { useState } from "react";

import cl from "./App.module.css"
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Chat from "./components/Chat/Chat";


function App() {
    return (
        <div className={cl.App}>
            <LeftPanel />
            <Chat />
        </div>
    );

}

export default App;
