import React from 'react';
import { Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-300 p-5 flex flex-col">
        <h1 className="text-2xl font-semibold mb-8">Instagram</h1>
        <nav className="flex-1">
          <Link to="/" className="flex items-center mb-4 text-sm font-medium">
            <Home className="mr-4" size={24} />
            Home
          </Link>
          <Link to="/search" className="flex items-center mb-4 text-sm font-medium">
            <Search className="mr-4" size={24} />
            Search
          </Link>
          <Link to="/explore" className="flex items-center mb-4 text-sm font-medium">
            <Compass className="mr-4" size={24} />
            Explore
          </Link>
          <Link to="/reels" className="flex items-center mb-4 text-sm font-medium">
            <Film className="mr-4" size={24} />
            Reels
          </Link>
          <Link to="/messages" className="flex items-center mb-4 text-sm font-medium">
            <MessageCircle className="mr-4" size={24} />
            Messages
          </Link>
          <Link to="/notifications" className="flex items-center mb-4 text-sm font-medium">
            <Heart className="mr-4" size={24} />
            Notifications
          </Link>
          <Link to="/create" className="flex items-center mb-4 text-sm font-medium">
            <PlusSquare className="mr-4" size={24} />
            Create
          </Link>
          <Link to="/profile" className="flex items-center mb-4 text-sm font-medium">
            <User className="mr-4" size={24} />
            Profile
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;