# Online Resume

Simple online resume built in `React` with `Gatsby`, loading resume data from `yaml` file 
and deploy on github pages.

## Directories

```
.
├── README.md           
├── gatsby-config.js    # Gatsby configuration
├── package.json        # npm configuration
├── package-lock.json   
└── src
    ├── components      # react jsx components
    ├── images          # images
    ├── pages           # home page and 404
    ├── resume.yaml     # resume data 
    └── style           # css files

```


## Development
* Install dependencies
```
npm install
```
* run locally on `localhost:8000`
```
npm start
```
* Change site meta data in `gatsby-config.js` as needed.
* Change personal resume data in `src/resume.yaml`, change the template structure as needed
(you may also have to change components' properties as well then).

## Deploy on github page
Deploy to `https://<username>.github.io/reusme`.  
If you want to deploy on other path, change the `pathPrefix` in `gatsby-config.js`
(there seems to be a bug that the path name has to be identical to the repo name).
```
npm run deploy
```
