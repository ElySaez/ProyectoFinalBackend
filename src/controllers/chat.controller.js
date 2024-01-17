import chatValidator from "../validators/chat.validator.js"
import {logger} from "../utils/logger.js";

class chatController {

    async getMessages(req, res) {
        try {
          return await chatValidator.getMessages({})
        } catch (error) {
            req.logger.error(`Funcion getMessages en controlador: ${error.message}`)
            return {error: `Error con mensaje: ${error.message}`}
        }
    }

    async createMessage(message) {
        try {
            await chatValidator.createMessage(message)
        } catch (error) {
            logger.error(`Funcion createMessage en controlador: ${error.message}`)
            return {error: `Error: ${error.message}`}
        }
    }

}

export default new chatController()
