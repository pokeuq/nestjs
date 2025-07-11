import {
  registerDecorator,
  type ValidationArguments,
  type ValidationOptions,
} from 'class-validator';

export function StartWith(
  prefix: string,
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'startWith', // обычно совпадает с именем декоратора
      target: object.constructor, // так обычно пишут - это стандарт
      propertyName, // class-validator сам подставит нужное имя свойства
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && value.startsWith(prefix);
        },
        defaultMessage: (args: ValidationArguments) =>
          `Название должно начинаться с ${prefix} (default)`,
      },
    });
  };
}
