/*
AJAX=>>
    AJAX stands for asynchronous javascript and xml
    update a web page without reloading the page
    ajax communicates the server using XMLHttpsRequest object
    
    AJAX just uses a combination of:=>

    1)A browser built-in XMLHttpRequest object (to request data from a web server)
    2)JavaScript and HTML DOM (to display or use the data)

working of ajax=>
    
    1. An event occurs in a web page (the page is loaded, a button is clicked)
    2. An XMLHttpRequest object is created by JavaScript
    3. The XMLHttpRequest object sends a request to a web server
    4. The server processes the request
    5. The server sends a response back to the web page
    6. The response is read by JavaScript
    7. Proper action (like page update) is performed by JavaScript

    uses=>
        1)it is used for creating a dynamic web application
        2)we can send and recive data without reloading the page
        3)we can update pard of data without reloadinf the whole page
        4)its make webapp faster

methods=>
    open(method , url , async) // open(get/post/put , file/url , true/fals)

    send()
example=>
    let xhr = new XMLHttpRequest(); //creatind object
    xhr.open("get","newfile.php".true)
    xhr.send()

Display data=>

    onreadystatechange()=>
        its a handler that call a function when ready state value changed

responseText =>	Returns the response data as a string
responseXML =>	Returns the response data as XML data

example=>
    var xml = new XMLHttpRequest();
    xml.open("GET", "newfile.php", true);
    function fun() {
        xml.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.querySelector('#div2').innerHTML = this.responseText
            }
        }   
        xml.send();
    }
    fun()

    example2=>
            let body = document.querySelector('body')

var xml = new XMLHttpRequest();
xml.open("GET", "mydata.json", true);
function fun() {
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)

            let el = ' '
            data.forEach(element => {
                el += `<ul>
                         <li>${element.name}</li>
                         <li>${element.age}</li>
                        </ul>`;
            });
            body.innerHTML =el
            body.style.color = "red"
            body.style.color = "gray"
            body.style.backgroundColor = "black"
        
        }
    }
    xml.send();
}


    
*/






