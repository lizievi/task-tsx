import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button } from "./Button";
import { useState } from "react";
import { VscError } from "react-icons/vsc";

interface Props {
  task: string,
  onDelete: (id: string) => void,
  id: string,
}

export const ListTasks = ({task, onDelete, id}: Props) => {
  const [status, setStatus] = useState(false);

  const handleComplet = () => {
    setStatus(!status);
  };

  const handleEdit = () => {
    console.log("Edited");
  };

  const handleDelete = () => {
    onDelete(id)
  };
  return (
    <div
      className={`w-full border p-2 rounded-2xl flex justify-between ${
        status ? "bg-emerald-500" : ""
      } `}
    >
      <div className="flex items-center w-[80%] ">
        <span>{task}</span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button handleBtn={handleComplet}>
          {!status ? <FaCheck /> : <VscError />}
        </Button>

        <Button handleBtn={handleEdit}>
          <MdEdit />
        </Button>
        {!status ? (
          <Button handleBtn={handleDelete}>
            <MdDelete />
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
