import { data } from "../../SpeakerData";
import Header from "./Header";
import SpeakerToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";

function Speakers() {
    return ( 
        <div className="container-fluid">
            <Header />
            <SpeakerToolbar />
            <SpeakersList data={data} />
        </div>
     );
}

export default Speakers;