import React from 'react';
import { Avatar } from "@/components/ui/avatar";

const stories = [
  { id: 1, user: 'desirvestin', image: 'https://api.dicebear.com/6.x/initials/svg?seed=desirvestin' },
  { id: 2, user: '_tanya_', image: 'https://api.dicebear.com/6.x/initials/svg?seed=_tanya_' },
  { id: 3, user: 'frontendch...', image: 'https://api.dicebear.com/6.x/initials/svg?seed=frontendch' },
  { id: 4, user: 'parthianda_', image: 'https://api.dicebear.com/6.x/initials/svg?seed=parthianda_' },
  { id: 5, user: 'kamal.chha...', image: 'https://api.dicebear.com/6.x/initials/svg?seed=kamal.chha' },
  { id: 6, user: 'ogata.tanvir', image: 'https://api.dicebear.com/6.x/initials/svg?seed=ogata.tanvir' },
  { id: 7, user: 'uniquestatis...', image: 'https://api.dicebear.com/6.x/initials/svg?seed=uniquestatis' },
  { id: 8, user: 'aruwho', image: 'https://api.dicebear.com/6.x/initials/svg?seed=aruwho' },
];

const Stories = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4 mb-4">
      {stories.map(story => (
        <div key={story.id} className="flex flex-col items-center">
          <Avatar className="w-16 h-16 ring-2 ring-pink-500 ring-offset-2">
            <img src={story.image} alt={story.user} className="rounded-full" />
          </Avatar>
          <span className="text-xs mt-1 truncate w-16 text-center">{story.user}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;