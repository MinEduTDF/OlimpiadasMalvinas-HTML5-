var access_token = "16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587",
    access_parameters = {
        access_token: access_token
    };

var form = $('#tagsearch');
form.on('submit', function(ev) {
    var q = this.tag.value;
    if(q.length) {
        //console.log(q);
        grabImages(q, 40, access_parameters);
    }
    ev.preventDefault();
});

function grabImages(tag, count, access_parameters) {
    var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count;
    $.getJSON(instagramUrl, access_parameters, onDataLoaded);
}

function onDataLoaded(instagram_data) {
    var target = $("#instagram-gallery");
    //console.log(instagram_data);
    if (instagram_data.meta.code == 200) {
        var photos = instagram_data.data;
        //console.log(photos);
        if (photos.length > 0) {
            target.empty();
            for (var key in photos) {
                var photo = photos[key];
                target.append('<a href="' + photo.link + '" target="_blank"><img class="img-rounded" style="float:left; margin:10px;"" src="' + photo.images.thumbnail.url + '" width="200" height="200"></a>')
            }
        } else {
            target.html("nothing found");
        }
    } else {
        var error = instagram_data.meta.error_message;
        target.html(error);
    }
}

grabImages('concursomalvinas2016', 40, access_parameters);