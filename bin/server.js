const express = require('express');
// const { main } = require('.');

const app = express();
const port = process.env.PORT || 3001;
const yargs = require('yargs');

require('dotenv').config();
const cors = require('cors'); // Import the cors middleware
app.use(cors());

app.use(express.json());
 
app.post('/sendMail', async (req, res) => {
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

