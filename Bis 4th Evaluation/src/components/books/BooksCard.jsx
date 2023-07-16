import { Heading, Text, VStack } from "@chakra-ui/react";

function BooksCard({ title, author, category, isbn, publication_date }) {
  return (
    <VStack data-cy="book_card" spacing={4} bg='white' textAlign='center' rounded='md' >
      <Heading as='h2'>Title : {title}</Heading>
      <Heading as='h3'>Author : {author}</Heading>
      <Heading as='h5'>Category : {category}</Heading>
      <Heading as='h6'>Publication : {publication_date}</Heading>
      <Text>#ISBN : {isbn}</Text>
    </VStack>
  );
}

export default BooksCard;
