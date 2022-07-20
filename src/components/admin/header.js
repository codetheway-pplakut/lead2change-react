/* eslint-disable prettier/prettier */
import Navbar from './sampleNavbar';
import Title from './title';
// eslint-disable-next-line import/no-named-as-default
import AdminTable from './adminTable';
import Search from './searchAndRegister';

export default function header(){


    return (
        <div>
            <Navbar />
            <Title />
            <Search />
            <AdminTable />
        </div>
    );
}