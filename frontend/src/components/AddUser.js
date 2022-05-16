import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

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

    const provinceList = [
        {
          name: "Province",
          province: [
            "Ang Mo Kio New Town",
            "Ayer Raja New Town",
            "Bedok New Town",
            "Boon Lay",
            "Bukit Batok New Town",
            "Bukit Panjang New Town",
            "Bukit Timah",
            "Bukit Timah Estate",
            "Changi Village",
            "Choa Chu Kang New Town",
            "Clementi New Town",
            "Holland Village",
            "Hougang",
            "Jurong East New Town",
            "Jurong Town",
            "Jurong West New Town",
            "Kalang",
            "Kampong Pasir Ris",
            "Kembangan",
            "Pandan Valley",
            "Pasir Panjang",
            "Punggol",
            "Queenstown Estate",
            "Serangoon",
            "Simei New Town",
            "Singapore",
            "Tai Seng",
            "Tampines New Town",
            "Tanglin Halt",
            "Tanjong Pagar",
            "Toa Payoh New Town",
            "Woodlands New Town",
            "Yew Tee",
            "Yishun New Town"
          ],
        },
        
      ];

      const handleFromProvince = (e) => {
        const province = provinceList.find(
          (province) => province.name === e.target.value
        );
        setProvinceAddress(province.province);
      };

    const navigate = useNavigate()

    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/users", {
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

  return (
    <div className='columns mt-5 is-centered'>
        <div className='column is-half'>
            <form onSubmit={saveUser}>
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
                {/* <div className='field'>
                    <label className='label'>Province</label>
                    <div className='control'>
                        <div className='select is-fullwidth'>
                            <select onChange={(e) => handleFromProvince(e)}>
                            {provinceaddress.map((province, key) => (
                                <option key={key} title="" value={province}>
                                    {province}
                                </option>))}
                            </select>
                        </div>
                    </div>
                </div> */}
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
                    <button type='submit' className='button is-success' >Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser