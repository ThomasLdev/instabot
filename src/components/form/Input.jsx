export default function Input(props) {
    return (
        <div className="">
            <label htmlFor="" className="block mb-2 font-medium text-secondary">
                {props.name}
            </label>

            <input name=""
                type={props.type}
                placeholder={props.placeholder}
                className="border-2 border-accent text-primary rounded-md p-2 w-full"
                value={props.value}
             />
        </div>
    )
}