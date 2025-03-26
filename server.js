const app = require('./app');
const connectDb = require('./Config/db');

connectDb();

app.listen(3000, () => {
    console.log("Server is ruuning on port 3000!");
})