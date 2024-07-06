import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class GetTasksQueryDto {
  @IsOptional()
  @IsNumberString()
  skip?: number;

  @IsOptional()
  @IsNumberString()
  limit?: number;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  priority?: string;
}

export type TGetTasksQuery = InstanceType<typeof GetTasksQueryDto>;
