import { IsMongoId, IsOptional } from 'class-validator';

export class GetBookmarksDto {
  @IsMongoId()
  workspaceId: string;

  @IsOptional()
  @IsMongoId()
  topicId?: string;
}

export type TGetBookmarksQuery = InstanceType<typeof GetBookmarksDto>;
