const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const { method } = req

    switch(method) {
        case 'GET':
            getHandler(req, res)
            break;
    }
})

server.listen(3000, 'localhost', () => {

})

const getHandler = (req, res) => {
    const pathname = req.url
    let path = './pages/'
    console.log(pathname)
    switch(pathname) {
        case '/':
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html'
            break;
        case '/contact':
            path += 'contact.html'
            break;
        default:
            path += '404.html'
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
}