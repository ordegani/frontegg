const express = require('express');
const app = express();
app.use(express.json())
const sdk = require('api')('@frontegg/v1.0.3#5alnixil6dhd2zr');

sdk.auth('26486244-4f1e-4198-a770-5a8129316feb');
sdk.UsersControllerV1_setUserSuperuserMode({superUser: true}, {
  userId: 'fce0e822-dbb9-4e8a-a664-58904da97ef0'
})
  .then(res => console.log(res))
  .catch(err => console.error(err));

  const port = 6000;

  app.listen(port, () => console.log("connected to port #: " + port));