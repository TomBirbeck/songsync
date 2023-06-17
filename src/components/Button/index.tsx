import { ButtonProps } from "../types"

const Button = ({name}: ButtonProps) => {
return (
    <button className="bg-green-200 w-2/5 rounded-md md:w-1/5 text-xl hover:bg-purple-400">
        {name}
    </button>
)
}

export default Button