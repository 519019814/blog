let http = require('http')
let fs = require('fs')
let url = require('url')
let port = process.argv[2]
let log = console.log

if(!port){
    console.log('请指定端口号')
    process.exit(1)
}

let server = http.createServer(function(request, response){
    let parsedUrl = url.parse(request.url,true)
    let path = request.url
    let query = ''
    if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?'))}
    let pathNoQuery = parsedUrl.pathname
    let queryObject = parsedUrl.query
    let method = request.method
})

log('得到HTTP路径\n' + path)
log('查询到字符串为\n'+query)
log('不含查询字符串的路径为\n'+pathNoQuery)

server.listen(port)
log('监听' + port +'成功\n 打开 http://localhost:' + port)