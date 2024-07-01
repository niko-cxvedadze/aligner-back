import { IsNumberString, IsOptional } from 'class-validator';

export class GetTasksQueryDto {
  @IsOptional()
  @IsNumberString()
  skip?: number;

  @IsOptional()
  @IsNumberString()
  limit?: number;
}

export type TGetTasksQuery = InstanceType<typeof GetTasksQueryDto>;
