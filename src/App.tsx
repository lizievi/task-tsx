import { Container } from "./components/Container";
import { Header } from "./components/Header/Header";
import { Tasks } from "./pages/Tasks";

export const App = () => {
  return (
    <div>
      <Header title="App básica de TAREAS" />
      <Container>
        <Tasks />
      </Container>
    </div>
  );
};
