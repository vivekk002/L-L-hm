import { NextFunction, Request, Response } from "express";
import User from "../models/user";

export const verifyRole = (allowedRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.userId) {
        return res
          .status(401)
          .json({ message: "Unauthorized - No User ID found" });
      }

      const user = await User.findById(req.userId);

      if (!user) {
        return res
          .status(401)
          .json({ message: "Unauthorized - User not found" });
      }

      if (!user.role || !allowedRoles.includes(user.role)) {
        return res
          .status(403)
          .json({ message: "Forbidden - Insufficient permissions" });
      }

      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
};
