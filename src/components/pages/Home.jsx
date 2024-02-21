import { useState } from 'react';

import Base from 'components/pages/Base';
import LogTable from 'components/logs/LogTable';


export default function Home() {
    const [appUser, setAppUser] = useState(undefined);

    const handleAppUser = (appUser) => {
        setAppUser(appUser);
    }

    return (
        <Base pageTitle="Last Actions" appUser={handleAppUser}>
            <div className="text-center">
                <h2>Click on a row to see the action details...</h2>
            </div>
            {appUser ? <LogTable appUser={appUser} /> : <p>Please sign in</p>}
        </Base>
    )
}