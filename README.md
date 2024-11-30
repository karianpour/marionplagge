# Marion Plagge Web Site

## Before every thing

You need to have nodejs installed on you computer. Then on the root of this project:

```bash
# to install dependencies
npm i
```

## Developing

To run the project on you local computer and do changes and check them on you computer:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Deploy on On Github pages

To check the site on [github pages](https://karianpour.github.io/marionplagge/zouttherapie)

```bash
npm run deploy-on-gh-pages
```

## Deploy on server

```bash
npm run build
```

You can preview the production build with `npm run preview`.

The copy the content of the 'build' directory to the server

```bash
# on the root of the project :
rsync -av --progress ./build remko:/home/k-one/marionplagge

```
