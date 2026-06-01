import User from "./User.js";
import Destino from "./Destino.js";
import Reserva from "./Reserva.js";

User.hasMany(Reserva);
Reserva.belongsTo(User);

Destino.hasMany(Reserva);
Reserva.belongsTo(Destino);

export {User, Destino, Reserva}