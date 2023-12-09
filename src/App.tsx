import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartContainer from "./pages/StartContainer";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import QuizContext from "./QuizContext";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartContainer />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/results",
    element: <Results />,
  },
]);

function App() {

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | undefined>(undefined);
  const [selectedModeId, setSelectedModeId] = useState<number | undefined>(undefined);
  const value = { selectedCategoryId, setSelectedCategoryId, selectedModeId, setSelectedModeId };

  return (
    <QuizContext.Provider value={value}>
      <RouterProvider router={router} />
    </QuizContext.Provider>
  );
}

export default App;
