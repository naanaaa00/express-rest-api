const express = require('express');

const app = express();

const PORT = 4001;

const routes = require('./routes/routes');

app.use(express.json());

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});