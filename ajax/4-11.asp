<%@language="javascript"%>
<%//<%��asp�����������д������ʼ����
//@language="javascript"��ʾ��ҳ�����еķ�������Ĭ����������ΪJavaScript
var names = ["z3f","admin","test","anna","cindy","diana"];//����һ������ģ�����ݱ�ʾ�Ѿ�ע������û�
//��ȡ��ַ���ݹ����Ĳ���username����JavaScript�﷨��ʱʱ���ִ�Сд��
var q = Request.QueryString("username");//ͨ��ASP���ö����ȡ����
var has = 0						//����һ�����������洢�Ƿ���������û���
for (var i=0;i<names.length;i++){	//ѭ���ȶԣ�һ����Ŀ���ǲ�ѯ���ݿ����
	if(names[i]==q ){			//����û����Ѵ��ھͱ��
		has = 1;					//��������
		break;						//�˳�ѭ��
	}
}
if(has == 1){
	Response.Write("{success:false}");//����ҵ�ͬ���û�����ע�ᣬ�����JSON��ʽ�ַ�����ͨ��ASP���ö������
}else{
	Response.Write("{success:true}");//���û��ͬ���û������ע�ᣬ�����JSON��ʽ�ַ�����ͨ��ASP���ö������
}
%>