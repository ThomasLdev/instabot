import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'config/firebase';

import PageTitle from 'components/ui/layout/PageTitle';
import Container from 'components/ui/layout/Container';
import Navbar from 'components/ui/navigation/Navbar';
import Loader from 'components/ui/navigation/Loader';

export default function Base(props) {
    const [appUser, loading] = useAuthState(auth);

    return (
        <>
            {loading &&
                <Loader />
            }

            {appUser &&
                <Container>
                    <PageTitle text={props.pageTitle} />
                    <div className="mt-3 mb-3">
                        {props.children}
                    </div>
                </Container>
            }

            {!appUser && !loading &&
                <div className="min-h-screen flex justify-center items-center">
                    <PageTitle text="Please log in to use instabot" />
                </div>

            }

            <Navbar appUser={appUser} />
        </>
    )
}