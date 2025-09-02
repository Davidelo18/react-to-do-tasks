export default function Button({ children, type = "primary", isLink = false, ...props }) {
    const colorClasses = type === "primary" ? "bg-violet-600 hover:bg-violet-800" : "bg-gray-600 hover:bg-gray-800";
    return <button 
        className={`py-2 px-4 rounded-lg ${colorClasses} duration-200 ${isLink && 'bg-white text-violet-800 hover:bg-violet-200 hover:text-white'}`} 
        {...props}>{children}</button>
}