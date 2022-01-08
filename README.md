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


## Darya Kutovaya
**Widget:** Related Items

**Additional Areas of Responsibility:** CSS and Styling Management

**Technical Walkthrough and Challenges:**

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

## Brian Dihn
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
