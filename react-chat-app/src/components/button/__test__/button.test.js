import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from "react-test-renderer";

import switchTheme  from "../../Chat_functionts/switchtheme";

afterEach(() => {
    cleanup();
});
//clean up after every single test to clean up render

it("renders without crashing", ()=> {
    const div=document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="x"></Button>)
    expect(getByTestId('button')).toHaveTextContent("x")
})

it("matches snapchot 1", () => {
    const tree = renderer.create(<Button label="xx"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

it("matches snapchot 2", () => {
    const tree = renderer.create(<Button label="x"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('the best flavor is grapefruit', () => {
    expect(switchTheme(true)).toBe("dark_mode");
  });