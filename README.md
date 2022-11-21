# note-node-app

## Setup with docker
1. build the image: 

    `docker build -t <imgTagName> .`

2. run the image with bind mounts (i.e. mount a file path): 

    `docker run -w /usr/src/app -v ${PWD}:/usr/src/app <imgTagName> sh -c "npm install && npm run dev"`
    
    or
    
    `docker run --mount type=bind,src=${PWD},dst=/usr/src/app <imgTagName> sh -c "npm install && npm run dev"`
