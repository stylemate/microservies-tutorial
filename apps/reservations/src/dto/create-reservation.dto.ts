import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateReservationDto {
  @IsOptional()
  userId?: string;

  @IsOptional()
  placeId?: string;

  @IsOptional()
  invoiceId?: string;

  @IsDate()
  @IsOptional()
  // use class transformer to transform incoming string with Date constructor
  @Type(() => Date)
  startDate?: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  endDate?: Date;
}
