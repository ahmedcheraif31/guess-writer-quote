
var score=0,counter=0

//Object Array to hold quotes, writer and there image
var quotes = [{quote:"The unexamined life is not worth living",
              writer:"Socrates", photo:'socrates.jpg'},
              {quote:"I think therefore I am",
              writer:"Decartes", photo:'descartes.jpg'},
              {quote:"If God did not exist, it would be necessary to invent Him",
              writer:"Voltaire", photo:'voltaire.jpg'},
              {quote:"We are what we repeatedly do. Excellence, then, is not an act, but a habit",
              writer:"Aristole", photo:'aristole.jpg'},
              {quote:"You can discover more about a person in an hour of play than in a year of conversation"
              ,writer:"Plato", photo:'plato.jpg'}]
function guess(){
    $("#g").hide()
    $("#bg").hide()
   
}


//Function to randomly select a quote
var randomNumber =0 // variable to stor the random number
function getRandomQuote () {
    randomNumber = Math.floor(Math.random() * (quotes.length))
    // console.log($('#h').append("<h3 class='a'>"+ quotes[randomNumber].quote+"</h3>"))
	return $('#h').append("<h3 class='a'>"+ quotes[randomNumber].quote+"</h3>")

}

   getRandomQuote()// the function start automaticly
    $("#h").css('border','thick double #FF766C')// style for what we just append to the #h
    $("#maDivision").css('border','thick double black')
var score
// function so we can know if we answerd corectly or not while we press on the radio
    $(document).ready(function(){
        // while on click on the radio we invoque the function
        $("input[type='radio']").click(function(){
            // the value of the checked radio
        	var radioValue = $("input[name='drone']:checked").val();
           for (var i=0;i<quotes.length;i++){
            // while the  .a ,=== to the element on my quotes  so we can keep the curent element on the same index to know the corecft answer
            if($('.a').html()===quotes[i].quote){
                    if(radioValue===quotes[i].writer){
                        score=score+5
                        console.log(score)
                     alert(" Yeeeyyy !! you gessed it " +score)
            
                     // if the right answer is picked
                //     we clear the #h
                       $('#h').empty()
                // so we can append a new quote to it
                getRandomQuote()
                 } 
            }
           }
        })
       
    })

        // if we click on help we show the img of the writer in #h
        $('#v2').on('click',function(){ 
            for(var i=0;i<quotes.length;i++){
                if(quotes[i].writer === quotes[randomNumber].writer){
                        var image=quotes[i].photo
                        $('#h').append(`<img class="h1" src=${image} style="width:200px;height:150px">`)
                }
            }
            
        })
             
        

  


   









  