import LoginButton from 'components/auth/LoginButton';
import NavButton from 'components/ui/navigation/NavButton';

export default function Navbar(props) {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-secondary">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
                { props.loading &&
                    <p>test</p>
                }

                { props.appUser && 
                <div>
                    <NavButton icon="layer-group" text="Logs" path="logs" />
                    <NavButton icon="sliders" text="Settings" path="settings" />
                </div>
                }
                <div>
                    <LoginButton appUser={props.appUser} />
                </div>
            </div>
        </div>
    );
}