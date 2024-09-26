import { HomeIcon, Search, Compass, Film, MessageCircle, Heart, PlusSquare, User } from "lucide-react";
import Index from "./pages/Index.jsx";
import SearchPage from "./pages/Search.jsx";
import Explore from "./pages/Explore.jsx";
import Reels from "./pages/Reels.jsx";
import Messages from "./pages/Messages.jsx";
import Notifications from "./pages/Notifications.jsx";
import Create from "./pages/Create.jsx";
import Profile from "./pages/Profile.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Search",
    to: "/search",
    icon: <Search className="h-4 w-4" />,
    page: <SearchPage />,
  },
  {
    title: "Explore",
    to: "/explore",
    icon: <Compass className="h-4 w-4" />,
    page: <Explore />,
  },
  {
    title: "Reels",
    to: "/reels",
    icon: <Film className="h-4 w-4" />,
    page: <Reels />,
  },
  {
    title: "Messages",
    to: "/messages",
    icon: <MessageCircle className="h-4 w-4" />,
    page: <Messages />,
  },
  {
    title: "Notifications",
    to: "/notifications",
    icon: <Heart className="h-4 w-4" />,
    page: <Notifications />,
  },
  {
    title: "Create",
    to: "/create",
    icon: <PlusSquare className="h-4 w-4" />,
    page: <Create />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <Profile />,
  },
];