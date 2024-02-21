import { useState } from 'react';

import PageTitle from 'components/ui/layout/PageTitle';
import Container from 'components/ui/layout/Container';
import Navbar from 'components/ui/navigation/Navbar';

export default function Base(props) {
    const [appUser, setAppUser] = useState(undefined);

    const handleAppUser = (appUser) => {
        setAppUser(appUser);
    }

    return (
        <>
            <Container>
                <PageTitle text={props.pageTitle} />
                <div className="mt-3 mb-3">
                    {props.children}
                </div>
            </Container>

            <Navbar appUser={props.appUser} />
        </>
    )
}