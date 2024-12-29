import { BooksMap } from "./booksPage.types";
import { BookPageData } from "./bookCard.types";

export interface BooksPageState {
  books: BooksMap;
}

export interface SetBookItemStateAction {
  id: string;
  newState: BookPageData;
}
