// JavaScript Document
$(document).ready(function () {

    var key = 'AIzaSyD3mp_gpPcOl-l4j4A0h2P_kc2kqe-3UHs';
    var playlistId = 'PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
    // variable for the main video

    // when sending the info to receive

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 12,
        playlistId: playlistId
    }

    loadVideos();
    //_______function getJSON
    function loadVideos() {
        $.getJSON(URL, options, function (data) {
            console.log(data);
            //variable for main video 
            //var id = data.items[0].snippet.resourceId.videoId;
            var id = data.items[0].snippet.resourceId.videoId;
            console.log(id);
            //load main video
            mainVideo(id);
            articlesLoop(data); // send the data to results loop

        });
    }

    //_______function load main video
    function mainVideo(id) {
        $('#video').html(`
   <iframe width="100%" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
    }
    //________________
    //function to loop videos and display
    function articlesLoop(data) {
        $.each(data.items, function (i, item) {
            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var description = item.snippet.description;
            description = description.slice(0,80 ) + '...';
            var vid = item.snippet.resourceId.videoId;
            
            $('#articlesContainer').append(`
<article class="item p-2 d-flex flex-row" data-key="${vid}"> <img src="${thumb}" alt="" class="img-fluid w-25 h-25">
    <div class="details pl-2 m-0 ">
      <h4 class="m-0 text-left">${title}</h4>
      <p class="text-muted">${description}</p>
    </div>
  </article>`);
            });
    }
            // CLICK EVENT
    $('#articlesContainer').on('click','article', function () {
        var id = $(this).attr('data-key');
       mainVideo(id);
    });
    

});