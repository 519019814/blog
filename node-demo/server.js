var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]
var log = console.log

if(!port){
    console.log('请指定端口号')
    process.exit(1)
}

var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url,true)
    var path = request.url
    var query = ''
    if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?'))}
    let pathNoQuery = parsedUrl.pathname
    let queryObject = parsedUrl.query
    let method = request.method

})


server.listen(8888)
log('监听' + port +'成功\n 打开 http://localhost:' + port)
