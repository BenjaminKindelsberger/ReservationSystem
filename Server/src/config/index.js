require("dotenv").config();

console.log(process.env.GOOGLE_API_KEY);

export default{
    port: process.env.PORT,
    databaseURL: process.env.DATABASEURL,
    mongoDBUser:{
        username: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD
    },
    google:{
        apiKey: process.env.GOOGLE_API_KEY
    }

}


