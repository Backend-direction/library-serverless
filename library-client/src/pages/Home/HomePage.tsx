import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchBooks } from "../../services/books";
import BookGrid from "../../components/BookGrid/BookGrid";
import { useObserver } from "../../hooks/useObserver";

const HomeWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const DEFAULT_LIMIT = 10;

const HomePage = () => {
  const [containerRef, isVisible] = useObserver({
    root: null,
    rootMargin: "100px",
    threshold:1.0
  });

  const {
    data,
    error,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery(
    ['books'],
    ({ pageParam }) => fetchBooks(pageParam?.nextPage, DEFAULT_LIMIT),
    {
      getPreviousPageParam: (previousPage) => previousPage ?? undefined,
      getNextPageParam: (nextPage) => nextPage ?? undefined,
    },
  )

  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
  }, [isVisible])

  return ( 
    <HomeWrapper>
      <Logo width="140" />
      <SearchBar />
      <BookGrid isLoading={isFetching} isError={error} books={data}/>
      <div ref={containerRef}></div>
    </HomeWrapper>
   );
}
 
export default HomePage;