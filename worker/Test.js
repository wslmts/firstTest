
var count = 0;
onconnect = function(event) {
    count += 1;
    var port = event.ports[0];
    port.postMessage('你是第' + count+"号连接-");
    port.onmessage = function(event) {
        port.postMessage('我是子进程发回的信息');
        console.log("in js file ",event.data)
    }
}
