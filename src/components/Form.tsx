export const Form = () => {
  return (
    <form className="border w-full rounded-2xl">
      <input
        className="border p-3 w-[80%] rounded-l-2xl"
        type="text"
        placeholder="Ingrese una tarea"
      />
      <button className="border p-3 w-[20%] bg-fuchsia-800 rounded-r-2xl transition duration:500 hover:bg-fuchsia-900 hover:cursor-pointer">
        Agregar
      </button>
    </form>
  );
};
