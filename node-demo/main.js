myButton.addEventListener('click', function(){
    // let request = new XMLHttpRequest()  //创建Ajax对象
    // request.onreadystatechange = () => {
    //     //当readyState属性发生变化时，调用此事件
    //     if(request.readyState === 4){
    //     //当readyState为4时，表示响应成功，开始执行
    //         console.log(request);
    //         if(request.status >= 200){
    //             console.log('requrest status大于或等于两百，请求成功')
    //             let string = request.responseText
    //             let object = window.JSON.parse(string)
    //             console.log(object);
    //         }
    //         else{
    //             console.log('fail');
    //         }
    //     }
    // }
    // request.open('post','/xxx')
    // //初始化一个请求，参数一表示HTTP方法，参数二表示要向其发送请求的URL
    // request.setRequestHeader('cnm','good')
    // request.setRequestHeader('Content-Type','x-www-form-urlencoded')
    // request.send('我要传数据数据数据')
    //发送请求
    jq(
        '/xxx',
        'POST',
        {'cnm':'good','Content-Type':'x-www-form-urlencoded'},
        '我要发送的数据seends',
        (x) => { console.log("这个是成功函数" + x)},
        () => {console.log('这个是失败函数');}
    )
})


window.jq = (url, method,headerObj,sends,successFn,failFn) => {
        let request = new XMLHttpRequest()  //创建Ajax对象
        request.open(method,url)
        //初始化一个请求，参数一表示HTTP方法，参数二表示要向其发送请求的URL
        for(let key in headerObj){
            request.setRequestHeader(key,headerObj[key])
        }
        request.send(sends)
        //发送请求
        request.onreadystatechange = () => {
            //当readyState属性发生变化时，调用此事件
            if(request.readyState === 4){
            //当readyState为4时，表示响应成功，开始执行
                console.log(request);
                if (request.status >= 200) {
                    successFn(request)
                    let string = request.responseText
                    let object = window.JSON.parse(string)
                    console.log(object);
                }
                else{
                    failFn
                }
            }
        }
}

