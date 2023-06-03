import Chat from './components/Chat';
import Navbar from './components/Navbar';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `min-h-screen dark:bg-slate-900 duration-100 flex flex-col border-none`,
};

function App() {
  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
      <Navbar />
      {user ? <Chat/> : null}


      </section>
        
    </div>
  );
}

export default App;
