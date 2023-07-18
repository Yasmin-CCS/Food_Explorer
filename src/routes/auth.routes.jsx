import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New';
import { Edit } from '../pages/Edit';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Menu } from '../pages/Menu';

export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}
