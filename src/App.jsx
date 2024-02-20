import './App.css'
import Navbar from 'components/ui/navigation/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLayerGroup, faSliders, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


library.add(faLayerGroup, faUser, faSliders);

const App = () => {
  const [appUser, setUser] = useState(undefined);

  const handleAppUser = (appUser) => {
    setUser(appUser);

    console.log(appUser);
  }

  return (
    <>
        <h1 className="text-3xl text-slate-300 font-bold underline">
          Last actions :
        </h1>

        <div>
          {appUser ? 
            <p>Welcome, {appUser.displayName}</p>
           : 
            <p>Please sign in</p>
          }
        </div>

        <Navbar getAppUser={handleAppUser} />
    </>
  )
}

export default App;
