var eg = {};
	eg.$ = function(id){
		return document.getElementById(id);
	};
	eg.getElementsByClassName = function(className, element) {
		if(document.getElementsByClassName){
			return (element || document).getElementsByClassName(className)
		}
		var children = (element || document).getElementsByTagName('*');
		var elements = [];	 
		for (var i = 0; i < children.length; i++) {
			var child = children[i];
			var classNames = child.className.split(' ');
			for (var j = 0; j < classNames.length; j++) {
				if (classNames[j] == className) {
					elements.push(child);
					break;
				}
			}
		}
		return elements;
	};
	eg.addListener = function(target,type,handler){
		if(target.addEventListener){
			target.addEventListener(type,handler,false);
		}else if(target.attachEvent){
			target.attachEvent("on"+type,handler);
		}else{
			target["on"+type]=handler;
		}
	};
	//����һ�����õ�AJAX������
	eg.AJAX = function(config,callback){	//����һ���ص�������һ�����ò���
		var xmlhttp;	//����һ���������ں���洢����
		if(window.XMLHttpRequest){//��������֧��XMLHttpRequest����ͨ����IE�����֧��
			xmlhttp = new XMLHttpRequest();
		}else if(window.ActiveXObject){//��������֧��ActiveXObject����ͨ����IE
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");//���Դ���һ���Ͱ汾����msxml���2.6�汾����֧��
			}
			catch (e){
				try {
					xmlhttp = new ActiveXObject("msxml2.XMLHTTP");//���Դ���һ���߰汾����msxml���3.0�汾����֧��
				}
				catch (x){
				}
			}
		}
		if(xmlhttp){//����ܹ������ɹ���һ�㶼��ɹ�����������У���ϵͳ����װ�ɣ�̫�����ˡ�
			if(config.ISASYN){
				xmlhttp.onreadystatechange = function(){//����HTTP״̬�����ı�ʱִ�еĺ���
					if (xmlhttp.readyState==4 && xmlhttp.status==200){//��HTTP����ɹ�ʱ
						callback(xmlhttp.responseText,xmlhttp.responseXML);//�ѷ�������Ӧ�����ݻش����ص�����callback
					}
				};
				xmlhttp.open(config.TYPE,config.URL,true);//�����ݵĲ�����open��������
				xmlhttp.send(config.DATA);//�����첽AJAX����
			}else{
				xmlhttp.open(config.TYPE,config.URL,false);//�����ݵĲ�����open��������
				xmlhttp.send(config.DATA);//����ͬ��AJAX����
				callback(xmlhttp.responseText,xmlhttp.responseXML);
			}
		}
	};