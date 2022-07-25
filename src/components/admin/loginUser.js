import GetID from '../../util/id/get-id';
import {
    // getAdmins,
    // addAdmin,
    // updateAdmin,
     getAdminById,
  } from '../../services/Admin/admin';

export default function loginUser(props){
    const user = getAdminById(GetID());
    console.log(GetID());
    console.log(user);
    console.log(user.userName);

    return (
        <div>
            <p>Hello {GetID()}</p>
        </div>
    );
}