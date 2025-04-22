import styled, { ThemeProvider, keyframes } from 'styled-components';
import { theme } from './theme';

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
`

const Card = styled.div`
  padding: 24px;
  border-radius: 12px;
  background: ${props => props.theme.colors.white};
  text-align: center;
  animation: ${fadeIn} 0.6s ease-in-out;
  animation: ${bounce} 0.4s infinite;
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
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Title>Selamat datang di pelajaran CSS-in-JS</Title>
        <Subtitle>Eirin Yagokoro</Subtitle>
        <Button variant="blue">Lanjut Belajar!</Button>
        <Button>Kembali</Button>
      </Card>
    </ThemeProvider>
  );
}
