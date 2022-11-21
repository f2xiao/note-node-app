# note-node-app

## Setup with docker
1. build the image: 

    `docker build -t <imgTagName> .`

2. run the image with bind mounts: 

    `docker run -w /usr/src/app -v ./:/usr/src/app <imgTagName> sh -c "npm install && npm run dev"`
