<%
'�������
Dim names,k,has,i
'������ģ��һ���Ѵ���ֵ
	names = Array("z3f","admin","test","anna","cindy","diana")
'��ȡ�������Ĳ���
	k = request("key")
	has = 0
	i = 0
'ѭ��ƥ���Ƿ��Ѵ���
For i=0 To 5 
	If has <> 1 Then 
		If names(i) = k Then has = 1
	End  If 
	i = i + 1
Next 
'�����жϷ��ؽ����Ϣ������JSON�ַ���
If has = 1 Then 
	Response.write "{success:false}"
Else 
	Response.write "{success:true}"
End If 
%>