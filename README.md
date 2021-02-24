This is the fed-assessment created with Nextjs by Tommy Mallis.

## DEMO

[BallerTV - About](https://hungry-swirles-345fb4.netlify.app)

## Host yourself

Clone repo  
```Bash
npm install
``` 

## Serve About page statically with generated HTML:    

Change package.json npm build to 'next build && next export'  

This will build and create a out folder with statically generated pages
```Bash
npm start
```

## Technologies Used

Built using Nextjs, deployed by exporting the statically generated HTML on build and hosting with Netlify.  
More info: [Nextjs Static Exporting](https://nextjs.org/docs/advanced-features/static-html-export)

Styled using SCSS following the [BEM Methodology](https://en.bem.info/methodology/)

ImageCarousel component in the components folder is a quick custom carousel for the press section.

## License

[MIT](https://choosealicense.com/licenses/mit/)
