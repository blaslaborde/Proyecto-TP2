class ReservaService {
  constructor(reserva) {
    this.reserva = reserva;
  }
  getReservaById = async (numeroDeReserva) => {
    const reserva = await this.reserva.findOne({
      where: { numeroDeReserva },
      attributes: ["numeroDeReserva", "fechaInicio", "fechaFin", "cantPersonas", "importeTotal"],
    });
    return reserva;
  };
  createReserva = async ({ numeroDeReserva ,fechaInicio, fechaFin, cantPersonas, importeTotal }) => {
    const reserva = await this.reserva.create({
      numeroDeReserva,
      fechaInicio,
      fechaFin,
      cantPersonas,
      importeTotal
    });
    return reserva;
  };
  updateReserva = async ({fechaInicio, fechaFin, cantPersonas, importeTotal }) => {
    const reserva = await this.reserva.update(
      {fechaInicio, fechaFin, cantPersonas, importeTotal },
      {
        where: { numeroDeReserva },
      },
    );
    return reserva;
  };
  deleteReserva = async (numeroDeReserva) => {
    return await this.reserva.destroy({ where: { numeroDeReserva } });
  };
}

export default ReservaService;