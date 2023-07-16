import { Stack, HStack, SimpleGrid, Select, Button, Text } from '@chakra-ui/react';
import { initState, reducer } from '../../reducers/books/reducer';
import { useEffect, useReducer, useState } from 'react';
import Loading from './Loading';
import { getBooksData } from '../../utils/api';
import BooksCard from './BooksCard';
function Books() {
  // import the chakra UI components from the chakra UI library , and remove the following
  const [state, dispatch] = useReducer(reducer, initState);
  const { data, loading, error } = state;
  const [filter, setFilter] = useState("")
  const [sortBy, setSortBy] = useState("")
  const [order, setOrder] = useState("")
  console.log(filter, sortBy, order)
  const fetchData = () => {
    dispatch({ type: 'FETCH_DATA_LOADING' })
    getBooksData(filter, sortBy, order)
      .then(res => {
        console.log(res?.data);
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: res?.data })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: 'FETCH_DATA_FAILURE' })
      })
  }
  useEffect(() => {
    fetchData(filter, sortBy, order)
  }, [filter, sortBy, order])
  const handleReset = () => {
    setFilter('');
    setOrder('');
    setSortBy('')
  }
  return (
    <Stack>
      <HStack>
        <Text>Select By Category</Text>
        <Select data-cy="books_filter" value={filter} onChange={(e) => setFilter(e.target.value)} >
          <option value=''>All</option>
          <option value='classic'>Classic</option>
          <option value='dystopian'>Dystopian</option>
          <option value='coming_of_age'>Coming of Age</option>
          <option value='fantasy'>Fantasy</option>
          <option value='political_satire'>Political Satire</option>
          <option value='mystery'>Mystery</option>
          <option value='epic_poem'>Epic Poem</option>
        </Select>
        <Text>Select a Sort Criteria</Text>
        <Select data-cy="books_sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)} >
          <option value=''>--</option>
          <option value='publication_date'>Publication Date</option>
          <option value='category'>Category</option>
        </Select>
        <Text>Select a Sort Order</Text>
        <Select data-cy="books_sort_order" value={order} onChange={(e) => setOrder(e.target.value)} >
          <option value=''>--</option>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </Select>
        <Button colorScheme='blue' size='lg' data-cy="reset_all" fontSize='xs' onClick={handleReset} >RESET ALL</Button>
      </HStack>
      {
        loading ? (<Loading />)
          : (
            <HStack>
              <SimpleGrid data-cy="books_container"
                mt={10}
                columns={3}
                spacing='8'
                bg='gray.100' >
                {data?.map((book) =>
                  <BooksCard key={book.id} {...book} />
                )}
              </SimpleGrid>
            </HStack>
          )
      } {/* Show Loading.jsx if loading state is true else SimpleGrid component */}
    </Stack>
  );
}export default Books;
