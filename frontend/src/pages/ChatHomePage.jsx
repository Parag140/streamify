// src/pages/ChatHomePage.jsx
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { MessageSquare, PlusCircle } from "lucide-react";
import { getConversations } from "../lib/api";
import { formatDistanceToNow } from "date-fns";

const ChatHomePage = () => {
  const { data: conversations = [], isLoading } = useQuery({
    queryKey: ["conversations"],
    queryFn: getConversations,
    refetchInterval: 5000 // Refresh every 5 seconds
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Chats</h2>
          <Link to="/friends" className="btn btn-outline btn-sm">
            <PlusCircle className="mr-2 size-4" />
            New Chat
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : conversations.length === 0 ? (
          <div className="card bg-base-200 p-8 text-center">
            <MessageSquare className="mx-auto size-12 mb-4 opacity-50" />
            <h3 className="font-semibold text-lg mb-2">No conversations yet</h3>
            <p className="text-base-content opacity-70 mb-4">
              Start a new chat with your friends
            </p>
            <Link to="/friends" className="btn btn-primary">
              Find Friends
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {conversations.map((conversation) => (
              <Link
                key={conversation._id}
                to={`/stream-chat/${conversation._id}`} // Changed to use stream-chat
                className="card bg-base-200 hover:bg-base-300 transition-colors duration-200"
              >
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src={conversation.user.profilePic}
                          alt={conversation.user.fullName}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{conversation.user.fullName}</h3>
                        <span className="text-xs opacity-70">
                          {formatDistanceToNow(new Date(conversation.lastMessageTime), {
                            addSuffix: true,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm line-clamp-1 opacity-70">
                          {conversation.lastMessage}
                        </p>
                        {conversation.unreadCount > 0 && (
                          <span className="badge badge-primary badge-sm">
                            {conversation.unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHomePage;