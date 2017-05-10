exports.home=function(req,res){
  res.render('home',{title:'City Best Hotels',
                    headline:'Best hotels in Bengaluru'
                    });
                  }


exports.hotel=function(req,res){
    var hotelName=req.params.hotel;
    var title,headline;
    var imageCount=4;

    if(hotelName==='abq'){
      title="Absolute BBQ";
      headline="ABQ is India's most popular GRILL Restaurant.";
    }
    else if(hotelName==='vasudev'){
      title="Vasudev Adigas";
      headline="Vasudev Adigas in top of the list when it comes to veg restaurants";
    }

    res.render('hotel',{
      title:title,
      headline:headline,
      hotel:hotelName,
      numberOfImages:imageCount});
  }
