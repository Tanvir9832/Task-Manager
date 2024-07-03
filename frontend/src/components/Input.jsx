
const Input = ({
    className,
    name,
    label,
    errors,
    hidden,
    ...rest
  }) => {
    const errorMessage = name ? errors?.[name]?.[0] : null;
  return (
    <div className="w-full">
    {label && (
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
    )}

    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name={name}
      {...rest}
    />

    {errorMessage ? (
      <span className="text-red-500 text-sm">{errorMessage}</span>
    ) : (
      <span className="text-red-500 text-sm"> {"‎"}</span>
    )}
  </div>
  )
}

export default Input