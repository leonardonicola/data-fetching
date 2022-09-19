import { render, screen } from "@testing-library/react";
import Cards from '.'

const mock = {
    title: 'title 1',
    body: 'body 1'
}

describe('<Cards/>', () => {
    it('should render a post with title and body', () => {
        render(<Cards {...mock}/>)
        expect(screen.getByRole('heading', {name: mock.title})).toBeInTheDocument()
        expect(screen.queryByText(mock.body)).toBeInTheDocument()
    })

    it('should match a snapshot', () => {
        const {container} = render(<Cards {...mock}/>)
        expect(container.firstChild).toMatchSnapshot()
    })
})