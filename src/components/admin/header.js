/* eslint-disable prettier/prettier */
import Navbar from './sampleNavbar';
import Title from './title';
import Admin from './registerAdmin';
import Inactive from './inactivateAdmin';
import AdminTable from './adminTable';

export default function header() {
  return (
    <div>
      <Navbar />
      <Title />
      <AdminTable />
      <Inactive />
      <Admin />
    </div>
  );
}
