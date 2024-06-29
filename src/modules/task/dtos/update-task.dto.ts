import { IsString, IsOptional } from 'class-validator';

export class UpdateTaskBodyDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  name?: string;

  @IsOptional()
  @IsString({ message: 'Status must be a string' })
  status?: string;

  @IsOptional()
  @IsString({ message: 'Priority must be a string' })
  priority?: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @IsOptional()
  @IsString({ message: 'WorkspaceId must be a string' })
  workspaceId?: string;
}

export type TUpdateTaskBody = InstanceType<typeof UpdateTaskBodyDto>;
