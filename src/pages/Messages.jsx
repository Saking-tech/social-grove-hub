import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const messages = [
  { id: 1, user: 'best_friend', lastMessage: 'Hey, how are you?', time: '2h ago' },
  { id: 2, user: 'coworker', lastMessage: 'Did you see the latest project update?', time: '1d ago' },
  { id: 3, user: 'mom', lastMessage: 'Call me when you can, sweetie!', time: '3d ago' },
];

const Messages = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 border-r">
            {messages.map(message => (
              <Card key={message.id} className="mb-2">
                <CardContent className="p-2 flex items-center">
                  <Avatar className="h-10 w-10 mr-2">
                    <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${message.user}`} alt={message.user} />
                  </Avatar>
                  <div className="flex-grow">
                    <div className="font-semibold">{message.user}</div>
                    <div className="text-sm text-gray-500">{message.lastMessage}</div>
                  </div>
                  <div className="text-xs text-gray-400">{message.time}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="col-span-2">
            <div className="h-[400px] bg-gray-100 mb-4 p-4">
              {/* Chat messages would go here */}
            </div>
            <div className="flex gap-2">
              <Input placeholder="Type a message..." className="flex-grow" />
              <Button>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messages;