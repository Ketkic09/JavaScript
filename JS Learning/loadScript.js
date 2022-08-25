function loadScript(src){
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}
function displayThis(){
    console.log("This function should execute after the script loads but If there’s any code below loadScript(…), it doesn’t wait until the script loading finishes.");
}

loadScript('script2.js');
displayThis();