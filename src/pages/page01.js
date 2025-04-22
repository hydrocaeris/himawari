import { styled } from '@linaria/react';

const Card = styled.div`
  padding: 24px;
  border-radius: 12px;
  background: white;
  text-align: center;
  animation: fadeIn 0.6s ease-out;
  animation: bounce 0.7s infinite;
`;

const Title = styled.h1`
  color:rgb(54, 244, 70);
`;

const Subtitle = styled.h3`
  color: #3f51b5;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 8px;
  font-weight: bold;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;

  &.blue {
    background:rgb(96, 108, 181);
    color: white;
  }

  &.red {
    background: transparent;
    color: #f44336;
    border-color: #f44336;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default function App() {
  return (
    <Card>
      <Title>Selamat datang di pelajaran CSS-in-JS</Title>
      <Subtitle>Sanae Kochiya</Subtitle>
      <Button className="blue">Lanjut Belajar!</Button>
      <Button className="red">Kembali</Button>
    </Card>
  );
}
