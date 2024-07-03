import { Spinner } from "./Spninner"

const Button = ({ type = 'submit', className, loading, ...props }) => (
    <button
        type={type}
        className={`flex
            justify-center
            items-center
            gap-2
            focus:outline-none
            text-white
            bg-slate-950
            hover:bg-slate-800
            focus:ring-4
            focus:ring-slate-600
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            mb-2 disabled:cursor-not-allowed ${className} `}
        {...props}
    >{loading? <Spinner /> : props.children}</button>
)

export default Button