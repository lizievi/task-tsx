import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { ListTasks } from "../components/ListTasks";

interface Props {
  id:string,
  task: string,
  state: boolean,
  // onDelete: (id: string) => void,
}

export const TasksWhitoutStorage = () => {

  const [taskList, setTaskList] = useState<Props[]>([])
  const [task, setTask] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTask = {
      id: uuidv4(),
      task: task,
      state: false,                                                               
    }

    setTaskList(prev => [newTask, ...prev])
    setTask("")

  };

  const handleDelete = (id: string) => {
    setTaskList( prev => prev.filter( task => task.id !== id))
  };

  return (
    <>
      <form className="border w-full rounded-2xl" onSubmit={handleSubmit}>
        <input
          className="border p-3 w-[80%] rounded-l-2xl"
          type="text"
          placeholder="Ingrese una tarea"
          value={task}
          onChange={handleInput}
          
        />
        <button className="border p-3 w-[20%] bg-fuchsia-800 rounded-r-2xl transition duration:500 hover:bg-fuchsia-900 hover:cursor-pointer">
          Agregar
        </button>
      </form>
      {taskList.map(({ id, task }) => {
        return (
          <ListTasks key={id} task={task} onDelete={handleDelete} id={id} />
        );
      })}
    </>
  );
}
