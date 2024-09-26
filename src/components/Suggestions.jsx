import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const suggestions = [
  { id: 1, user: 'sanjay_bisu', followedBy: 'stackkumar1721', image: 'https://api.dicebear.com/6.x/initials/svg?seed=sanjay_bisu' },
  { id: 2, user: 'lilesh120', followedBy: 'nidamkumar', image: 'https://api.dicebear.com/6.x/initials/svg?seed=lilesh120' },
  { id: 3, user: 'kunalkofficial', followedBy: 'samarth_singh', image: 'https://api.dicebear.com/6.x/initials/svg?seed=kunalkofficial' },
  { id: 4, user: 'hardikkrockstar', followedBy: 'kshitija.b', image: 'https://api.dicebear.com/6.x/initials/svg?seed=hardikkrockstar' },
  { id: 5, user: 'gourav_kr_s', followedBy: 'parthianda_', image: 'https://api.dicebear.com/6.x/initials/svg?seed=gourav_kr_s' },
];

const Suggestions = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-500">Suggested for you</span>
        <Button variant="link" size="sm">See All</Button>
      </div>
      {suggestions.map(suggestion => (
        <div key={suggestion.id} className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-3">
              <img src={suggestion.image} alt={suggestion.user} />
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{suggestion.user}</span>
              <span className="text-xs text-gray-500">Followed by {suggestion.followedBy}</span>
            </div>
          </div>
          <Button variant="link" size="sm" className="text-blue-500">Follow</Button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;