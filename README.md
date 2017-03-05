# Social Media Planner

Project for Get Noticed competition.
[work in progress]

Works I describe on http://nettecode.com (only in Polish for now)

## Quick start

### Get the latest version:
```shell
$ git clone https://github.com/nettecode/dsp2017.git
$ cd SMPlanner
```

### Run `npm install` to install necessary dependencies.
### Run `npm start` to start project.
### Go to `localhost:1234` in your browser.
Ready :)

(whenever you modify any of the source files inside the /src folde, Webpack will recompile app and refresh it in the browser)

## Directory Layout
```
├── /dist/                              # The folder for compiled output
├── /node_modules/          # 3rd-party libraries and utilities
├── /src/                               # The source code of the application
│   ├── /components/         # React components
│   ├── index.html
│   ├── index.js
│   └── main.css
│── package.json                # The list of 3rd party libraries and utilities
└── webpack.config.js        # Configurations for client-side and server-side bundles
```