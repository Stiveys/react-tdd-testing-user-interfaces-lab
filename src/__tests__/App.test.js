import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);

    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });

    expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text", () => {

    render(<App />);

    const image = screen.getByRole("img", {
        name: /profile/i,
    });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text 'About Me'", () => {
   
    render(<App />);

    const aboutMeHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: true,
        level: 2,
    });


    expect(aboutMeHeading).toBeInTheDocument();
});

test("displays a paragraph for the biography", () => {

  render(<App />);


  const bioParagraph = screen.getByText(/Your biography here/);


  expect(bioParagraph).toBeInTheDocument();
});

test("displays a link to the github page", () => {

    render(<App />);

    const githubLink = screen.getByRole("link", {
        name: /github/i,
    });

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href");
});

test("displays a link to the linkedin page", () => {

    render(<App />);

    const linkedInLink = screen.getByRole("link", {
        name: /linkedin/i,
    });

    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute("href");
});