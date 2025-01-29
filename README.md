# Overview

This project displays a simple, static webpage of an Aesop's Fable using Create React app.

2. Features

- Displays a classic Aesop's Fable to a React webpage on localhost:3000
- Uses React components for modular design
- Uses simple global styling for consistency

# Installing Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Run `npm install` to install all dependencies.

## Available Scripts

In the project directory story-app, you can run `npm start` to launch the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Structure

```
/src
 ├── /components    # Contains React components for the webpage
 │    ├── global.css    # Global styling variables
 ├── /assets/images    # Background images & illustrations
 ├── App.js    # Main component rendering the story
 ├── App.css # App-wide styles
```

`./src/components` contains the webpage's styling and content.

`./src/components/global.css` contains all global styling variables used across the other CSS stylesheets in the components directory.

`./src/App.js` and `./src/App.css` displays any imported components from the Components folders to the page.

`./src/assets/images` contains all of the background images and images used for the project.

## Credits

The following sources were used for images, design inspiration, and content reference:

[Library of Congress - The Tortoise and the Hare](https://read.gov/aesop/025.html): Original fable of The Tortoise and the Hare, which inspired the design and images.

[Unsplash - Getty Images](https://unsplash.com/illustrations/an-updated-illustration-of-some-barren-winter-trees-Fa1MZ9ZXG4g): Vector illustration featuring barren winter trees, used for the header and footer background images.

[Interesting Literature - Dr. Oliver Tearle](https://interestingliterature.com/2021/02/aesop-hare-and-tortoise-fable-summary-analysis/): Summary and analysis of The Hare and the Tortoise used as inspiration for the project’s story summary.

[Anthropic - Claude](https://www.anthropic.com/): Used for styling inspiration, generating alt text, and summary ideas.  