export default function InputField({ id, label = "", ...props }) {
    return <div className="flex flex-col gap-1">
        {label !== "" && <label htmlFor={id}>{label}</label>}
        <input id={id} className="bg-emerald-800 border border-emerald-700 rounded-lg py-2 px-4 focus:outline-none focus:border-emerald-500 duration-200" {...props} />
    </div>
}