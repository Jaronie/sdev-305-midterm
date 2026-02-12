//import express
import express from 'express';

//create instance for express
const app = express();


//define port number 3001
const PORT = 3001;

//enable static serving for public
app.use(express.static('public'));


// default route
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// thank you route after form submission
app.get('/thank-you', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});


// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});