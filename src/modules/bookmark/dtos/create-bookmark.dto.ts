import { Schema } from 'mongoose';
import { IsString, IsUrl, IsMongoId, IsOptional } from 'class-validator';

export class CreateBookmarkBodyDto {
  @IsString()
  title: string;

  @IsUrl()
  url: string;

  @IsOptional()
  @IsMongoId()
  topicId?: Schema.Types.ObjectId;

  @IsMongoId()
  workspaceId: Schema.Types.ObjectId;
}

export type TCreateBookmarkBody = InstanceType<typeof CreateBookmarkBodyDto>;
