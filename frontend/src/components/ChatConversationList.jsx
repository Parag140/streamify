// src/components/ChatConversationList.jsx
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { MessageSquare } from "lucide-react";
import { getConversations } from "../lib/api";
import { formatDistanceToNow } from "date-fns";

const ChatConversationList = () => {
  const { data: conversations = [], isLoading } = useQuery({
    queryKey: ["conversations"],
    queryFn: getConversations,
    refetchInterval: 5000 // Refresh every 5 seconds
  });

  if (isLoading) return <div className="flex justify-center p-4"><span className="loading loading-spinner" /></div>;

  return (
    <div className="space-y-2">
      {conversations.length === 0 ? (
        <div className="text-center p-4 text-gray-500">
          No conversations yet
        </div>
      ) : (
        conversations.map((conversation) => (
          <Link
            key={conversation._id}
            to={`/chat/${conversation._id}`}
            className="flex items-center p-3 hover:bg-base-200 rounded-lg transition-colors"
          >
            <div className="avatar mr-3">
              <div className="w-12 rounded-full">
                <img src={conversation.user.profilePic} alt={conversation.user.fullName} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold">{conversation.user.fullName}</h3>
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(conversation.lastMessageTime))}
                </span>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500 truncate max-w-[180px]">
                  {conversation.lastMessage}
                </p>
                {conversation.unreadCount > 0 && (
                  <span className="badge badge-primary badge-xs">
                    {conversation.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default ChatConversationList;