import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page.tsx";
import { act, fireEvent } from "@testing-library/react";

import React from "react";
describe("Home", () => {
  it("renders a menu button", () => {
    render(<Home />);
    const menu = screen.getByTestId("custom-menu");
    expect(menu).toBeInTheDocument();
  });
  it("renders a sidebar", () => {
    render(<Home />);
    const menu = screen.getByTestId("custom-menu");
    expect(menu).toBeInTheDocument();
    fireEvent.click(menu);
    const sideBar = screen.getByTestId("side-bar");
    expect(sideBar).toBeInTheDocument();
  });
//   it("renders a change a state", () => {
//     render(<Home />);
//     const setIsSideBarOpen = jest.fn();
//     //  const wrapper = render(<Home onClick={setIsSideBarOpen} />);
//     jest.spyOn(React, "useState");
//     const handleClick = jest.spyOn(React, "useState");
//     handleClick.mockImplementation((isSideBarOpen) => [
//       isSideBarOpen,
//       setIsSideBarOpen,
//     ]);
// wrapper.expect(setIsSideBarOpen).toBeCalled();
//     // Getting the menu element
//     const menu = screen.getByTestId("custom-menu");
//     expect(menu).toBeInTheDocument();
//   });
});
