import { IsOptional, IsString } from 'class-validator';

export class UpdateWorkspaceBodyDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  color?: string;
}

export type TUpdateWorkspaceBodyDto = InstanceType<
  typeof UpdateWorkspaceBodyDto
>;
