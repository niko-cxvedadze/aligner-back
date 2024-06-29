import { IsString, IsMongoId } from 'class-validator';

export class CreateBookmarkTopicBodyDto {
  @IsString({ message: 'Title must be a string' })
  title: string;
  @IsMongoId({ message: 'WorkspaceId must be a string' })
  workspaceId: string;
}

export type TCreateBookmarkTopicBody = InstanceType<
  typeof CreateBookmarkTopicBodyDto
>;
