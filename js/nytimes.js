// var articles = 0;
// var maxArticles = 7;




// $.Ajax(

//     'type': 'GET',
//     'url': 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
//     data: {
//         'fq': "bitcoin&begin_date=20080101&end_date=20150101",
//         'response-format': "json",
//         'api-key': "27a6b42078d85e9fd9743e17ce52db9c:4:73801956",
//         'callback': 'svc_search_v2_articlesearch'
//     }),
//         success: function createNY(nyTimesData) {
//             $.each{
//                 nyTimesData.data.children,
//                 function (i, giveMe){
//                     var url = ''
//                     if (giveMe.docs.web_url <= maxArticles){
//                         articles++;
//                         url+= giveMe.data.web_url;
//                     }
//                     $("#test").append(url);

//                 }

//             }
        
        
//     }
// });

// $.ajax({
//     url: "http://otter.topsy.com/urlinfo.js?url=http://www.nytimes.com",
//     dataType: 'jsonp',
//     success: function(results){
//         var title = results.response.oneforty;
//         var numTweets = results.response.trackback_total;
//         $('#results').append(title + ' has ' + numTweets + ' tweets.');
//     }
// });



var newStartingDateString = startingDate.replace(/-/g, "");
var newEndingDateString = endingDate.replace(/-/g, "");
console.log(startingDate);
console.log(endingDate);
console.log(newEndingDateString);
console.log(newStartingDateString);



$.ajax({
  //URL that contains converted global varibale strings 
  //url:'http://api.nytimes.com/svc/search/v2/articlesearch.json?&q=bitcoin&begin_date='+ newStartingDateString +'&end_date='+ newEndingDateString +'&api-key=27a6b42078d85e9fd9743e17ce52db9c:4:73801956',
  //URL for testing with default large date range
  url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=bitcoin&begin_date=20100101&end_date=20150101&api-key=27a6b42078d85e9fd9743e17ce52db9c:4:73801956',
  dataType: 'json',
  success: function(resp){
    console.log(resp.response.docs.length)
    for (var i = 0; i < resp.response.docs.length; i++) {
      $("#output").append('<div class="row nyTimesRowhead">');
      $("#output").append('<div class="col l12 nyTimesHeader">' + resp.response.docs[i].headline.main + '</div>');
      $("#output").append('<div class="row ">');
      $("#output").append('<div class="col l8 nyTimesBody">'  + resp.response.docs[i].abstract  + ' <a href="' + resp.response.docs[i].web_url + '"> More </a>');
      $("#output").append('<div class="col l4 s12 offset-s2 nyTimesPhoto"><img class="photo" src="http://www.nytimes.com/' + resp.response.docs[i].multimedia[0].url +'">' + '</div>');
      $("#output").append('</div>');
      $("#output").append('</div>');
      $("#output").append('</div>');
    }
  },
  error: function( req, status, err ) {
    console.log( 'something went wrong', status, err );
  }
});