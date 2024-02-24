export default function Input(props) {
    return (
        <div>
            <label htmlFor={props.id} className="block mb-2 font-medium text-secondary">
                {props.label}
            </label>

            <input 
                onChange={props.onChange}
                id={props.id}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                className="border-2 border-accent text-primary rounded-md p-2 w-full"
                value={props.value}
             />
        </div>
    )
}