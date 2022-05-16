import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async() => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    }

    const deleteUser = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`)
            getUsers()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='columns mt-5 is-centered'>
        <div className='column is-centered mx-6'>
            <Link to={`add`} className='button is-success' >Add New</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date Birth</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Province</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Zip Code</th>
                        <th>KTP Number</th>
                        <th>Bank Account</th>
                        <th>Bank Account No</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.datebirth}</td>
                            <td>{user.phonenumber}</td>
                            <td>{user.email}</td>
                            <td>{user.provinceaddress}</td>
                            <td>{user.cityaddress}</td>
                            <td>{user.streetaddress}</td>
                            <td>{user.zipcode}</td>
                            <td>{user.ktpnumber}</td>
                            <td>{user.bankaccountaddress}</td>
                            <td>{user.bankaccountnumber}</td>
                            <td>
                                <Link to={`edit/${user.id}`} className='button is-small is-info'>Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className='button is-small is-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList