import { IsString } from 'class-validator';

export class CreateTaskBodyDto {
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsString({ message: 'Status must be a string' })
  status: string;

  @IsString({ message: 'Priority must be a string' })
  priority: string;

  @IsString({ message: 'Description must be a string' })
  description: string;

  @IsString({ message: 'WorkspaceId must be a string' })
  workspaceId: string;
}

export type TCreateTaskBody = InstanceType<typeof CreateTaskBodyDto>;
