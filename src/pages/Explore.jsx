import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const exploreItems = [
  { id: 1, user: 'nature_lover', image: 'https://picsum.photos/seed/nature/300/300' },
  { id: 2, user: 'urban_explorer', image: 'https://picsum.photos/seed/urban/300/300' },
  { id: 3, user: 'food_critic', image: 'https://picsum.photos/seed/food/300/300' },
  { id: 4, user: 'fashion_icon', image: 'https://picsum.photos/seed/fashion/300/300' },
  { id: 5, user: 'tech_geek', image: 'https://picsum.photos/seed/tech/300/300' },
  { id: 6, user: 'fitness_freak', image: 'https://picsum.photos/seed/fitness/300/300' },
];

const Explore = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Explore</h1>
        <div className="grid grid-cols-3 gap-4">
          {exploreItems.map(item => (
            <Card key={item.id}>
              <CardContent className="p-0">
                <img src={item.image} alt={item.user} className="w-full h-48 object-cover" />
                <div className="p-2 flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${item.user}`} alt={item.user} />
                  </Avatar>
                  <span className="text-sm font-semibold">{item.user}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Explore;