import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button } from "./Button";

export const ListTasks = () => {
  const handleComplet = () => {
    console.log("Completed");
  };

  const handleEdit = () => {
    console.log("Edited");
  };

  const handleDelete = () => {
    console.log("Deleted");
  };

  return (
    <div className="border p-2 rounded-2xl flex justify-between">
      <div className="flex items-center w-[80%] ">
        <span>
          Task Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          eum vel. Nam dolores laboriosam{" "}
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <Button handleBtn={handleComplet}>
          <FaCheck />
        </Button>
        <Button handleBtn={handleEdit}>
          <MdEdit />
        </Button>
        <Button handleBtn={handleDelete}>
          <MdDelete />
        </Button>
      </div>
    </div>
  );
};
