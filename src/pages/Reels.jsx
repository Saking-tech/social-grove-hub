import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Heart, MessageCircle, Send } from 'lucide-react';

const reels = [
  { id: 1, user: 'dance_pro', video: 'https://example.com/video1.mp4', likes: 1500, comments: 200 },
  { id: 2, user: 'comedy_central', video: 'https://example.com/video2.mp4', likes: 2300, comments: 350 },
  { id: 3, user: 'travel_vlogger', video: 'https://example.com/video3.mp4', likes: 1800, comments: 180 },
];

const Reels = () => {
  return (
    <Layout>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Reels</h1>
        {reels.map(reel => (
          <Card key={reel.id} className="mb-4">
            <CardContent className="p-0">
              <video src={reel.video} className="w-full h-[600px] object-cover" controls />
              <div className="p-2">
                <div className="flex items-center mb-2">
                  <Avatar className="h-8 w-8 mr-2">
                    <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${reel.user}`} alt={reel.user} />
                  </Avatar>
                  <span className="text-sm font-semibold">{reel.user}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <button className="flex items-center">
                      <Heart className="h-6 w-6 mr-1" />
                      {reel.likes}
                    </button>
                    <button className="flex items-center">
                      <MessageCircle className="h-6 w-6 mr-1" />
                      {reel.comments}
                    </button>
                  </div>
                  <button>
                    <Send className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Reels;