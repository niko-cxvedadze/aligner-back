declare namespace Express {
  export interface Request {
    auth?: any;
    user?: any;
    userId?: string;
  }

  export interface Response {
    user?: any;
    auth?: any;
    userId?: string;
  }
}
