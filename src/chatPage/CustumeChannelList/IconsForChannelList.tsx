import React from 'react';
import ReactDOM from "react-dom";
import Icon from "../../icons/icon";


const rootElement = document.getElementById("root");
ReactDOM.render(<ChatIcons />, rootElement);

function ChatIcons() {

    return (
        <div style={{ width: '330px' }}>
            <div   >
                <div className="chatNavFirst">
                    <Icon style={{ padding: '10px' }} icon="Group-9" />
                    <Icon icon="image-1-Traced" size={40} />
                </div>
            </div>
            <div className="chatNavSecond">
                <Icon icon="Group-334" size={40} />
            </div>
            <div className="chatNavThird">
                <button > <Icon icon="Group-336" size={40} />
                    <p> <span>Your Sessions</span></p>
                </button>
                <button><Icon icon="office-worker-1-1" size={40} />
                    <p> <span>Find People</span></p></button>
                <button> <Icon icon="Group-337" size={40} />
                    <p> <span>New Sessions</span></p></button>
            </div>
        </div>
    );
}

export default ChatIcons