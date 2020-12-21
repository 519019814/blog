myButton.addEventListener('click', function(){
    let request = new XMLHttpRequest()  //创建Ajax对象
    request.onreadystatechange = () => {
        //当readyState属性发生变化时，调用此事件
        if(request.readyState === 4){
        //当readyState为4时，表示响应成功，开始执行
            console.log('success');
            if(request.status >= 200){
                console.log('requrest status大于或等于两百，请求成功')
                let string = request.responseText
                let object = window.JSON.parse(string)
                console.log(object);
            }
            else{
                console.log('fail');
            }
        }
    }
    request.open('GET','/xxx')
    //初始化一个请求，参数一表示HTTP方法，参数二表示要向其发送请求的URL

    request.send()
    //发送请求
})
