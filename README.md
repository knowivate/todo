# Todo

## Versions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3. and Bootstrap version 5.2

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

## Problem Statement

- Simple page which has 3 column lists and each column will contain multiple cards. (`Bootstrap is used for design`)

- The order of the cards should be maintained. Even after refresh (`LocalStorage is used to Store & Maintain the Data`)

- The card should show a title and a description.

- There should be a button at the top to add a new card.
- **_(Bonus Point)_** User should be able to move a card from one column to another by drag and drop. (`User can drag & drop card from one column to another column. Here @angular/cdk/drag-drop Library is used.`)

---

### Add Card

- On clicking the add card button, a modal popup should be shown with a form.

- The form should contain title, description and column selection dropdown.

- Title should be validated and should only contain alphabets. (`Proactive and Reactive Form Validation approach is used. Only alphabets inputs allowed`)

- Description should be validated and should be minimum 25 characters. (`Atleast 25 character required`)

- On submit, the card should be added to the end of the selected column. (`Card is being added to the end of the Selected Column.`)

---

### Edit Card

- On clicking a card, the add card modal popup should be shown with the add card form with the pre-filled data. (`Showing edit card with pre-filled data`)

- If the user changes the column then, the card should be added to the end of the selected column. (`If the User makes changes in the Card, it is shown at the end of the Column`)

- There should be a button to delete the card in the popup. (`There is a Delete Button in the Pop-up of the Edit Card from which the card can be Deleted`)

---

## Instructions

- Use simple bootstrap components (additional libraries and css can be used but does not have any weightage in the review).

- Angular should be used and the codebase should be AOT compilable. (`Angular is used, version 14.1.3`)

- Host the resulting web-page as a simple website in a github.io page or any other static host. (`Hosted in netlify: https://todoprojectofkheersagarpatel.knowivate.com/`)

- The codebase should be hosted in a public git repository. (`https://github.com/knowivate/todo`)

---

## Deliverables

- Link to the static hosted page. [https://todoprojectofkheersagarpatel.knowivate.com/](https://todoprojectofkheersagarpatel.knowivate.com/)

- Link to the public git repository. [https://github.com/knowivate/todo](https://github.com/knowivate/todo)

- Documentation (On Webpage) [https://todoprojectofkheersagarpatel.knowivate.com/about](https://todoprojectofkheersagarpatel.knowivate.com/about)

- Documentation (On GitHub) [https://github.com/knowivate/todo#readme](https://github.com/knowivate/todo#readme)

---
