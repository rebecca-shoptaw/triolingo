# Triolingo 🐱📚
Duolingo look-alike to help middle schoolers practice vocab, currently expanding into more subject areas and question types. [Live Site](https://rebeccashoptaw.dev/triolingo/).

<img width="100%"  alt="Triolingo Interface" src="https://github.com/rebecca-shoptaw/rebecca-shoptaw.github.io/blob/main/public/triolingo.png">


## Background & Mission
I built the first version of this site while helping a middle schooler prepare for a high school entrance exam -- I'd found some great word lists online, and I found myself wishing that there were a Duolingo-esque app that I could use to help the students prepare on their own in a fun, hopefully addictive way. As often happens in these circumstances, I went ahead and built it myself, creating and sending out to students the first version of the site in just a single workday.

Once the first version was built, I decided to start working on expanding the site, both introducing more question types and branching out into more subject areas, so as to make it a great learning resource for students (and anyone else!) trying to hone a new skill.

## Built With
- [![React][React-icon]][React-url]
- [![Vite][Vite-icon]][Vite-url]
- [![Typescript][TS-icon]][TS-url]
- [![HTML][HTML-icon]][HTML-url]
- [![CSS][CSS-icon]][CSS-url]
- [![Bootstrap][Bootstrap-icon]][Bootstrap-url]

## UI Walkthrough
The current version of the site mimics the Duolingo UI, starting with a homepage with a clickable lesson tile, which reveals a short description and a "PRACTICE" button. This base version of the UI is designed to scale up easily with the addition of further subject headers, lesson tiles and a (to-be-added) option to switch subjects in the page header.

<img width="60%" alt="Triolingo UI part 1" src="https://github.com/rebecca-shoptaw/triolingo/blob/master/src/assets/UI_1.png">

When the user hits the practice button, they are taken to the lesson view, where the first vocab question is generated (see implementation), and they can select an answer.

<img width="60%" alt="Triolingo UI part 2" src="https://github.com/rebecca-shoptaw/triolingo/blob/master/src/assets/UI_2.png">

If the answer is correct, it will turn blue and the user will get an encouraging message from the site mascot, Trio the cat, and an option to continue. 

<img width="60%" alt="Triolingo UI part 3" src="https://github.com/rebecca-shoptaw/triolingo/blob/master/src/assets/UI_3.png">

If the answer is incorrect, it will turn red, and Trio will let the user know what the correct answer was. If this happens, the user will also lose one of the three hearts. Once they've lost all three, if they get one more question wrong, they lose the game.

<img width="60%" alt="Triolingo UI part 4" src="https://github.com/rebecca-shoptaw/triolingo/blob/master/src/assets/UI_4.png">

If the user loses all the hearts before the lesson is up, they will get an encouraging message from Trio and an option to try again with the same word set. If they make it through all 20 of the lesson questions with enough hearts intact, they will get a congratulatory message, and the option to try again with the same word set or try a new word set.

<img width="60%" alt="Triolingo UI part 5" src="https://github.com/rebecca-shoptaw/triolingo/blob/master/src/assets/UI_5.png">
<img width="60%" alt="Triolingo UI part 6" src="https://github.com/rebecca-shoptaw/triolingo/blob/master/src/assets/UI_6.png">


## Implementation
### Note
A full code refactor restructure is in progress as planned, and the information below is no longer fully accurate; will be replaced when the restructure is finished.

### Question Algorithm
In the current version of the site, the question data comes from an array of more than 500 word/definition pair arrays:
```
["conventional", "customary"],
["ascertain", "find out"],
["assailable", "vulnerable"],
["assail", "attack"]
```
When a new lesson begins from the homepage, a new mini array of 60 words is randomly generated from the larger array: 
```
    let addIndex = 0;
    while (freshArr.length <= 60) {
      addIndex = Math.floor(Math.random() * wordsArr.length);
      if (!freshArr.includes(wordsArr[addIndex])) {
        freshArr.push(wordsArr[addIndex]);
      }
    }
```
This array is then stored in state (`setMiniArr(freshArr`) to be used throughout the lesson, and in the following lesson if the user practices again with the same word set.

The main question-generating function used in the algorithm is `nextQ`, which is triggered both on-click and the first time the lesson begins. The process is as follows:

1. Check the number of questions answered and number correct/incorrect to confirm the game should not be over
2. Reset relevant state values and remove any styling from buttons
3. Randomly select one of the word/answer pairs to use as the question: `const questionIndex = Math.floor(Math.random() * setArr.length);`
4. Randomly select three other word/answer pairs to use as the wrong answers:
```
while (answersIndex.length < 3) {
        const i = Math.floor(Math.random() * setArr.length);
        if (i != questionIndex && !answersIndex.includes(i)) {
          answersIndex.push(i);
        }
      }
```
5. Randomly select which of the 4 answer slots should hold the correct answer, and store the number value in state as `correct` to use for the validation process
6. Store the question and correct and three incorrect answers in state to be used to render the lesson view and check user answers. 

### Answer Checking Algorithm
When the user selects an answer, that number value is stored in state as `selection`, and when the user hits the check button, this is passed off to the fairly straightforward answer-checking `validate` function, which works as follows: 
1. Confirm that a selection has been made (`selection != 0`)
2. Store copies of current state values for `numCorrect`, `numIncorrect` and `numAns` locally to avoid render issues when re-setting state
3. Query to find the selected button, which will have an id identical to the associated selection: `const btn = document.getElementById(selection.toString())`
4. Check the answer by simply comparing the `selection` and `correct` numbers
5. React to a correct vs. incorrect answer by incrementing either the `numIncorrect` and `numCorrect` value, adding the appropriate style class to the selected button, and incrementing the `numAns` value.
   
This will trigger the visibility of the `correct-result` vs. `incorrect-result` divs, and will switch the text and `onClick` functionality of the "Check" button to make it instead read "Continue" and triggers the `nextQ` funtion.

### Hearts & Progress Bar
The hearts that represent the user's "lives" in-game are simple Bootstrap icons that are shown or hidden depending on the value of the `numIncorrect` state variable, so they are re-rendered and updated each time this changes:
```
<div id="hearts-box">
  {numIncorrect == 0 && <i className="bi bi-heart-fill"></i>}
  {numIncorrect <= 1 && <i className="bi bi-heart-fill"></i>}
  {numIncorrect <= 2 && <i className="bi bi-heart-fill"></i>}
</div>
```

The progress bar has a very simple implementation, just a nested blue fill with a width determined by number of questions answered (`numAns`) divided by the total number of questions, which updates each time the number changes, and will update each time the total number of questions once the redo feature is implemented.

## Next Steps
- [ ] Because the initial version of the site was built very quickly, it is in desperate need of modularization and DRYing up, which will include:
    - [ ] Shifting the different parts of the site to different components and troubleshooting parent-child relationships to ensure the program remains functional
      - [x] Subdivide into separate components as needed
      - [x] Begin incorporating custom hooks
      - [ ] Optimize data flow between components
      - [ ] Finalize Redux integration
    - [x] Replacing repetitive code both in Typescript functions and in the HTML with clean, efficient code
    - [x] Splitting up oversized functions such as `nextQ` into smaller, straightforward functions
    - [x] Ensuring that only necessary state variables and functions are used
    - [ ] Switch styling from CSS to SCSS
          
The modularization and cleaning up of the code will make it far easier to re-use and possible the next big step:
- [ ] Introducing new question types and subject areas
    - [ ] Adding functionality for different question types (definition-first questions, analogy questions, multiple choice questions with pre-set answer choices and order, etc.), which will help allow for:
    - [ ] Adding new subjects, both within the middle school academics (SSAT section), and within new, separate disciplines

And another less urgent but still fun item on the agenda:
- [ ] Cosmetic improvements
    - [ ] Add animations via GSAP and custom hooks
    - [ ] Add more different versions of Trio (and perhaps some friends of his as well!)
    - [ ] Bring the design of the "game over" screen closer to the Duolingo equivalent

## Long-term Goals
- [ ] Work with a team to build a backend to store question data more efficiently, and perhaps save user data as well so users can track their progress
- [ ] Invite contributors to build and maintain an open-source academic curriculum over a number of subjects, essentially creating a many-subject, contributor-friendly version of Duolingo

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact
Rebecca Shoptaw - 
[email](mailto:rebecca@rebeccashoptaw.dev) | [linkedin](https://www.linkedin.com/in/rebeccashoptaw/)


<!-- Links and Icons --> 
[React-icon]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Vite-icon]: https://img.shields.io/badge/-Vite-20232A?style=for-the-badge&logo=vite&logoColor=646CFF
[Vite-url]: https://vitejs.dev/
[TS-icon]: https://img.shields.io/badge/-Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=3178C6
[TS-url]: https://www.typescriptlang.org/
[HTML-icon]: https://img.shields.io/badge/-HTML5-20232A?style=for-the-badge&logo=html5&logoColor=E34F26
[HTML-url]: https://www.w3schools.com/html/
[CSS-icon]: https://img.shields.io/badge/-CSS3-20232A?style=for-the-badge&logo=css3&logoColor=1572B6
[CSS-url]: https://www.w3schools.com/css/
[Bootstrap-icon]: https://img.shields.io/badge/-Bootstrap-20232A?style=for-the-badge&logo=css3&logoColor=7952B3
[Bootstrap-url]: https://getbootstrap.com/
