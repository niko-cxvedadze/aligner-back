import { Request, Response, NextFunction } from 'express';
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

export function AuthMiddleware() {
  const clerkMiddleware = ClerkExpressRequireAuth();

  return (req: Request, res: Response, next: NextFunction) => {
    return clerkMiddleware(req, res, (error: any) => {
      if (error) {
        return next(error);
      }

      try {
        req.user = req.auth.sessionClaims?.user;
        req.userId = req.auth.sessionClaims?.user?.user_id;
      } catch (error) {
        return next(error);
      }

      next();
    });
  };
}
