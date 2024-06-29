import { IsMongoId, IsOptional } from 'class-validator';

export class GetBookmarksQueryDto {
  @IsMongoId()
  workspaceId: string;

  @IsOptional()
  @IsMongoId()
  topicId?: string;
}

export type TGetBookmarksQuery = InstanceType<typeof GetBookmarksQueryDto>;
