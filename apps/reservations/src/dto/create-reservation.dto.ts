import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateReservationDto {
  @IsOptional()
  userId?: string;

  @IsOptional()
  placeId?: string;

  @IsOptional()
  invoiceId?: string;

  @IsOptional()
  startDate?: string;

  @IsOptional()
  endDate?: string;
}
