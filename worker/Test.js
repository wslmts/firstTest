
var count = 0;
onconnect = function(event) {
count += 1;
var port = event.ports[0];
port.postMessage('���ǵ�' + count+"������-");
port.onmessage = function(event) {
port.postMessage('�����ӽ��̷��ص���Ϣ');
  }
}
