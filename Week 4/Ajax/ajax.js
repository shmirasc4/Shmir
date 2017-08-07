var yourID = "105efe2e";
var yourKey = "03359c52f6e6e081e988cbfd35b8c821";
var foodURL = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + yourID + "&appKey=" + yourKey;

$.ajax({
    url:foodURL,
    success:function(data){
        //console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;
        $("body").append("<h1>This "+name+" has "+cals+" kcals</h1>");
    }
});