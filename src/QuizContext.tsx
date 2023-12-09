import { createContext } from 'react';

const QuizContext = createContext<{
  selectedCategoryId?: number;
  setSelectedCategoryId: (id: number) => void;
  selectedModeId?: number;
  setSelectedModeId: (id: number) => void;
}>({
  selectedCategoryId: undefined,
  setSelectedCategoryId: (id: number) => {},
  selectedModeId: undefined,
  setSelectedModeId: (id: number) => {},
});

export default QuizContext;
