import React, { useState } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
`;

const Card = styled.div`
  padding: 24px;
  border-radius: 12px;
  background: ${props => props.theme.colors.white};
  text-align: center;
  animation: ${fadeIn} 0.6s ease-in-out, ${bounce} 1s infinite;
  transition: background 0.3s ease;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.red};
`;

const Subtitle = styled.h3`
  color: ${props => props.theme.colors.blue};
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 8px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  background: ${props => props.variant === 'blue' ? props.theme.colors.blue : 'transparent'};
  color: ${props => props.variant === 'blue' ? 'white' : props.theme.colors.red};
  border-color: ${props => props.variant !== 'blue' && props.theme.colors.red};

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  transition: all 0.3s ease;
`;

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Card>
        <Title>Selamat datang di pelajaran CSS-in-JS</Title>
        <Subtitle>Eirin Yagokoro</Subtitle>
        <Button variant="blue">Lanjut Belajar!</Button>
        <Button>Kembali</Button>
        <Button onClick={toggleTheme}>
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </Button>
      </Card>
    </ThemeProvider>
  );
}
