function checkEvent() {
    let year = new Date().getFullYear();
    let style = '&nbsp;<i id="unlock" class="fa fa-bookmark" aria-hidden="true" style="color:green;display:none;"></i>';
    $('#shBirth').html(year + '-10-14' + style);
    $('#shJob').html(year + '-12-01' + style);
    $('#shMar').html(year + '-04-16' + style);
    $('#shKid').html(year + '-04-15' + style);
    $('#rvBirth').html(year + '-01-01' + style);
    $('#rvJob').html(year + '-04-14' + style);
    $('#rvMar').html(year + '-11-24' + style);
    $('#rvKid').html(year + '-11-22' + style);
    $('#rhBirth').html(year + '-12-09' + style);
    $('#rhJob').html(year + '-02-11' + style);
    $('#rhMar').html(year + '-01-27' + style);
    $('#prBirth').html(year + '-10-30' + style);
    $('#prJob').html(year + '-12-14' + style);
    $('#prMar').html(year + '-06-22' + style);
    $('#aniBirth').html(year + '-10-01' + style);
    $('#aniJob').html(year + '-01-11' + style);
    $('#aniMar').html(year + '-07-08' + style);
    $('#aniKid').html(year + '-06-15' + style);
    $('#anBirth').html(year + '-07-11' + style);
    $('#anJob').html(year + '-05-17' + style);
    $('#anMar').html(year + '-11-19' + style);
    $('#anKid').html(year + '-11-27' + style);
    $('#amBirth').html(year + '-04-30' + style);
    $('#amJob').html(year + '-11-07' + style);
    var items = document.getElementsByTagName('td');
    var icons = document.getElementsByTagName('i');
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    if (date < 10) {
        date = '0' + date;
    }

    let fullDate = year + "-" + month + "-" + date;
    console.log(fullDate);
    for (var i = 0; i < items.length; i++) {
        str = items[i].innerText;
        console.log(str.substring(8, 10) <= date);
        console.log(str.substring(5, 7) <= month);
        console.log(str.substring(0, 4) <= year);
        console.log(year);

        if (str.substring(5, 7) <= month && str.substring(0, 4) <= year) {
            console.log("bang");
            let child = items[i].children[0];
            console.log(child);
            child.style.display = 'block';
        }
        else {
            console.log("no bang");
        }
    }
    // $('#shBirth').html('20-3-2020');
}

// console.log("test");
// let child = items[i].children[0];
// console.log(child);
// child.style.display = 'block';