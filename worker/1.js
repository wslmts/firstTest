var temp=0;
self.onmessage = function(event) {
//����worker1���ݹ�����ֵ,�洢��event.data��
var n = parseInt(event.data);
temp+=n*Math.random()*n*100000000000000000000;
self.postMessage("��"+event.data+"��������ϣ����Ϊ��"+temp);
//����ҳ�ļ��ش�����
}