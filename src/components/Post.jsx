import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const Post = ({ post }) => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center">
        <Avatar className="h-8 w-8 mr-2">
          <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.user}`} alt={post.user} />
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold">{post.user}</span>
          <span className="text-xs text-gray-500">{post.timeAgo}</span>
        </div>
      </CardHeader>
      <CardContent>
        <img src={`https://picsum.photos/seed/${post.id}/600/400`} alt="Post content" className="w-full" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Heart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Send className="h-6 w-6" />
            </Button>
          </div>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-6 w-6" />
          </Button>
        </div>
        <p className="font-semibold mt-2">{post.likes} likes</p>
        <p className="mt-2">
          <span className="font-semibold">{post.user}</span> {post.content}
        </p>
        <p className="text-sm text-gray-500 mt-2">View all {post.comments} comments</p>
      </CardContent>
      <CardFooter>
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </CardFooter>
    </Card>
  );
};

export default Post;