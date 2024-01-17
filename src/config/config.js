import dotenv from 'dotenv';
import {Command} from "commander";

const program = new Command()

program
    .option("-m, --mode <mode>, 'Establish development or production mode'", 'development')

program.parse()

// Muestra en la consola el modo en el que se está ejecutando el programa
console.log("Ejecucion en modo " + program.opts().mode)

dotenv.config({
    path: program.opts().mode === 'development' ? './.env.development' : './.env.production'
})

export default {
    port: process.env.PORT,
    mongo_uri: process.env.MONGO_URI,
    db_name: process.env.DB_NAME,
    persistence: process.env.PERSISTENCE,
    twilio_account: process.env.TWILIO_ACCOUNT_SID,
    twilio_token: process.env.TWILIO_AUTH_TOKEN,
    twilio_number: process.env.TWILIO_SMS_NUMBER,
    mail_account: process.env.MAIL_ACCOUNT,
    mail_pass: process.env.MAIL_PASS,
    log_level: process.env.LOG_LEVEL,
    cookiekey: process.env.COOKIEKEY,
    cors_chat: process.env.CORS_CHAT
}


