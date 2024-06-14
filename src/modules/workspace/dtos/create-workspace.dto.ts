import { IsString } from 'class-validator';

export class CreateWorkspaceDto {
  @IsString({ message: 'Name must be a string' })
  name: string;
}
