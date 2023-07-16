import { Stack,Skeleton } from "@chakra-ui/react";


const Loading = () => {
  return (
    <Stack data-cy="loading_indicator" >
      <Skeleton height='100px' />
      <Skeleton height='100px' />
      <Skeleton height='100px' />
      <Skeleton height='100px' />
    </Stack>
  );
};

export default Loading;
