import { connect } from "mongoose";

//Conexion a base de datos
export const startConnection = async ({ uri, database }) => {
  try {
    const db = await connect(uri, {
      dbName: database,
    });

    console.log(`Conectado a ${db.connection.name} database`);
  } catch (error) {
    console.log(error);
  }
};
