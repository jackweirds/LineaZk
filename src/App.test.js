// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LineaZk title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LineaZk/i);
    expect(titleElement).toBeInTheDocument();
});
