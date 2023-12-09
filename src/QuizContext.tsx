import { createContext } from 'react';

const QuizContext = createContext<{selectedCategoryId?: number, setSelectedCategoryId: (id: number) => void}>({
  selectedCategoryId: undefined,
  setSelectedCategoryId: (id: number) => {},
});

export default QuizContext;
