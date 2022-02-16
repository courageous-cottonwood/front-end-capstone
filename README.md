# HackReactor • Front-End Capstone

This is an application that was developed as a group for the HackReactor front-end capstone project. The main project objective was to develop a single-page application that rendered product information from a third-party API into an e-commerce style product page. 

The page included four distinct sections: detailed product information, related products, questions and answers, and products reviews, with each team member producing one of the four individual components. 

![](https://i.imgur.com/44pVrTl.png)

## Technology
The project was built using React 17 using functional classes, and served using an expressJS Server. Following the satisfaction of all business requirements, the completed application was deployed to an AWS server for public consumption.

# Team

## Brandon Tsai
**Widget:** Product Detail

**Additional Areas of Responsibility:**  Server Production and Management

**Technical Walkthrough and Challenges:**

The product detail overview section displays all of the products and styles available in stock, where the product/style's data is fetched from an API call to the server.

Challenges:
- Initial fetching for the description and photos of the current selected product
- Fetching for the multiple styles available for that currently selected product
- Re-rendering of component when different style is selected
- Pop-up modal for currently displayed style photo, allows for a larger image pop-up on click
- Carousel display for all available styles for selected product, scroll through photos displayed by clicking on arrow


## Darya Kutovaya
**Widget:** Related Items

**Additional Areas of Responsibility:** CSS and Styling Management

**Technical Walkthrough and Challenges:**

Breaking down a big component into smaller sections and requesting only the data needed for each smaller component to display so API does not have too many fetch requests, gradual fetching.
- Initial Fetching in RelatedApp component: related item array fetch, individual item fetch.
- Thumbnail fetch for each card in Item component
- Re-render of entire app with selected item triggered on an item title click.
- Item rating fetch and calulation of average rating, rendering of stars in StarRating component
- Compare fetatures betweeen the parent item and indivaidual item fetch in Compare modal component fired on "compare me" button click event.

## Sean Welch
**Widget:** Questions Answers

**Additional Areas of Responsibility:** Time and Deliverable Management

**Technical Walkthrough and Challenges:**

The questions and answers portion of the app is driven first by an API call to the server to fetch the data required to render the components. Each section is broken down into the following components:

* Questions
* Search
* Answers
* Images
* Forms

Forms and images use a modal format to present the user with a focused view to view images or complete forms.

One main challenge was ensuring that data was rendered quickly, which meant mitigating API calls unless necessary. For example, all question data for each is only fetched when the user first clicks into the search bar, limiting the API call unless the user specifically intends to search.

## Brian Dinh
**Widget:** Product Reviews

**Additional Areas of Responsibility:** Project Management in Trello

**Technical Walkthrough and Challenges:**



# Installation:

**Clone the repository:**
```
git clone https://github.com/courageous-cottonwood/front-end-capstone.git
```
**Install the packages:**
```
npm i
```
**Add a config file in the `client/src/config` folder.**

**Build**:
```
npm run production
```
**Start**:
```
npm run start
```
