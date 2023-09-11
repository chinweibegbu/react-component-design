import { useState } from 'react';
import { data } from "../../SpeakerData";
import Header from "./Header";
import SpeakerToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";

function Speakers() {
    const [showSessions, setShowSessions] = useState(true);
    const [theme, setTheme] = useState('light');

    return (
        <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
            <Header theme={theme} />
            <SpeakerToolbar theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSessions={setShowSessions} />
            <SpeakersList data={data} />
        </div>
    );
}

export default Speakers;