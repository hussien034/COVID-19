var allCountries=[];
data();
function data(){
var httpRequest=new XMLHttpRequest();
  httpRequest.open("Get","https://coronavirus-19-api.herokuapp.com/countries");
  httpRequest.send();
  httpRequest.addEventListener('readystatechange',function(){
      if(httpRequest.readyState==4 && httpRequest.status==200){
        allCountries=JSON.parse(httpRequest.response);
        console.log(allCountries);
        displayData()
      }
  })
  }
function displayData(){
    var cartona="";
    for(var i=0;i<allCountries.length;i++)
    {
        cartona+=
        `<div class="col-md-4">
        <div class="caption ">
        <h2>${allCountries[i].country}</h2>
        <div class="cent d-flex justify-content-between">
        <p>Active</p>
        <P>${allCountries[i].active}</p>
        </div>
        <div class="cent d-flex justify-content-between">
        <p>Cases</p>
        <P>${allCountries[i].cases}</p>
        </div>
        <div class="cent d-flex justify-content-between">
        <p>CasesPerOneMillion</p>
        <P>${allCountries[i].casesPerOneMillion}</p>
        </div>
        <div class="cent d-flex justify-content-between">
        <p>Deaths</p>
        <P>${allCountries[i].deaths}</p>
        </div>
        <div class="cent d-flex justify-content-between">
        <p>Recovered</p>
        <P>${allCountries[i].recovered}</p>
        </div>
        <div class="cent d-flex justify-content-between">
        <p>TodayCases</p>
        <P>${allCountries[i].todayCases}</p>
        </div>
        <div class="cent d-flex justify-content-between">
        <p>TodayDeaths</p>
        <P>${allCountries[i].todayDeaths}</p>
        </div>
        </div>
        </div>
        `
    }
    document.getElementById("rows").innerHTML=cartona
}
function search(trem) {
    var cartona = "";
    for (var i = 0; i < allCountries.length; i++) {
        if(allCountries[i].country.toLowerCase().includes(trem.toLowerCase())
        ) {
            cartona+=
            `<div class="col-md-4" >
            <div class="caption ">
            <h2>${allCountries[i].country}</h2>
            <div class="cent d-flex justify-content-between">
            <p>Active</p>
            <P>${allCountries[i].active}</p>
            </div>
            <div class="cent d-flex justify-content-between">
            <p>Cases</p>
            <P>${allCountries[i].cases}</p>
            </div>
            <div class="cent d-flex justify-content-between">
            <p>CasesPerOneMillion</p>
            <P>${allCountries[i].casesPerOneMillion}</p>
            </div>
            <div class="cent d-flex justify-content-between">
            <p>Deaths</p>
            <P>${allCountries[i].deaths}</p>
            </div>
            <div class="cent d-flex justify-content-between">
            <p>Recovered</p>
            <P>${allCountries[i].recovered}</p>
            </div>
            <div class="cent d-flex justify-content-between">
            <p>TodayCases</p>
            <P>${allCountries[i].todayCases}</p>
            </div>
            <div class="cent d-flex justify-content-between">
            <p>TodayDeaths</p>
            <P>${allCountries[i].todayDeaths}</p>
            </div>
            </div>
            </div>
            `
        }

    }
    document.getElementById("rows").innerHTML=cartona;
}

var typed = new Typed('.element', {
    strings: ['Discover All Data About Covid-19','Search By Name Of The Country'],
    typeSpeed: 50,
    backSpeed:50,
    loop: true,
    smartBackspace: true // Default value,
    
  });
  $(document).ready(function()
{
    $("#loadding").fadeOut(2000,function(){
        $("body").css("overflow","auto")
        $("#loadding").remove()
    })

})
