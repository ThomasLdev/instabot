import LoginButton from 'components/auth/LoginButton';
import NavButton from 'components/ui/navigation/NavButton';

export default function Navbar(props) {
    const appUser = props.appUser;

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-secondary">
            <div className="h-full font-medium flex justify-center">
                { appUser && 
                <div className="flex h-full">
                    <NavButton icon="layer-group" text="Logs" path="/" />
                    <NavButton icon="sliders" text="Settings" path="/settings" />
                </div>
                }
                <div className="flex ml-auto h-full">
                    <LoginButton appUser={appUser} />
                </div>
            </div>
        </div>
    );
}