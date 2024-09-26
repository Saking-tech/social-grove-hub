import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThumbsUp, MessageCircle, Share2, Send } from 'lucide-react';

// Mock function to fetch posts
const fetchPosts = async () => {
  // In a real app, this would be an API call
  return [
    { id: 1, user: 'John Doe', content: 'Just had an amazing day at the beach!', likes: 15, comments: 3 },
    { id: 2, user: 'Jane Smith', content: 'Check out my new artwork!', likes: 32, comments: 7 },
    { id: 3, user: 'Bob Johnson', content: 'Who else is excited for the weekend?', likes: 8, comments: 1 },
  ];
};

const HomePage = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <Input placeholder="What's on your mind?" className="mb-4" />
          <Button className="w-full">Post</Button>
        </CardContent>
      </Card>

      {posts.map((post) => (
        <Card key={post.id} className="mb-6">
          <CardHeader>
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.user}`} />
                <AvatarFallback>{post.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle>{post.user}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{post.content}</p>
            <div className="flex justify-between items-center">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;