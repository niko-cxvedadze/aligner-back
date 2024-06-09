declare namespace Express {
  export interface Request {
    user?: import('./src/utils/jwt-tokens').TAccessTokenPayload;
  }
  export interface Response {
    user?: import('./src/utils/jwt-tokens').TAccessTokenPayload;
  }
}
