import { IBook } from "../../interfaces/IBook";

interface BookGridProps {
  isLoading: boolean,
  isError: unknown,
  books: IBook[] | undefined,
}
 
const BookGrid = ({ isLoading, isError, books }: BookGridProps) => {

  if(isLoading) return <div>Loading</div>;

  if(isError) return <div>Error</div>;

  return (
    <div>
      GRID
    </div>
   );
}
 
export default BookGrid;