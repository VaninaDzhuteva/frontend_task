"use strict";

//Get Data from JSON file function
var getData = function getData() {
    var output = document.getElementById('output');
    var xhr = void 0;
    // Browsers with XMLHttpRequest object , modern browsers
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    // Internet Explorer
    else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // For old browsers 
        else {
                throw new Error("AJAX is not supported by your browser!");
            }

    xhr.onreadystatechange = function () {
        // if request has not been finished yet
        if (xhr.readyState < 4) {
            //remove animation
            output.classList.remove('smooth');
            //Loading animation
            output.innerHTML = '<div class="d-flex justify-content-center mt-3"><div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';
        }
        // if request has finished processing
        else if (xhr.readyState == 4) {
                // if status is "OK"
                if (xhr.status == 200 && xhr.status < 300) {
                    // show the response
                    var libraryData = JSON.parse(this.responseText);
                    output.classList.add('smooth');
                    //Looping through JSON data and adds it to the DOM
                    for (var i = 0; i < libraryData.length; i++) {
                        if ((i + 1) % 3 == 0) {
                            output.innerHTML = '<div class="row">' + ("\n                        " + libraryData.map(template).join('') + "\n                       ") + '</div>';
                        } else {
                            output.innerHTML = "\n                        " + libraryData.map(template).join('') + "\n                       ";
                        }
                    }
                }
            }
    };
    //Initializing the request
    xhr.open('GET', 'data.json', true);
    // Sending the request
    xhr.send(null);
};

//Template function to be displayed in the DOM
var template = function template(card) {
    return "   \n        <div class=\"col-sm-12 col-md-4 col-lg-4 center-content mt-4 floated\">\n            <div class=\"library-card two mb-4\"> \n                <div class=\"second-lybrary\" style=\"background:" + card.bgColor + ",url(" + card.img + ") no-repeat 50% 50% / cover; height: 173px;border-top-left-radius: 5px; border-top-right-radius: 5px;\"></div>\n                <div class=\"card-content\">\n                    <div class=\"type text-white text-center\" style=\"" + card.typeStyle + "\">" + card.type + "</div>\n                    <p class=\"mt-3\"><strong>" + card.header + "</strong></p>\n                    <p>" + card.text + "</p>\n                </div>\n            </div>\n        </div>  \n    ";
};

// Invoking the getData() method
document.getElementById('load-more').addEventListener('click', function () {
    getData();
});