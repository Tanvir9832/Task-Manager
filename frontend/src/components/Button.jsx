const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} inline-flex items-center p-2 text-sm bg-black border border-transparent rounded-md text-white hover:bg-black focus:outline-none focus:border-black disabled:opacity-75 disabled:cursor-not-allowed`}
        {...props}
    >{props.children}</button>
)

export default Button