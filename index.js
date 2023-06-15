const http = require('http')

const server = http.createServer((req, res) => {
    const { method } = req

    switch(method) {
        case 'GET':
            getHandler()
    }
})

server.listen(3000, () => {

})

const getHandler = (req, res) => {
    const pathname = req.url
    console.log(pathname)
}