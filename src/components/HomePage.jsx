import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Stories from './Stories';
import Post from './Post';
import Suggestions from './Suggestions';

const fetchPosts = async () => {
  // This would be an API call in a real app
  return [
    { id: 1, user: 'montreal4palestine', content: 'Montreal4Palestine condamne avec la plus grande fermeté...', likes: 1496, comments: 29, timeAgo: '2d' },
    // Add more mock posts here
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
    <div className="flex">
      <div className="flex-1 max-w-2xl mx-auto p-4">
        <Stories />
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className="w-80 p-4">
        <Suggestions />
      </div>
    </div>
  );
};

export default HomePage;