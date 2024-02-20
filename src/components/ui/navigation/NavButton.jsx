import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavButton = (prop) => {
    return (
        <button onClick={prop.onClick} type="button"
            className="inline-flex flex-col gap-1 items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <FontAwesomeIcon icon={prop.icon} />
            <span
                className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{prop.text}
            </span>
        </button>
    );
}

export default NavButton;