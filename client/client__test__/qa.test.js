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
test('each question should show Q:', () => {
  render(<Question questionData={sampleData.results[0]} />);
  const question = screen.getByTestId('question-text');
  expect(question).toBeTruthy();
});

test('if answers, should load two answers', () => {
  render(<Question questionData={sampleData.results[0]} />);
  const answer = screen.getAllByText("A:");
  expect(answer.length).toEqual(2);
});


//each answer should show 'A;'

//each answer should show two buttons, one report, one found this helpful

