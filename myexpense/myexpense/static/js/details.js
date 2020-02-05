function checkEvent(){
    var items = document.getElementsByTagName('td');
    console.log(new Date().getDate());

    for (var i = 0; i < items.length; i++)
    console.log(items[i].innerText);
    
}