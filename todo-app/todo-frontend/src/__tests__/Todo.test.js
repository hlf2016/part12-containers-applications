import Todo from "../Todos/Todo"
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<Todo />', () => {
  test('should render properly', () => {
    const todo = {
      text: "test todo",
      done: false
    }
    const deleteFn = jest.fn()
    const completeFn = jest.fn()
    render(<Todo todo={todo} deleteTodo={deleteFn} completeTodo={completeFn} />)
    const element = screen.getByText('test todo')
    expect(element).toBeDefined()

    const deleteButton = screen.getByText('Delete')
    const completeButton = screen.getByText('Set as done')
    userEvent.click(deleteButton)
    userEvent.click(completeButton)

    expect(deleteFn.mock.calls).toHaveLength(1)

    expect(completeFn.mock.calls).toHaveLength(1)
  })
})
