  function Calculate() {
    console.log('in calculate');
    var table = document.getElementById('details');
    var items = table.getElementsByTagName('li');
    var anand_class = table.getElementsByClassName('anand');
    var aman_class = table.getElementsByClassName('aman');
    var anil_class = table.getElementsByClassName('anil');
    var rahul_class = table.getElementsByClassName('rahul');
    var prashant_class = table.getElementsByClassName('prashant');
    var sharad_class = table.getElementsByClassName('sharad');
    var aC2 = document.getElementById('anandCount');
    var aC1 = document.getElementById('amanCount');
    var aC3 = document.getElementById('anilCount');
    var rC = document.getElementById('rahulCount');
    var pC = document.getElementById('prashantCount');
    var sC = document.getElementById('sharadCount');


    var sum = 0;
    var anand_delta = 0;
    var aman_delta = 0;
    var anil_delta = 0;
    var rahul_delta = 0;
    var prashant_delta = 0;
    var sharad_delta = 0;

    var anandCount = anand_class.length
    var amanCount = aman_class.length
    var anilCount = anil_class.length
    var rahulCount = rahul_class.length
    var prashantCount = prashant_class.length
    var sharadCount = sharad_class.length

    for (var i = 0; i < items.length; i++)
      sum += parseInt(items[i].innerText.substring(2));

    console.log(sum);

    var output = document.getElementById('sum');
    output.innerHTML = '<strong>Total Contribution : &#x20B9; ' + sum + '</strong>';

    for (var i = 0; i < anand_class.length; i++)
      anand_delta += parseInt(anand_class[i].value);

    for (var i = 0; i < aman_class.length; i++)
      aman_delta += parseInt(aman_class[i].value);

    for (var i = 0; i < anil_class.length; i++)
      anil_delta += parseInt(anil_class[i].value);

    for (var i = 0; i < rahul_class.length; i++)
      rahul_delta += parseInt(rahul_class[i].value);

    for (var i = 0; i < prashant_class.length; i++)
      prashant_delta += parseInt(prashant_class[i].value);

    for (var i = 0; i < sharad_class.length; i++)
      sharad_delta += parseInt(sharad_class[i].value);

    var max = Math.max(aman_delta, anand_delta, anil_delta, prashant_delta, rahul_delta, sharad_delta)

    console.log('anand delta: ' + anand_delta);
    var output = document.getElementById('anand_delta');
    var contri = document.getElementById('anand_cont');
    output.innerHTML = '<strong>&#x20B9; ' + (max - anand_delta) + '</strong>';
    contri.innerHTML = '<strong>&#x20B9; ' + anand_delta + '</strong>';

    console.log('aman delta: ' + aman_delta);
    var output = document.getElementById('aman_delta');
    var contri = document.getElementById('aman_cont');
    output.innerHTML = '<strong>&#x20B9; ' + (max - aman_delta) + '</strong>';
    contri.innerHTML = '<strong>&#x20B9; ' + aman_delta + '</strong>';

    console.log('anil delta: ' + anil_delta);
    var output = document.getElementById('anil_delta');
    var contri = document.getElementById('anil_cont');
    output.innerHTML = '<strong>&#x20B9; ' + (max - anil_delta) + '</strong>';
    contri.innerHTML = '<strong>&#x20B9; ' + anil_delta + '</strong>';

    console.log('rahul delta: ' + rahul_delta);
    var output = document.getElementById('rahul_delta');
    var contri = document.getElementById('rahul_cont');
    output.innerHTML = '<strong>&#x20B9; ' + (max - rahul_delta) + '</strong>';
    contri.innerHTML = '<strong>&#x20B9; ' + rahul_delta + '</strong>';

    console.log('prashant delta: ' + prashant_delta);
    var output = document.getElementById('prashant_delta');
    var contri = document.getElementById('prashant_cont');
    output.innerHTML = '<strong>&#x20B9; ' + (max - prashant_delta) + '</strong>';
    contri.innerHTML = '<strong>&#x20B9; ' + prashant_delta + '</strong>';

    console.log('sharad delta: ' + sharad_delta);
    var output = document.getElementById('sharad_delta');
    var contri = document.getElementById('sharad_cont');
    output.innerHTML = '<strong>&#x20B9; ' + (max - sharad_delta) + '</strong>';
    contri.innerHTML = '<strong>&#x20B9; ' + sharad_delta + '</strong>';

    aC1.textContent = amanCount + 'x';
    aC2.textContent = anandCount + 'x';
    aC3.textContent = anilCount + 'x';
    pC.textContent = prashantCount + 'x';
    rC.textContent = rahulCount + 'x';
    sC.textContent = sharadCount + 'x';

    delta_sum = (max - anand_delta) + (max - aman_delta) + (max - anil_delta) + (max - rahul_delta) + (max - prashant_delta) + (max - sharad_delta) ;
    var output = document.getElementById('deltasum');
    output.innerHTML = '<strong>Total Delta : &#x20B9; ' + delta_sum + '</strong>';


  }

  $(function () {
    $("#addDate").datepicker({
      showAnim: 'slideDown',
      maxDate: 0,
      numberOfMonth: 1,
      dateFormat: 'yy-mm-dd',
    });

  });

  $(function () {

    $("#fromDate").datepicker({
      showAnim: 'slideDown',
      maxDate: 0,
      numberOfMonth: 1,
      dateFormat: 'yy-mm-dd',
      onSelect: function (selectdate) {
        var dt = new Date(selectdate);
        dt.setDate(dt.getDate() + 1);
        $("#toDate").datepicker("option", "minDate", dt);
      }
    });

    $("#toDate").datepicker({
      showAnim: 'slideDown',
      maxDate: 0,
      numberOfMonth: 1,
      dateFormat: 'yy-mm-dd',
      onSelect: function (selectdate) {
        var dt = new Date(selectdate);
        dt.setDate(dt.getDate() - 1);
        $("#fromDate").datepicker("option", "maxDate", dt);
      }
    });
  });

  function onSuccess() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    setTimeout(function () { location.reload(true); }, 1500);
  }

  function onError() {
    var x = document.getElementById("errorbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  function onSearchError() {
    var x = document.getElementById("searchbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  $(document).on('submit', '#search', function (e) {

    e.preventDefault();

    if (document.getElementById("fromDate").value != '' && document.getElementById("toDate").value != '') {
      $.ajax({
        type: 'POST',
        url: '/search',
        data: {
          fromDate: $('#fromDate').val(),
          toDate: $('#toDate').val(),
          csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function (data, textStatus, jqXHR) {
          $('#search_results').html(data);
        }
      })

    } else {
      onSearchError();

      if (document.getElementById("fromDate").value == '') {
        document.getElementById("fromDate").style.borderColor = 'red';
      }
      if (document.getElementById("toDate").value == '') {
        document.getElementById("toDate").style.borderColor = 'red';
      }
    }

  });

  $(document).on('submit', '#form', function (e) {

    e.preventDefault();

    if (document.getElementById("amt").value != '' && document.getElementById("addDate").value != '') {
      $.ajax({
        type: 'POST',
        url: '/add',
        data: {
          user: $('#user').val(),
          amount: $('#amt').val(),
          date: $('#addDate').val(),
          csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function () {
          onSuccess();
        }
      })

    } else {
      onError();

      if (document.getElementById("amt").value == '') {
        document.getElementById("amt").style.borderColor = 'red';
      }
      if (document.getElementById("date").value == '') {
        document.getElementById("date").style.borderColor = 'red';
      }
    }

  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
})
function setLabel(name) {
    if (document.getElementById("details").style.display != 'none') {
        document.getElementById("details").style.display = 'none'
        document.getElementById("view_btn").innerText = 'View Details';
    } else {

    }
    document.getElementById("collapseExample").style.display = "none";
    document.getElementById("user-name").innerText = name;
    document.getElementById("user").setAttribute('value', name);
    document.getElementById("collapseExample").style.display = "block";
    document.getElementById("user-name").style.width = "35%";
    document.getElementById("user-name").style.textAlign = "center";
    document.getElementById("collapseExample").style.width = "35%";
    // document.getElementById("date").valueAsDate = new Date();
}
function showDetails() {
    if (document.getElementById("details").style.display != 'block') {
        document.getElementById("details").style.display = 'block';
        document.getElementById("search").reset();
        $("input[id$='fromDate'], input[id$='toDate']").datepicker("option", "maxDate", null);
        $("input[id$='fromDate'], input[id$='toDate']").datepicker("option", "minDate", null);
        document.getElementById("view_btn").innerText = 'Hide Details';
        document.getElementById("collapseExample").style.display = 'none';
        // document.getElementById("fromDate").valueAsDate = new Date();
        // document.getElementById("toDate").valueAsDate = new Date();                
    } else {
        document.getElementById("details").style.display = 'none'
        document.getElementById("view_btn").innerText = 'View Details';
        document.getElementById("search_results").innerHTML = '';

    }
}