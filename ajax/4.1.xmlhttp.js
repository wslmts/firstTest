    //��IE���������XmlHttpRequest����
    if (window.XmlHttpRequest) {
        xmlhttp = new XmlHttpRequest();
    }
    //IE���������XmlHttpRequest����
    if (window.ActiveXObject) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {
            try {
                xmlhttp = new ActiveXObject("msxml2.XMLHTTP");
            }
            catch (ex) { }
        }
    }