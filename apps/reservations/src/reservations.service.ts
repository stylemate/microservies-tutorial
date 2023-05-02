import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { EntityManager, wrap } from '@mikro-orm/core';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationsService {
  constructor(private readonly em: EntityManager) {}

  async create(createReservationDto: CreateReservationDto) {
    const reservation = this.em.create(Reservation, createReservationDto);
    await this.em.persistAndFlush(reservation);
    return reservation;
  }

  async findAll() {
    return await this.em.find(Reservation, {});
  }

  async findOne(reservationId: string) {
    return await this.em.findOne(Reservation, { reservationId });
  }

  async update(
    reservationId: string,
    updateReservationDto: UpdateReservationDto,
  ) {
    // There seems to be multiple ways to update values.
    // 1. nativeUpdate()
    // 2. wrapper assign()
    // 3. class-based wrapper assign()
    //
    // Since I have dtos for validations, I should use class based assign()

    // // nativeUpdate doesn't trigger life cycle hook, not really managed by EM. No need to flush()
    // // how to return update part then?
    // return await this.em.nativeUpdate(
    //   Reservation,
    //   { reservationId },
    //   updateReservationDto,
    // );

    // // Wrapper assign()
    // const reservation = await this.em.getReference(Reservation, reservationId);
    // wrap(reservation).assign(updateReservationDto);
    // await this.em.flush();
    // return reservation;

    const reservation = await this.em.getReference(Reservation, reservationId);
    this.em.assign(reservation, updateReservationDto);
    await this.em.flush();
    return reservation;
  }

  async remove(reservationId: string) {
    const reservation = await this.em.getReference(Reservation, reservationId);
    return await this.em.removeAndFlush(reservation);
  }
}
