# React_Intro - Lesson Plan

## Structure of the day
* Intro for all students on Multi Page vs Single Page apps
* Students start working on reader exercises
* Students follow workshops in a different room:

Number | Title | Learning Goals | Length | Laptop Allowed? |
--- | --- | --- | --- | --- | 
10:15 | **_An optimized clock_** | Refresh dom knowledge, understand computer friendly code is not always developer friendly and vice versa, know how to plan building an app | 45 min. | yes |
11:45 | **_React: Why it is everyone's cup of tea_** | Understand what makes React computer friendly and what makes it developer friendly | 45 min. | No |
13:30 | **_Create React App: What is not part of react_** | Understand `create-react-app` fill structure, know what Babel, Jest, Reaxct-dom and Webpack are used for | 45 min | yes |
15:00 | **_Components, Properties and State_**| What components, props and state are, how props are diferent from components |30 min. | No |

* Students work on labs
* Do recap with kahoot

## Intro
**_Introducing students to the idea of a single page application, discuss advantages_**
### Materials
 - [SPA vd MPA](https://medium.com/@jainshilpa1993/ultimate-death-match-spa-vs-mpa-82e0b79ae6b6)

## Workshop I: An optimized clock
**_Building a clock in vanilla JS, according to 4 steps, while introducing students to the developer/computer friendly paradox, that what is nice for a computer, is not always nice for a developer, and vica versa._**

Start with presenting the learning goals

Make sure the following steps end up on the white board
* **Step 1: What are you going to build?**
    - Draw end product on white board
* **Step 2: Research the info you need**
    - Ask students: what do you need? (HTML, CSS, JS, getElementById, Date())
    - Give students some time to gather some info on getElementById, Date()
    - Gather info on white board, make sure getHours(), getMinutes(), getSeconds() is there, show why time is not useful
* **Step 3: Write your plan in English**
    - For JS: I need to display the time (so get the hours, minutes and seconds and add them to an elements) and update that time everyone second
    - As for CSS: You want different colors for hours, minutes and seconds and they should be next to each other
    - HTML: following from the above, you probably want a `<div>` for clock (for flexbox), a `<div>` for hours, minutes and seconds each, and colons to separate them.
* **Step 4: Write your Code**

    * Let students create the clock, after live code an example
* Let students create optimized clock in groups, after live code an example
* Show the difference of the optimized and not opimized clock, show how that is problematic in the wave (fastest speed)
* Explain the problem: code that is easy to read & maintain is not always nice to your browser, code that is good for the browser is not always friendly for the developer.

### Materials
 * Student laptops
 * Whiteboard
 * Screen
 * Pieces of paper/pens
 * [Dom Exercises](https://github.com/Codaisseur/React_Intro/tree/master/dom-exercises)
 

## Workshop II: React: Why it is everyone's cup of tea
**_Live coding session to introduce react as an element on an html page and display developer friendliness, lecture on virtual dom_**
1. Show learning goals.
1. Introduce React a library to optimize your code for both computer and programmer
    - **Ask:** What is a library?
    - **Mention:** React uses something called a Virtual Dom to optimize the process of building of the DOM. 
    -  **Explain** Just as we wrote code to optimize the performance of our clock, React does the same. How? Render tree processes (use drawing)
2. Explain in code
    - Show `00-welcome` - simply js
    - Rewrite using React (see `01-welcome.html`)
        - **Show:** Import library
        - **Remind:** Former workshop: Make a plan (check end result, what should I research, what do you need (in english)(//render element, //create element, //get name) write code
        - **Show:** Code to get name and create element
        - **Explain:** needs to go through Virtual Dom
        - **Show:** `React.render()` code
        - **Ask:** How does it know it should go through the virtual DOM?
    - Still not developer friendly:
        - Rewrite create element code using JSX (see`02-welcome.html`) (using babel)
3. Explain some cool stuff about JSX (make sure a list is on whiteboard):
    - JSX = JavaScript (even though it looks like html)
    - To use JS (rather than display something), wrap your code in `{ }`
    - Everything you want to render is usually collected in one class called `App`, which should extend `React.PureComponent`.
    - A class always has a `render` function.
    - A `render`-function always has a return statement.
    - Everything you return in the `return`-statement should always be wrapped in one element (usually a `div`)
    - Your JS should still look like JS (only html changes and you can use ES6)
    - You can even render a `class` inside another `class`! (Show that you have to write it like `<Students />` in your `App`-class)
    - **Exercise:** students should implement the `Students`-class from `03-welcome-extra.html`. They should create an empty class students (with render and return), create const students which is an array with student names, render the text 'You will be joining + names' on screen. Shortest code wins!
    ![End result](https://cd.sseu.re/Welcome_2018-07-15_22-47-10.png)
4. **Recap:** React is computer friendly through the virtual dom and developer friendly through JSX.


### Materials
* Screen
* [Welcome](https://github.com/Codaisseur/React_Intro/tree/master/IntroducingReact)
* Whiteboard
* ![dom tree](https://cd.sseu.re/DSC_0124.JPG_2018-07-12_20-31-57.png)

## Workshop III: Create React App: What **is not** part of react
**_Introduce the structure of a `create-react-app`, in groups students will prepare and present a short presentation on what `react-dom`, `jest`, `webpack` and `babel` are about_**
### Materials

## Workshop IV: Components, Properties and State
**_Live code exercises from the [Reader](https://readest.codaisseur.com/courses/intermediate-bootcamp/06-react/04-explore-react)_**
1. Explain props (use whiteboard)
2. Show props in code
3. Explain state (use whiteboard)
4. Show state in code
### Materials
* Screen
* Whiteboard
* [Reader](https://readest.codaisseur.com/courses/intermediate-bootcamp/06-react/04-explore-react)

## Recap
**Make students fill in the quiz real-time, discuss the answers.**

First open the link, click on 1:1 so game id appears:

Tell students to:
* Click the link
* Go to [kahoot.it](https://kahoot.it/)
* Enter the game pin and a nick name
* Wait, they can answer on the screen where they entered the game pin

### Materials
* [Link to kahoot quiz](https://play.kahoot.it/#/k/9b89ab19-94c1-4ab4-be58-ca3a0f374a9c)
