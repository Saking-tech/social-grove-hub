import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const notifications = [
  { id: 1, user: 'new_follower', action: 'started following you', time: '2h ago' },
  { id: 2, user: 'friend_1', action: 'liked your post', time: '4h ago' },
  { id: 3, user: 'friend_2', action: 'commented on your photo', time: '1d ago' },
  { id: 4, user: 'group_admin', action: 'added you to a group', time: '2d ago' },
];

const Notifications = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Notifications</h1>
        {notifications.map(notification => (
          <Card key={notification.id} className="mb-2">
            <CardContent className="p-2 flex items-center">
              <Avatar className="h-10 w-10 mr-2">
                <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${notification.user}`} alt={notification.user} />
              </Avatar>
              <div className="flex-grow">
                <span className="font-semibold">{notification.user}</span> {notification.action}
                <div className="text-xs text-gray-400">{notification.time}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Notifications;