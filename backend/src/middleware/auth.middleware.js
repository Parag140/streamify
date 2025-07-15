import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ msg: "unauthorised no token is provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ msg: "unauthorised invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ msg: "unauthorised user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in protect route middleware", error);
    return res.status(500).json({ msg: "server error" });
  }
};
