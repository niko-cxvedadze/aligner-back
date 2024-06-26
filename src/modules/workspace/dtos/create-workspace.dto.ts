import { IsOptional, IsString } from 'class-validator';

export class CreateWorkspaceDto {
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsOptional()
  @IsString({ message: 'Color must be a string' })
  color: string;
}
