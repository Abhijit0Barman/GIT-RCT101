import { Box, Container } from '@chakra-ui/react';
import Books from './components/books/Books';


export default function App() {

  return (
    <Container maxW="container.xl">
      {/* Import Books.jsx component here */}
      <Books />
    </Container>
  );
}
