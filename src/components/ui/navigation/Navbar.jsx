import GoogleAuth from 'components/auth/GoogleAuth';
import NavButton from 'components/ui/navigation/NavButton';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
                <NavButton icon="layer-group" text="Logs" />
                <NavButton icon="sliders" text="Settings" />
                <GoogleAuth sendAppUser={props.getAppUser} />
            </div>
        </div>
    );
}

Navbar.propTypes = {
    getAppUser: PropTypes.func.isRequired,
};

export default Navbar;