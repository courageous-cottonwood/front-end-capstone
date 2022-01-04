import React from 'react';
import {render, fireEvent, waitForElement, screen} from '@testing-library/react'
import QA from '../src/questions-answers/index.jsx';
import Question from '../src/questions-answers/question.jsx'
import sampleData from './sampleQAData.js';

let product_id = 63609;

//should render with a product id
test('should render with a product id passed as a prop', () => {
  render(<QA product_id={product_id}/>);
  expect(screen.getByText("Load More Questions"));
});

//should load two questions on load

test('should load two questions on load', async () => {
  render(<QA product_id={product_id}/>);
  fireEvent.click(screen.getByText('Load More Questions'))
  const question = waitForElement(screen.getByTestId("question"));
  expect(question).toBeInTheDocument()
});

//each question should show 'Q:'
test('each question should show Q:', () => {
  //load the main module
  render(<QA />);
  //load data from API using useEffect

  //wait for a question to be loaded
  const question = waitForElement(screen.getByTestId("question"));
  //then make sure
  expect(question).toBeInTheDocument()
});

//if answers, should load answers
test('if answers, should load answers', () => {
  render(<Question />);
  //render a question with question data
  //check to see if answers are loaded
});

//each answer should show 'A;'

//each answer should show two buttons, one report, one found this helpful

