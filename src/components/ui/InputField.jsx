export default function InputField({ id, label = "", textarea = false, ...props }) {
    const inputClasses = "bg-emerald-800 border border-emerald-700 rounded-lg py-2 px-4 focus:outline-none focus:border-emerald-500 duration-200";
    return <div className="flex flex-col gap-1">
        {label !== "" && <label htmlFor={id}>{label}</label>}
        {textarea ? 
            <textarea id={id} className={inputClasses} {...props}></textarea> :
            <input id={id} className={inputClasses} {...props} />}
    </div>
}