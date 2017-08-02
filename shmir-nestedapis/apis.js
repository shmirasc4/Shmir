var countryURL= "https://restcountries.eu/rest/v2/alpha?codes=nl";
var userURL= "https://randomuser.me/api/";
$.ajax({
    url:userURL,
    success:function(data){
        var result1= data.results[0];
        var countryInitials= result1.name.first;
        $("body").append("<h1> I love " + countryInitials + "</h1>");
    }

});