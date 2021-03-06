# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](images/screenshot.png)


### Links

- Solution URL: [github](https://github.com/qirele/frontend-challenges/tree/master/sunnySide)
- Live Site URL: [page](https://qirele.github.io/frontend-challenges/sunnySide/)

## My process

This is the first project that I built using sass.

### Built with

- Semantic HTML5 markup
- SASS, (scss), partials
- Mobile-first workflow
- Flexbox
- CSS Grid


### What I learned

Really proud of this:

```css
header {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 520px;
  background: 
    40px 40px / auto no-repeat url("../../images/logo.svg"),
    bottom center / cover no-repeat url("../../images/mobile/image-header.jpg");
}

.triangle {
  position: absolute;
  width: 25px;
  height: 30px;
  top: -29px;
  right: 0;
  clip-path: polygon(100% 0%, 0% 100%, 101% 100%);
  background-color: white;
}
```


### Continued development

Continue focusing on mobile first development, responsive web pages, accessibility and SASS.

### Useful resources

- [@use @forward](https://www.youtube.com/watch?v=CR-a8upNjJ0) - This helped me learn how to structure a sass directory and import partials sass files.

- [triangles in css](http://www.coding-dude.com/wp/css/create-a-triangle/) - how to make a bloody triangle mate in css
## Author

- Frontend Mentor - [@qirele](https://www.frontendmentor.io/profile/qirele)
