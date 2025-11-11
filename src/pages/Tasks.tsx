import { Form } from "../components/Form";
import { ListTasks } from "../components/ListTasks";

export const Tasks = () => {
  return (
    <div className="border-2 rounded-3xl w-[60%] min-h-[500px] p-6 space-y-6">
      <Form />
      <ListTasks />
    </div>
  );
};
