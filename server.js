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
    var pathNoQuery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var method = request.method
})

log('得到HTTP路径\n' + path)
log('查询到字符串为\n'+query)
log('不含查询字符串的路径为\n'+pathNoQuery)

server.listen(port)
log('监听' + port +'成功\n 打开 http://localhost:' + port)