import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Home from '.'

describe("<Home/>", () => {
    it('should have empty search name', () => {
        const {getByTestId} = render(<Home/>)
        expect(getByTestId('search')).toBeEmptyDOMElement()
    })

    it('should have the input name equals title', () =>{
        const {getByTestId} = render(<Home />)
        
        const input = getByTestId('search')
        const valorQualquer = 'lorem'
        userEvent.type(input, valorQualquer)
        expect(valorQualquer).toEqual('lorem')
    })
})