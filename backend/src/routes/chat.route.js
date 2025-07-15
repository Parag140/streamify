import express from 'express'
import { protectRoute } from '../middleware/auth.middleware.js';
import { getStreamToken, getConversations, getMessages } from '../controllers/chat.controller.js';

const chatRoutes = express.Router();

chatRoutes.get("/token",protectRoute,getStreamToken)
chatRoutes.get("/conversations", protectRoute, getConversations);
chatRoutes.get("/:id", protectRoute, getMessages);

export default chatRoutes;