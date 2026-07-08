import { render, screen } from '@testing-library/react'
import App from './App'

// Mock window.scrollTo since JSDOM does not implement it
window.scrollTo = () => {}

test('renders the app without crashing', () => {
    render(<App />)
    const elements = screen.getAllByText(/Home/i)
    expect(elements.length).toBeGreaterThan(0)
})