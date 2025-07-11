import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'название задачи должно быть строкой' })
  @IsNotEmpty({ message: 'название задачи не может быть пустым' })
  @Length(3, 20, { message: 'название задачи должно быть от 3 до 20 символов' })
  title: string;

  @IsBoolean({ message: 'Статус должен быть только булевым значением' })
  isCompleted: boolean;
}
