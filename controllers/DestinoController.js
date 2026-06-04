class DestinoController {
  constructor(DestinoService) {
    this.destinoService = destinoService
  }

  getDestinoById = async (req, res) => {
    try {
      const { id } = req.params
      const destino = await this.destinoService.getDestinoById(id)
      res.status(200).send({ success: true, message: destino })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }

  createDestino = async (req, res) => {
    try {
      const {
        nombre,
        pais,
        descripcion,
        imagen,
        precio,
        cupoMaximo,
        fechaPartida,
        duracion,
      } = req.body

      const destino = {
        nombre,
        pais,
        descripcion,
        imagen,
        precio,
        cupoMaximo,
        fechaPartida,
        duracion,
      }
      const destinoCreated = await this.destinoService.createDestino(destino)
      res.status(200).send({ success: true, message: destinoCreated })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }

  updateDestino = async (req, res) => {
    try {
      const {
        nombre,
        pais,
        descripcion,
        imagen,
        precio,
        cupoMaximo,
        fechaPartida,
        duracion,
      } = req.body

      const destino = {
        nombre,
        pais,
        descripcion,
        imagen,
        precio,
        cupoMaximo,
        fechaPartida,
        duracion,
      }

      const destinoUpdated = await this.destinoService.updateDestino(destino)
      res.status(200).send({ success: true, message: destinoUpdated })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }

  deleteDestino = async (req, res) => {
    try {
      const { id } = req.params
      const destino = await this.destinoService.deleteDestino(id)
      res.status(200).send({ success: true, message: destino })
    } catch (error) {
      res.status(400).send({ success: false, message: error.message })
    }
  }
}

export default DestinoController
