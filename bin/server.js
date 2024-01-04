const express = require('express');
// const { main } = require('.');

const app = express();
const port = process.env.PORT || 3001;
const yargs = require('yargs');

require('dotenv').config();

app.use(express.json());

app.get('/getUsers', async (req, res) => {
  console.log('O hi')
  // main()
  // try {
    console.log(req)
    const fetch = require('./fetch');
    const auth = require('./auth');
    const authResponse = await auth.getToken(auth.tokenRequest);
    const users = await fetch.callApi(auth.apiConfig.uri, authResponse.accessToken);
    console.log(users, authResponse);
// } catch (error) {
//     console.log('ERROR', error);
//   }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

