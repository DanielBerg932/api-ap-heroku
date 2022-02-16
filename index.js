const express = require('express');
const app = express();
var cors = require('cors');
Access-Control-Allow-Origin: https://priceless-montalcini-251e9b.netlify.app/
      Access-Control-Allow-Credentials: true
      Access-Control-Allow-Methods: GET
      Access-Control-Allow-Headers: Content-Type

app.use(
    cors({
        credentials: true,
        origin: 'https://brave-boyd-6c3c10.netlify.app'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('I changed this API.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
