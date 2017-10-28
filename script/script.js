function startup() {
    var $imgs = $(".thumbnails a");
    var $search = $("#search-filter");
    var $noResults = $("#no-results")[0];

    $noResults.style.display= "none";

    // Declaring a function which will be called when the search input
    // keyup event is trigged (via user text input into the field)
    var filterImages = function() {
        // 'this' is $search element
        const searchValue = this.value.trim().toLowerCase();
        var resultsFound = false;

        $imgs.each(function(index, img) {
            const title = img.title.trim().toLowerCase();
            
            if (title.includes(searchValue)) {
                img.style.display = '';
                resultsFound = true;
            } else {
                img.style.display = 'none';
            }
        });

        if (resultsFound) {
            $noResults.style.display = "none";
        } else {
            $noResults.style.display = "";
        }
    }

    // Calls filterImages on every keyup
    $search.on('keyup', filterImages);
}

startup();