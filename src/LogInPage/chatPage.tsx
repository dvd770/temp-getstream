import React from 'react'
import { Chat, Channel, ChannelListMessenger, ChannelList } from 'stream-chat-react';
import { ChannelHeader, MessageList, Window } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import CostumeChannelList from '../chatPage/CustumeChannelList/CostumeChannelList';
import { StreamChat } from 'stream-chat';

const ChatPage = () => {

    const chatClient = new StreamChat('52kdq2r83wvh', {
        timeout: 6000,
    });

    const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicm91bmQtc2VhLTUifQ.pVXcDy85PPXBRM28jmz9hPNPRJMIcW2uZP4kDxSIsrg';

    chatClient.setUser(
        {
            id: 'round-sea-5',
            name: 'Round sea',
            image: 'https://getstream.io/random_png/?id=round-sea-5&name=Round+sea'
        },
        userToken,
    );

    const filters = { type: 'messaging', members: { $in: ['round-sea-5'] } };
    const sort = { last_message_at: -1 };


    return (
        <>
            <Chat client={chatClient} theme={'messaging dark'}>
                <ChannelList
                    Preview={CostumeChannelList}
                    List={ChannelListMessenger}
                    filters={filters}
                />
                <Channel>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            </Chat>
        </>
    )
}

export default ChatPage
