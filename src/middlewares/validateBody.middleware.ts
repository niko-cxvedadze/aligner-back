import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Request, Response, NextFunction } from 'express';

export function validateBody<T>(
  type: new () => T,
): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToClass(type, req.body);
    validate(dto as object).then((errors) => {
      if (errors.length > 0) {
        const validationErrors = errors.map((error: any) =>
          Object.values(error.constraints),
        );
        res.status(400).json({ errors: validationErrors });
      } else {
        req.body = dto;
        next();
      }
    });
  };
}

export function validateQS<T>(
  type: new () => T,
): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToClass(type, req.query);
    validate(dto as object).then((errors) => {
      if (errors.length > 0) {
        const validationErrors = errors.map((error: any) =>
          Object.values(error.constraints),
        );
        res.status(400).json({ errors: validationErrors });
      } else {
        // @ts-ignore
        req.query = dto;
        next();
      }
    });
  };
}

export function validateParams<T>(
  type: new () => T,
): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToClass(type, req.params);
    validate(dto as object).then((errors) => {
      if (errors.length > 0) {
        const validationErrors = errors.map((error: any) =>
          Object.values(error.constraints),
        );
        res.status(400).json({ errors: validationErrors });
      } else {
        // @ts-ignore
        req.params = dto;
        next();
      }
    });
  };
}
