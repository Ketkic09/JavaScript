function loadWithCallBack(src,callBack){
    let script = document.createElement('script');
    script.src = src;
    script.onload = ()=> callBack(script);
    document.head.append(script);
}

function callFunction(){
    console.log("this function will be called by the callBack after the script loads");
}

loadWithCallBack('script2.js',()=>{callFunction();});