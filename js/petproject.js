/*HTTP 5103 Pet Project JS file Mohammad Baqir*/
window.onload = letsgo;
function letsgo(){
    //declare/get variables
    var bigboy = document.getElementById('subs');
    var setdate1 = document.getElementById('setdate1');
    var setdate2 = document.getElementById('setdate2');
    var setdate3 = document.getElementById('setdate3');
    var netdate = document.getElementById('netdate');
    var disneydate = document.getElementById('disneydate');
    var adobedate = document.getElementById('adobedate');
    var a=1;
    var formhandle = document.forms.form;
    //hide number date elements
    $('span').hide();
    //setting number dates of the 3 hardcoded subscriptions
    var firstdate = new Date(netdate.innerHTML);
    setdate1.innerHTML = firstdate.getTime();
    var seconddate = new Date(disneydate.innerHTML);
    setdate2.innerHTML = seconddate.getTime();
    var thirddate = new Date(adobedate.innerHTML);
    setdate3.innerHTML = thirddate.getTime();
    //sort the subscriptions based on number date inside the span element
    var tosort = $('.section').sort(function(x,y){
        return $(x).find('span').text() > $(y).find('span').text() ? 1: -1;
    });
    $('#subs').html(tosort);
    //process form
    formhandle.onsubmit = processform;
    function processform(){
        //hide the numberdate elements
        $('span').hide();
        //get values from input elements
        var subvalue = formhandle.subname.value;       
        var pricevalue = formhandle.price.value;        
        var datevalue = formhandle.duedate.value;
        //convert date to numberdate
        var newdate = new Date(datevalue);
        var numberdate = newdate.getTime();
        //setting values on html
        document.getElementById('name').innerHTML=subvalue;
        document.getElementById('price').innerHTML='$'+pricevalue;
        document.getElementById('date').innerHTML=datevalue;
        //incrementing ids of input elements so they cannot be picked up by formhandler again
        document.getElementById('name').id = 'name'+a;
        document.getElementById('price').id = 'price'+a;
        document.getElementById('date').id = 'date'+a;
        document.getElementById('numdate').innerHTML= numberdate;
        document.getElementById('numdate').id = 'numdate'+a;
        a++;
        //creating new elements with the corresponding ids to handle a new subscription input by user
        var newdiv = document.createElement('div');
        newdiv.setAttribute('class','section');
        bigboy.appendChild(newdiv);
        var newname = document.createElement('p');
        newname.setAttribute('id','name');
        newdiv.appendChild(newname);
        var newprice = document.createElement('p');
        newprice.setAttribute('id','price');
        newdiv.appendChild(newprice);
        var newdate = document.createElement('p');
        newdate.setAttribute('id','date');
        newdiv.appendChild(newdate);
        var newnumdate = document.createElement('span');
        newnumdate.setAttribute('id','numdate');
        newdiv.appendChild(newnumdate);
        //sorting subscriptions by number date again
        var tosort = $('.section').sort(function(x,y){
            return $(x).find('span').text() > $(y).find('span').text() ? 1: -1;
        });
        $('#subs').html(tosort);
        return false;
    }


    
    
    
    
    


    
    
    
}