import { ButtonProps } from "../types"

const Button = ({name}: ButtonProps) => {
return (
    <button className="bg-purple-300 w-2/5 rounded-md md:w-1/5 text-xl hover:bg-green-400">
        {name}
    </button>
)
}

export default Button