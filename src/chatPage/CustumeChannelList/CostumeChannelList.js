import React, { Component, useRef } from 'react';
import { truncate } from '../../GetStream/utils';
import { Avatar } from 'stream-chat-react';
import ReactDOM from "react-dom";
import ChatIcons from './IconsForChannelList'
import '../chatPage.css'
const rootElement = document.getElementById("root");
ReactDOM.render(<ChatIcons />, rootElement);

function CostumeChannelList(props) {
    const channelPreviewButton = useRef(null);
    const onSelectChannel = () => {
        props.setActiveChannel(props.channel, props.watchers);
        // eslint-disable-next-line no-unused-expressions
        channelPreviewButton?.current?.blur();
    };
    const unreadClass =
        props.unread >= 1 ? 'str-chat__channel-preview--unread' : '';
    const activeClass = props.active ? 'str-chat__channel-preview--active' : '';
    return (
        <>
            <ChatIcons />
            <div className="listOfChannels">
                <div className={`str-chat__channel-preview ${unreadClass} ${activeClass}`}>
                    <button
                        onClick={onSelectChannel}
                        ref={channelPreviewButton}
                        data-testid="channel-preview-button"
                    >
                        {props.unread >= 1 && (
                            <div className="str-chat__channel-preview--dot" />
                        )}
                        <Avatar image={props.displayImage} />
                        <div className="str-chat__channel-preview-info">
                            <span className="str-chat__channel-preview-title">
                                {props.displayTitle}
                            </span>
                            <span className="str-chat__channel-preview-last-message">
                                {truncate(props.latestMessage, props.latestMessageLength)}
                            </span>
                            {props.unread >= 1 && (
                                <span className="str-chat__channel-preview-unread-count">
                                    {props.unread}
                                </span>
                            )}
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default CostumeChannelList