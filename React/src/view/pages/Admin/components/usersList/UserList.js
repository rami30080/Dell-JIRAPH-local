import React, { useState, useEffect } from 'react';
import './UserList.css'
// import FontAwesome from 'react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faSave, faAddressBook, faPencilAlt, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';







//components
import UserRow from './UserRow';


function UserList() {
    const [users, setUsers] = useState([]);
    //-------------------------------------


    useEffect(() => {
        fetch('/api/users/getUsersList')
            .then(res => res.json())
            .then(data => {

                if (data.success == true) {
                    setUsers(data.info.table);
                }
                else {
                    alert(data.error)
                }
            })
    }, []);

    // useEffect(()=>{
    //     console.log('users changed')
    //     console.dir(users)
    // },[users])


    return (



        <div className='adminpage'>
             <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
            <div className="first-wrapper">
                <div className="header"></div>

                <div className='AdminTable'>
                    <div className="TableColHeeader">
                        <div className="TableColHeeaderi">Email</div>
                        <div className="TableColHeeaderi">Business Role</div>
                        <div className="TableColHeeaderi">Password</div>
                    </div>
                <div name='create' onSubmit={createUser} className='TableCreateRow' >
                    <div>
                        <input name="inputEmail" type="email" placeholder='Enter Email' required ></input>
                    </div>
                <div>
                    <select className="opt-wrapper" name="inputRole" required  >
                        <option className="opt" value="Admin">Admin</option>
                        <option className="opt" value="QA manager">QA Manager</option>
                        <option className="opt" value="TOP manager">TOP Manager</option>
                    </select>
                </div>
                    <div>
                        <input name="inputPassword" type="password" placeholder='Enter password' required ></input>
                    </div>
                </div>
                <div>    
                        <button id="createBtn" type='submit' > Create</button>
                </div>
            </div>

                {users.map(user => <UserRow setUsers={setUsers} key={user.id} user={user} />)}


            </div>
        </div>
    )


    function createUser(e) {
        e.preventDefault();
        let { inputName, inputEmail, inputRole, inputPassword } = e.target.elements;
        inputName = inputName.value;
        inputEmail = inputEmail.value;
        inputRole = inputRole.value;
        inputPassword = inputPassword.value;

        e.target.elements.inputName.value = '';
        e.target.elements.inputEmail.value = '';
        e.target.elements.inputPassword.value = '';

        fetch('/api/users/createUser', {
            method: 'POST',
            body: JSON.stringify({ name: inputName, email: inputEmail, role: inputRole, password: inputPassword }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {

                if (data.success = true) {
                    setUsers(data.info.table)
                    return (alert('created sucsses'))
                }
                else if (data = false) {
                    return (alert(data.error))
                }

            })
    }

}



export default UserList;



