/** @jsxImportSource @emotion/react */
import { css, ThemeProvider, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const theme = {
  colors: {
    red: '#f44336',
    blue: '#3f51b5',
    white: '#fff',
  },
};

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Card = styled.div`
  padding: 24px;
  border-radius: 12px;
  background: ${props => props.theme.colors.white};
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;
  animation: ${bounce} 0.4s infinite:
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.red};
`;

const Subtitle = styled.h3`
  color: ${props => props.theme.colors.blue};
`;

const buttonStyle = variant => css`
  padding: 8px 16px;
  margin: 8px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  background: ${variant === 'blue' ? theme.colors.blue : 'transparent'};
  color: ${variant === 'blue' ? 'white' : theme.colors.red};
  border: 2px solid ${variant === 'blue' ? 'transparent' : theme.colors.red};

  &:hover {
    transform: scale(1.05);
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Title>Selamat datang di pelajaran CSS-in-JS</Title>
        <Subtitle>Marisa Kirisame</Subtitle>
        <button css={buttonStyle('blue')}>Lanjut Belajar!</button>
        <button css={buttonStyle('red')}>Kembali</button>
      </Card>
    </ThemeProvider>
  );
}
