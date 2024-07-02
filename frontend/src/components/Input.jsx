const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`mt-1 px-3 py-2 ${className} bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1`}
        {...props}
    />
)

export default Input;