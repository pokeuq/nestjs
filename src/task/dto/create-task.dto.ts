import {
  IsNotEmpty,
  IsString,
  Length,
  IsOptional,
  IsPositive,
  IsInt,
  IsArray,
  IsEnum,
} from 'class-validator';
import { StartWith } from '../decorators/start-with.decorator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  @StartWith('Task:', {
    message: 'Название должно начинаться с Task: (custom)',
  })
  title: string;

  @IsString({ message: 'Описание должно быть строкой' })
  @IsOptional()
  description: string;

  @IsInt({ message: 'Приоритет должен быть целым числом' })
  @IsPositive({ message: 'Приоритет должен быть положительным числом' })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'Теги должны быть массивом строк' })
  @IsEnum(TaskTag, { each: true, message: 'Недопустимое значение тега' })
  @IsOptional()
  tags: TaskTag[];
}
