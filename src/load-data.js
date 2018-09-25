//Get Data from JSON file function
const getData = () => {
    const output = document.getElementById('output');
    let xhr;
    // Browsers with XMLHttpRequest object , modern browsers
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }
    // Internet Explorer
    else if(window.ActiveXObject){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // For old browsers 
    else{
        throw new Error("AJAX is not supported by your browser!");
    }

    xhr.onreadystatechange = function(){
        // if request has not been finished yet
        if(xhr.readyState < 4){
            //remove animation
            output.classList.remove('smooth');
            //Loading animation
            output.innerHTML = '<div class="d-flex justify-content-center mt-3"><div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';  
        }
        // if request has finished processing
        else if(xhr.readyState == 4){
            // if status is "OK"
            if(xhr.status == 200 && xhr.status < 300){
                // show the response
                const libraryData = JSON.parse(this.responseText);               
                output.classList.add('smooth');
                //Looping through JSON data and adds it to the DOM
                for (let i = 0; i < libraryData.length; i++ ){
                    if((i+1) % 3 == 0){
                        output.innerHTML = '<div class="row">' + `
                        ${libraryData.map(template).join('')}
                       ` + '</div>';
                    } else{
                        output.innerHTML = `
                        ${libraryData.map(template).join('')}
                       `;
                    }
                }
            }
        }
    }
    //Initializing the request
    xhr.open('GET', 'data.json', true);
    // Sending the request
    xhr.send(null);
}

//Template function to be displayed in the DOM
const template = (card) => {
    return `   
        <div class="col-sm-12 col-md-4 col-lg-4 center-content mt-4 floated">
            <div class="library-card two mb-4"> 
                <div class="second-lybrary" style="background:${card.bgColor},url(${card.img}) no-repeat 50% 50% / cover; height: 173px;border-top-left-radius: 5px; border-top-right-radius: 5px;"></div>
                <div class="card-content">
                    <div class="type text-white text-center" style="${card.typeStyle}">${card.type}</div>
                    <p class="mt-3"><strong>${card.header}</strong></p>
                    <p>${card.text}</p>
                </div>
            </div>
        </div>  
    `;
}

// Invoking the getData() method
document.getElementById('load-more').addEventListener('click', function(){
    getData();
});