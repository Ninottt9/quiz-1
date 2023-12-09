import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Start from "./pages/Start";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import QuizContext from "./QuizContext";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
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
  const value = { selectedCategoryId, setSelectedCategoryId };

  return (
    <QuizContext.Provider value={value}>
      <RouterProvider router={router} />
    </QuizContext.Provider>
  );
}

export default App;
