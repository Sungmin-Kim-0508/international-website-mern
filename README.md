# International Website_V2

## Description
The community website for newcomers in Canada using React + Redux with Typescript, Express.js and MongoDB

## What Tech I Use
- Front-End     : React + Redux + Typescript
- Back-End      : Express
- Database      : MongoDB + Mongoose
- Testing Tools : Storybook, Cypress

## What is Atomic Design Pattern?
UI 디자인을 작은 원자(컴포넌트) 단위로 하나씩 구성하면서 컴포넌트 단위의 크기를 크게 해나가면서 하나의 페이지를 완성하는 디자인 시스템이다. Atoms, Molecules, Organisms, Templates, Pages, 5단계로 이루어져 있고, Atoms에서 Page로 구성되어 있다.

Atomic Design Pattern is design system that creates a full UI page, combining atomic elements(small components) with other elements(Molecules, Organisms)


## Why I introduce Atomic Design Pattern?
1. I want to make more reusable component so the time will be saved.
2. Code is more consistent so it will be easy to maintain the code.

## Limitations
* There are too many business login in Page stage and painful Prop Drilling.
  * To seperate business login and UI logic, All business logics are put together in Page stage, so it is going to be hard to read the code.
  * To reach out event and data all the way down to the atoms, I have to create so many props and props drilling.

* Most of names of .tsx files are called `index.tsx`, which makes me confused of which one is which.