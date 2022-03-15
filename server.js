const express = require('express')
const app = express();
const port = process.env.PORT || 5000
const cors = require('cors')

//enables cross origin requests
app.use(cors())

//allows us to understand json
app.use(express.json());

//allows us to understand urlencoded payloads
app.use(express.urlencoded({ extended: true }));

app.post('/', (request, response) => {
    console.log(request.body)
    response.json(request.body)
})

app.listen(port, ()=> {
    console.log(`Server listening at ${port}`)
})