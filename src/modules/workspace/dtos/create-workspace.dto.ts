import { IsOptional, IsString } from 'class-validator';

export class CreateWorkspaceBodyDto {
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsOptional()
  @IsString({ message: 'Color must be a string' })
  color?: string;
}

export type TCreateWorkspaceBody = InstanceType<typeof CreateWorkspaceBodyDto>;
