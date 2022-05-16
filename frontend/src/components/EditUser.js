import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [datebirth, setDateBirth] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [provinceaddress, setProvinceAddress] = useState("")
    const [cityaddress, setCityAddress] = useState("")
    const [streetaddress, setStreetAddress] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [ktpnumber, setKtpNumber] = useState("")
    const [bankaccountaddress, setBankAccountAddress] = useState("")
    const [bankaccountnumber, setBankAccountNumber] = useState("")

    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(()=> {
        getUserById()
    }, [])

    const updateUser = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                firstname,
                lastname,
                datebirth,
                phonenumber,
                email,
                provinceaddress,
                cityaddress,
                streetaddress,
                zipcode,
                ktpnumber,
                bankaccountaddress,
                bankaccountnumber,
            });
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        setFirstName(response.data.firstname)
        setLastName(response.data.lastname)
        setDateBirth(response.data.datebirth)
        setPhoneNumber(response.data.phonenumber)
        setEmail(response.data.email)
        setProvinceAddress(response.data.provinceaddress)
        setCityAddress(response.data.cityaddress)
        setStreetAddress(response.data.streetaddress)
        setZipcode(response.data.zipcode)
        setKtpNumber(response.data.ktpnumber)
        setBankAccountAddress(response.data.bankaccountaddress)
        setBankAccountNumber(response.data.bankaccountnumber)
    }

  return (
    <div className='columns mt-5 is-centered'>
        <div className='column is-half'>
            <form onSubmit={updateUser}>
                <div className='field'>
                    <label className='label'>First Name</label>
                    <div className='control'>
                        <input 
                        type='text' 
                        className='input' 
                        placeholder='First Name'
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Last Name</label>
                    <div className='control'>
                        <input 
                        type='text' 
                        className='input' 
                        placeholder='Last Name'
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Date Birth</label>
                    <div className='control'>
                        <input 
                        type='date' 
                        className='input' 
                        placeholder='Date Birth'
                        value={datebirth}
                        onChange={(e) => setDateBirth(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Phone Number</label>
                    <div className='control'>
                        <input 
                        type='tel' 
                        className='input' 
                        placeholder='Phone Number'
                        value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Email</label>
                    <div className='control'>
                        <input 
                        type='text' 
                        className='input' 
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Province</label>
                    <div className='control'>
                        <input 
                        type='text' 
                        className='input' 
                        placeholder='Province'
                        value={provinceaddress}
                        onChange={(e) => setProvinceAddress(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>City</label>
                    <div className='control'>
                        <input 
                        type='text' 
                        className='input' 
                        placeholder='City'
                        value={cityaddress}
                        onChange={(e) => setCityAddress(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Street Address</label>
                    <div className='control'>
                        <input 
                        type='text' 
                        className='input' 
                        placeholder='Street Address'
                        value={streetaddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Zip Code</label>
                    <div className='control'>
                        <input 
                        type='tel' 
                        className='input' 
                        placeholder='Zip code'
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>KTP Number</label>
                    <div className='control'>
                        <input 
                        type='tel' 
                        className='input' 
                        placeholder='KTP Number'
                        value={ktpnumber}
                        onChange={(e) => setKtpNumber(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Bank Account Address</label>
                    <div className='control'>
                        <input 
                        type='text' 
                        className='input' 
                        placeholder='Bank Account Address'
                        value={bankaccountaddress}
                        onChange={(e) => setBankAccountAddress(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Bank Account Number</label>
                    <div className='control'>
                        <input 
                        type='text' 
                        className='input' 
                        placeholder='Bank Account Number'
                        value={bankaccountnumber}
                        onChange={(e) => setBankAccountNumber(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='field'>
                    <button type='submit' className='button is-success' >Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser