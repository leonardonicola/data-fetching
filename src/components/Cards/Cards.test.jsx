import { render, screen } from "@testing-library/react";
import Cards from '.'


describe('<Cards/>', () => {
    it('should render a post with title and body', () => {
        render(<Cards title="lorem" body="ipsum"/>)
        expect(screen.queryByText('lorem')).toBeInTheDocument()
        expect(screen.queryByText('ipsum')).toBeInTheDocument()
    })
})