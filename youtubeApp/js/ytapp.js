// JavaScript Document
//
//     var ourRequest = new XMLHttpRequest();
//          ourRequest.open('GET','https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&key=AIzaSyD3mp_gpPcOl-l4j4A0h2P_kc2kqe-3UHs',true);
//          ourRequest.onload = function(){
//              var ourData = JSON.parse(ourRequest.responseText);
//              
//              var title = ourData.items[0].snippet.title;
//              var description = ourData.items[0].snippet.description;
//              var image = ourData.items[0].snippet.thumbnails.default.url;
//             document.getElementById('articleImg').src = image;
//            document.getElementById('title').innerHTML = title;
//            document.getElementById('description').innerHTML = description.slice(0,100)+'...';
//             console.log(image);
//              //header.innerHTML = Object.keys(object1);
//              
//              //console.log(ourData.Employees[0]);
//              //var employee1 = ourData.Employees[0];
//              //console.log(employee1[0]);
//              
//              console.log(ourData.items.length);
//              
//              function loop(){
//                  for(var i =0;i < ourData.items.length;i++){
//                   console.log('Description: '+[i]+ourData.items[i].snippet.description);
//                  }
//              }
//              loop();
//            
//          };
//          ourRequest.send();

// YOU WILL NEED TO ADD YOUR OWN API KEY IN QUOTES ON LINE 5, EVEN FOR THE PREVIEW TO WORK.
// 
// GET YOUR API HERE https://console.developers.google.com/apis/api


// https://developers.google.com/youtube/v3/docs/playlistItems/list

// https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=webtut-195115&duration=PT1H

// <iframe width="560" height="315" src="https://www.youtube.com/embed/qxWrnhZEuRU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

// https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg


$(document).ready(function () {

    var key = 'AIzaSyD3mp_gpPcOl-l4j4A0h2P_kc2kqe-3UHs';
    var playlistId = 'PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    var options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('#video').html(`
					<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
    }

		
    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.snippet.resourceId.videoId;


            $('main').append(`
							<article class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4>${title}</h4>
									<p>${desc}</p>
								</div>

							</article>
						`);
        });
    }

		// CLICK EVENT
    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });


});

  

