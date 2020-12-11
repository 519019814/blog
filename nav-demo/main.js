// 初始化数据
let hashA = init()
let keyboards = hashA.keyboards
let hash = hashA.hash

//创建键盘
createKeyboards(keyboards,hash)

//监听事件
document.onkeypress = function(event){
    let key = event.key
    let website = hash[key]
    if(website){
        window.open('http://'+website, '_blank')
    }else{
        console.log('未设置网址')
    }
}


function createKeyboards(keyboards,hash){   
    for(let i = 0; i<keyboards.length;i++){
        let divs = tag('div')
    
        let keyboardAll = document.getElementById('keyboardAll')
        keyboardAll.appendChild(divs)
        
        let row = keyboards[i]
        for(let j = 0; j < row.length;j++){
            let divSon = tag('kbd', {"className":"key"})    
            let letter = tag('span', {"textContent": row[j]})
            let edits = tag('button',{"textContent" : "Edit","id": row[j]})
            let images = createImg(hash[edits.id])
            console.log(hash[edits.id])
    
            divs.appendChild(divSon)
            divSon.appendChild(letter)
            divSon.appendChild(images)
            divSon.appendChild(edits)
            
            edits.onclick = function (event){
                let userdata = prompt('输入要更改的网址\n例：qq.com')
                let x = this.id
                hash[x] = userdata
                this.previousSibling.src = 'http://' + userdata + '/favicon.ico'
                localStorage.setItem('zzz', JSON.stringify(hash))
                this.previousSibling.onerror = function() {
                    this.src = '/weibo.ico'
                }
            }
    
        }
    }
}

function init(){
    let keyboards = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
    ]
    let hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': 'fanyi.baidu.com',
        'r': 'lol.qq.com',
        't': 'qq.com',
        'y': 'weibo.com',
        'u': 'qq.com',
        'i': 'weibo.com',
        'o': 'qq.com',
        'p': 'weibo.com',
        'a': 'qq.com',
        's': 'weibo.com',
        'd': 'qq.com',
        'm': 'weibo.com',
        'length':'14'
    }
    let hashInlocalStorge = JSON.parse(localStorage.getItem('zzz') || null)
    if(hashInlocalStorge){
        hash = hashInlocalStorge
    }
    return {
        keyboards:keyboards,
        hash:hash
    }
}

function tag(tagName,attributes){
    let ele = document.createElement(tagName)
    for( let key in attributes){
        ele[key] = attributes[key]
    }
    return ele
}
function createImg(domain){
    let images = tag('img')
    if(domain){
        images.src = 'http://' + domain + '/favicon.ico'
    }else{
        images.src = '/weibo.ico'
    }
    images.onerror = function(xxx) {
        xxx.target.src = '/weibo.ico'
    }
    return images
}
