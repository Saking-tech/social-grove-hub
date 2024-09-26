import React from 'react';
import Layout from '../components/Layout';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const userProfile = {
  username: 'john_doe',
  fullName: 'John Doe',
  bio: 'Photography enthusiast | Travel lover | Coffee addict',
  posts: 42,
  followers: 1500,
  following: 500,
};

const userPosts = [
  { id: 1, image: 'https://picsum.photos/seed/post1/300/300' },
  { id: 2, image: 'https://picsum.photos/seed/post2/300/300' },
  { id: 3, image: 'https://picsum.photos/seed/post3/300/300' },
  { id: 4, image: 'https://picsum.photos/seed/post4/300/300' },
  { id: 5, image: 'https://picsum.photos/seed/post5/300/300' },
  { id: 6, image: 'https://picsum.photos/seed/post6/300/300' },
];

const Profile = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center mb-8">
          <Avatar className="h-32 w-32 mr-8">
            <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${userProfile.username}`} alt={userProfile.username} />
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold mb-2">{userProfile.username}</h1>
            <div className="flex space-x-4 mb-2">
              <span><strong>{userProfile.posts}</strong> posts</span>
              <span><strong>{userProfile.followers}</strong> followers</span>
              <span><strong>{userProfile.following}</strong> following</span>
            </div>
            <div className="mb-2">{userProfile.fullName}</div>
            <div>{userProfile.bio}</div>
          </div>
        </div>
        <Button className="w-full mb-8">Edit Profile</Button>
        <div className="grid grid-cols-3 gap-4">
          {userPosts.map(post => (
            <Card key={post.id}>
              <CardContent className="p-0">
                <img src={post.image} alt={`Post ${post.id}`} className="w-full h-40 object-cover" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;