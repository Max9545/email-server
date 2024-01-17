const express = require('express');
// const { main } = require('.');
console.log('Hello THere')
const app = express();
const port = process.env.PORT || 3001;
const yargs = require('yargs');

require('dotenv').config();
const cors = require('cors'); // Import the cors middleware
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());
 
app.post('/sendMail',cors(corsOptions), async (req, res) => {
  console.log('body', req.body)
  // main()
  // try {
    const fetch = require('./fetch');
    const auth = require('./auth');
    const authResponse = await auth.getToken(auth.tokenRequest);
    const users = await fetch.callApi(auth.apiConfig.uri, authResponse.accessToken, req.body.email, req.body.message);
    console.log(users)
// } catch (error) {
//     console.log('ERROR', error);
//   }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

