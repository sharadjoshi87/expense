function checkEvent(){
    var items = document.getElementsByTagName('td');    
    var icons = document.getElementsByTagName('i');  
    let date = new Date().getDate();
    let month = new Date().getMonth()+1;
    if(month<10){
        month = '0'+ month;
    }
    if(date<10){
        date = '0'+ date;
    }
    let year = new Date().getFullYear();
    let fullDate = year + "-" + month + "-" + date;
    console.log(fullDate);
    for (var i = 0; i < items.length; i++){
        str = items[i].innerText;
        console.log(str.substring(8,10) <= date);
        console.log(str.substring(5,7) <= month);
        console.log(str.substring(0,4) <= year);
        console.log(year);
        
        if(str.substring(5,7) <= month && str.substring(0,4) <= year){
            console.log("bang");   
            let child = items[i].children[0];
            console.log(child); 
            child.style.display = 'block';  
        }
        else{
            console.log("no bang");
        }
    }
    
}

// console.log("test");
// let child = items[i].children[0];
// console.log(child);
// child.style.display = 'block';