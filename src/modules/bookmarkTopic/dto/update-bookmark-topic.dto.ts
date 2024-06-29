import { IsOptional, IsString } from 'class-validator';

export class UpdateBookmarkTopicBodyDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  title?: string;
}

export type TUpdateBookmarkTopicBody = InstanceType<
  typeof UpdateBookmarkTopicBodyDto
>;
