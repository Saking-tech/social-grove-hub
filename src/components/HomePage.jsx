import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Stories from './Stories';
import Post from './Post';
import Suggestions from './Suggestions';

const fetchPosts = async () => {
  // This would be an API call in a real app
  return [
    { id: 1, user: 'montreal4palestine', content: 'Montreal4Palestine condamne avec la plus grande fermeté...', likes: 1496, comments: 29, timeAgo: '2d' },
    { id: 2, user: 'travel_enthusiast', content: 'Just landed in Bali! Paradise found. 🌴☀️ #TravelDiaries', likes: 2103, comments: 87, timeAgo: '5h' },
    { id: 3, user: 'foodie_adventures', content: 'Trying out this new ramen place downtown. The broth is to die for! 🍜😋 #FoodieLife', likes: 1872, comments: 56, timeAgo: '1d' },
    { id: 4, user: 'fitness_guru', content: 'Morning workout complete! Remember, consistency is key. 💪 #FitnessMotivation', likes: 3201, comments: 112, timeAgo: '3h' },
    { id: 5, user: 'tech_insider', content: 'Breaking: New AI breakthrough could revolutionize healthcare. Stay tuned for more details! 🤖🏥 #TechNews', likes: 4506, comments: 203, timeAgo: '1h' },
    { id: 6, user: 'art_lover', content: 'Just finished my latest painting. What do you think? 🎨 #ArtisticExpression', likes: 982, comments: 45, timeAgo: '4h' },
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