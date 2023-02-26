const http = require("http"),
route = require("./routes"),
utils = require("./utils"),
route = require('./routes')

const PORT = process.env.PORT || 3000;

// user routes : register , user-detail - user-list -user books


// book routes : add book , lend book , book list, book detail


const server = http.createServer(route.handler)
server.listen(PORT, ()=>{
    console.log(`run server on port ${PORT}`);
})