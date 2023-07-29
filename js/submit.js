function checkForm()
{
  
let time_s = document.getElementById('time_s').value;     
let number_s = document.getElementById('number_s').value;    
let city_s = document.getElementById('city_s').value;

$.ajax({
    url: 'php/teleg.php',
      method: 'post',
      data: {city:city_s,
        phone:number_s,
          time:time_s},
    success: function(data){
    console.log(data);
    },
    error:function(e){
      console.log(e);
    }
  });
return false;
}