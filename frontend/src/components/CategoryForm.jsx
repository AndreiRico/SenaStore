const CategoryForm = ({
    value,
    setValue,
    handleSubmit,
    buttonText = "Agregar",
    handleDelete,
  }) => {
    return (
      <div className="p-3">
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            className="py-3 px-4 border rounded-lg w-full"
            placeholder="Escribe la categoria"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
  
          <div className="flex justify-between">
            <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              {buttonText}
            </button>
  
            {handleDelete && (
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 foucs:ring-red-500 focus:ring-opacity-50"
              >
                Borrar
              </button>
            )}
          </div>
        </form>
      </div>
    );
  };
  
  export default CategoryForm;