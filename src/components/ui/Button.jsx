export default function Button({ children, ...props }) {
    return <button className="py-2 px-4 rounded-lg bg-violet-600 hover:bg-violet-800 duration-200" {...props}>{children}</button>
}