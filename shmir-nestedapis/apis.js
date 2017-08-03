var countryURL= "https://restcountries.eu/rest/v2/alpha?codes=nl";
var userURL= "https://randomuser.me/api/";
$.ajax({
    url:userURL,
    success:function(data){
        var result1= data.results[0];
        var firstname= result1.name.first;
        var lastname=result1.name.last;
        var countryInitials= result1.nat;
        $("body").append("<h1> My name is " + firstname + " " + lastname + "</h1>");
        $("body").append("<p> Your boi from " + countryInitials + "</p>");
    }

});