# International Website_V2
The community website for newcomers in Canada using React + Redux with Typescript, Express.js and MongoDB

## What Tech I Use
- Front-End     : React + Redux + Typescript
- Back-End      : Express
- Database      : MongoDB + Mongoose
- Testing Tools : Storybook, Cypress

## What is Atomic Design Pattern?
![image](https://user-images.githubusercontent.com/37981164/94701004-23327e00-030a-11eb-8d4e-a95429fa42d8.png)

Atomic Design Pattern is design system that creates a full UI page, combining atomic elements(small components) with other elements(Molecules, Organisms)


## Why I introduce Atomic Design Pattern?
1. I want to make more reusable component so the time will be saved.
2. Code is more consistent so it will be easy to maintain the code.

## Limitations
* There are too many business login in Page stage and painful Prop Drilling.
  * To seperate business login and UI logic, All business logics are put together in Page stage, so it is going to be hard to read the code.
  * To reach out event and data all the way down to the atoms, I have to create so many props and props drilling.

* Most of names of .tsx files are called `index.tsx`, which makes me confused of which one is which.
