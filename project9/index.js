const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.post('/9a', function (req, res) {
    if (req.body.operator === '+') {
        res.json({ result: (parseInt(req.body.num1)+parseInt(req.body.num2)) });
    } else if (req.body.operator === '-') {
        res.json({ result: (parseInt(req.body.num1)-parseInt(req.body.num2)) });
    } else if (req.body.operator === '*') {
        res.json({ result: (parseInt(req.body.num1)*parseInt(req.body.num2)) });
    } else {
        res.json({ result: (parseInt(req.body.num1)/parseInt(req.body.num2)) });
    }
})

app.get("/9b", function(req, res) {
    res.status(200);
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:`+port+"/9b");
})