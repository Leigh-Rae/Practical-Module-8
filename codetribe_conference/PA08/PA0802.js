//PA0802 && PA0803

// This creates a name for our cache


const CACHE_NAME="Tech conference"

// Thid id the list of files that should be cached


const fileToCache = [
    "index.html",
    "style.css",
    "app.js"

]

//Save important files in the cache

self.addEventListener("install", function(event){
    event.waituntill(

        cache.open(CACHE_NAME)
        .then(function(cache){
            console.log("CACHING WEBSITES FILE....." + cache)

            return cache.addAll(fileToCache)
        })
    )
    
})