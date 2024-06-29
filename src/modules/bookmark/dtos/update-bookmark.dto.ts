import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class UpdateBookmarkBodyDto {
  @IsMongoId()
  bookmarkId: string;

  @IsMongoId()
  topicId?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  url?: string;
}

export type TUpdateBookmarkBody = InstanceType<typeof UpdateBookmarkBodyDto>;
