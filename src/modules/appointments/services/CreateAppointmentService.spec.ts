import 'reflect-metadata';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '12345678',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12345678');
  });

  // it('should not be able to create two appointments on the same date and time', () => {
  //   expect(1 + 3).toBe(4);
  // });
});
