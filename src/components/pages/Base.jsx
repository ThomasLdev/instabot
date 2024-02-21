import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'config/firebase';

import PageTitle from 'components/ui/layout/PageTitle';
import Container from 'components/ui/layout/Container';
import Navbar from 'components/ui/navigation/Navbar';
import Loader from 'components/ui/navigation/Loader';


export default function Base(props) {
    const [appUser, loading, error] = useAuthState(auth);

    return (
        <>
            { appUser &&
                <Container>
                    <PageTitle text={props.pageTitle} />
                    <div className="mt-3 mb-3">
                        {props.children}
                    </div>
                </Container>
            }

            { loading &&
                <Loader />
            }

            <Navbar appUser={appUser} loading={loading} />
        </>
    )
}