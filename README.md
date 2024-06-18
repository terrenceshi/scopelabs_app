# Video App

# app.js (essentially just banner and logo and search, with shit at the bottom)

# landing.js (our preselected 4 rows)
    # row.js (takes in 4+ video ids)
    # thumbnail.js (performs a get function on video url and turns that into an image, maybe has to do another get, w/e)
        # maybe has independent loading? easier to handle for take home...
        # at best, the whole row has a loading thing

# video.js (takes in video id)
    # TRY iframe just to be sure, but probably will have to do something cool

    # load comments either on page load or on scroll (if scroll, probably just give it to video.js)

        # map list or whatever to a bunch of comments

        # lil component to add a component

        # comment.js (take user and content as param)

# upload.js
    # big white box that tries to not look like a text box
    # title text box
    # description text box

# list.js
    # takes in list as param. if list length is 0, gets user and maps

--------------

- Make homepage
    - title, logo, and search will be on every page

    - page on load just gets preselected Science, History, Math, and English playlists
    
    - Can make each row a component
        - each row just gets like a bunch of random video ids as input

        - initially, each row will just be a preset of like 4 videos next to each other
            - if more time, have an arrow key mechanism

        - each video thumbnail is a component
            - input is video_id
            - get information from get function

        - clicking takes you to new page

- Make video player
    - just needs video_id as input I guess

    - maybe iframe, if iframe is too bad, then probably look into making a custom player
    
    - comments will be loaded below (get function on loading of page or when scroll direction is down enough)

    - each comment will be a component 

- Upload a video
    - big white box with graphics and text in it (ask for url)
    - need to look up how uploading files goes

    - text boxes for title and description

- search / user page
    - takes in buncha video ids as input
    - need component for video listing