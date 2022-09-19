import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from ".";
import { rest } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/posts",
    async (req, res, ctx) => {
      return res(
        ctx.json([
          {
            userId: 1,
            id: 1,
            title: "title 1",
            body: "body 1",
          },
          {
            userId: 2,
            id: 2,
            title: "title 2",
            body: "body 2",
          },
          {
            userId: 3,
            id: 3,
            title: "title 3",
            body: "body 3",
          },
          {
            userId: 4,
            id: 4,
            title: "title 4",
            body: "body 4",
          },
          {
            userId: 5,
            id: 5,
            title: "title 5",
            body: "body 5",
          },
        ])
      );
    }
  ),
];

const server = setupServer(...handlers);

describe("<Home/>", () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it("should have empty search name", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("search")).toBeEmptyDOMElement();
  });

  it("should have the input name equals title", () => {
    const { getByTestId } = render(<Home />);

    const input = getByTestId("search");
    const valorQualquer = "lorem";
    userEvent.type(input, valorQualquer);
    expect(valorQualquer).toEqual("lorem");
  });

  it("should render posts", async () => {
    render(<Home />);
    const noPosts = screen.getByText("Sem posts!");
    await waitForElementToBeRemoved(noPosts);
    expect(
      screen.getByRole("heading", { name: "title 1" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "title 2" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "title 3" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "title 4" })
    ).toBeInTheDocument();
  });

  it("should search for posts", async () => {
    render(<Home />);
    const noPosts = screen.getByText("Sem posts!");
    await waitForElementToBeRemoved(noPosts);
    const search = screen.getByTestId("search");
    userEvent.type(search, "title 1");

    expect(
      screen.getByRole("heading", { name: "title 1" })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: "title 2" })
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: "title 3" })
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: "title 4" })
    ).not.toBeInTheDocument();
  });

  it("shouldn't have value on input", async () => {
    render(<Home />);
    const noPosts = screen.getByText("Sem posts!");
    await waitForElementToBeRemoved(noPosts);
    const search = screen.getByTestId("search");
    expect(search.value).toBe("");
  });

  it("should load more posts", async () => {
    render(<Home />);
    const noPosts = screen.getByText("Sem posts!");
    await waitForElementToBeRemoved(noPosts);
    const button = screen.getByText("VER MAIS");
    userEvent.click(button);
    expect(
      screen.getByRole("heading", { name: "title 5" })
    ).toBeInTheDocument();
  });
});
