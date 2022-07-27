import ClubList from "./Components/Home/ClubList";
import Tab from "./Components/Navigation/Tab";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddAnggota from "./Components/Tambah/AddAnggota";
import EditAnggota from "./Components/EditAnggota.js/EditAnggota";

import Detail from "./Components/Modals/Detail";


function App() {
  return (
    <BrowserRouter>
      <Tab />
      <div className="container mt-3">
      <Routes>
        <Route path="/" element={<ClubList />}/>
        <Route path="/tambah" element={<AddAnggota />}/>
        <Route path="/edit/:id" element={<EditAnggota />}/>
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
