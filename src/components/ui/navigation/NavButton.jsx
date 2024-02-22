import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { NavLink } from "react-router-dom";

const NavButton = (prop) => {
    return (
        <NavLink
            to={prop.path}
            className="inline-flex flex-col gap-1 items-center justify-center px-5 hover:bg-alternate group navbutton"
        >
            <FontAwesomeIcon icon={prop.icon} className="text-accent" />
            <span className="text-sm text-primary group-hover:text-secondary">
                {prop.text}
            </span>
        </NavLink>
    );
}

export default NavButton;