export default function Button({ children, isSecondary = false, ...props }) {
    return <button 
        className={`py-2 px-4 rounded-lg bg-violet-600 hover:bg-violet-800 duration-200 ${isSecondary && 'bg-white text-violet-800 hover:bg-violet-200 hover:text-violet-800'}`} 
        {...props}>{children}</button>
}