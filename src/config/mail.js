export default { 
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
}

//Configurações do servidor smtp de email - utilizado o mailtrap.io (procurar sobre integração com Node.js)