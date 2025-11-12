import { Container } from "./components/Container";
import { Header } from "./components/Header/Header";
import { TasksWhitoutStorage } from "./pages/TasksWhitoutStorage";

export const App = () => {
  return (
    <div>
      <Header title="App básica de TAREAS" />
      <Container>
        <TasksWhitoutStorage />
      </Container>
    </div>
  );
};
