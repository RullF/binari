import Home from './pages/Home'
import { Routes , Route} from 'react-router-dom'
import Tentang from './pages/Tentang';
import Layanan from './pages/Layanan';
import Starup from './pages/Starup';
import Acara from './pages/Acara';
import Kontak from './pages/Kontak';
import Artikel_starup from './pages/artikel_starup';
import Artikel_workshop from './pages/artikel_workshop';
import Artikel_investor from './pages/artikel_investor';
import Artikel_workspace from './pages/artikel_workspace';
import Artikel_event from './pages/artikel_event';
import Artikel_lab from './pages/artikel_lab';
import Admin from './pages/admin';


function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tentang' element={<Tentang/>}/>
      <Route path='/layanan' element={<Layanan/>}/>
      <Route path='/starup' element={<Starup/>}/>
      <Route path='/acara' element={<Acara/>}/>
      <Route path='/kontak' element={<Kontak/>}/>
      <Route path='/artikel_starup' element={<Artikel_starup/>}/>
      <Route path='/artikel_workshop' element={<Artikel_workshop/>}/>
      <Route path='/artikel_investor' element={<Artikel_investor/>}/>
      <Route path='/artikel_workspace' element={<Artikel_workspace/>}/>
      <Route path='/artikel_event' element={<Artikel_event/>}/>
      <Route path='/artikel_lab' element={<Artikel_lab/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>

    </div>
  );
}

export default App;
