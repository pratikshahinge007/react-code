import { fireEvent, render,screen } from "@testing-library/react";
import App from './App';

test("Testing To do list", ()=>{
  render(<App/>)
  const toDoText = screen.getByText(/To-Do List/i);
  expect(toDoText).toBeInTheDocument()
  const title = screen.getByTitle("React logo")
  expect(title).toBeInTheDocument()
})
test("Testing To do list", ()=>{
  render(<App/>)
  const toDoText = screen.getByText(/To-Do List/i);
  const title = screen.getByTitle("React logo")
  const toDoText2 = screen.getByText("with JavaScript")
  expect(toDoText).toBeInTheDocument()
  expect(title).toBeInTheDocument()
  expect(toDoText2).toBeInTheDocument()
})

test("textbox is present", () => {
  render(<App/>)
  const textboxPresent = screen.getByRole('textbox')
  expect(textboxPresent).toBeInTheDocument()
})


test('matches the snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('test placeholder text', () => {
  render(<App/>)
  const placeholder = screen.getByPlaceholderText("Enter a new task")
  expect(placeholder).toBeInTheDocument()
})

// test("test label", () => {
//   render(<App/>)
//   const label = screen.getByLabelText(/input_data/i)
//   expect(label).toBeInTheDocument()
// })

// test("test form submission", () => {
//   render(<App/>)

//   const input = screen.getByLabelText(/input_data/i)
//   fireEvent.change(input, {target :{value :"John"}}) 
//   expect(input.value).toBe("John")

//   const button = screen.getByRole("button", {name : /Submit/i})
//   fireEvent.click(button)
//   expect("form submitted").toBeInTheDocument()

//   const submissionMessage = screen.getByText("submitted Successfully")
//   expect(submissionMessage).toBeInTheDocument()
// })



