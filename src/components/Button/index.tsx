import { ButtonProps } from "../types"

const Button = ({name}: ButtonProps) => {
return (
    <button className="border-solid border-4 border-green-500 bg-green-200 w-2/5 rounded-md md:w-1/5">
        {name}
    </button>
)
}

export default Button