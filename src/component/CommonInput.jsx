
const CommonInput=({
    label,
    name,
    type,
    value,
    placeholder,
    onChange,
    classname
})=>{
    return <div className="flex justify-between items-center gap-2">
        {label && <div>
            <label htmlFor={name} className="text-[1.1rem] ">{label}</label>
        </div>}
        <input 
        id={name}
        name = {name || "input"}
        type={type || "text"}
        value={value}
        placeholder={placeholder || "Enter the text"}
        onChange={onChange}
        className={classname || "w-[70%] block px-5 py-2 mt-2 text-black border rounded-lg outline-none text-lg"}
     />
   </div>
}
export default CommonInput;