import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNoteSticky, faPeopleGroup, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Header() {

    const[data, setData] = useState([])

    useEffect(() =>{
        fetchData()
    }, [])

    async function fetchData(){
        const response = await axios.get("https://assessment-api-biay.onrender.com/users")
        setData(response.data.data)
        console.log(data)
    }
    return(
        <div>
            <div className='flex-col'>
                <div className='flex'>
                <header className='bg-[#FAFAFA] w-2/12 text-[#737373] text-xl text-center space-y-8 h-screen'>
                    <div className="flex items-center">
                        <img className="h-[60px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdgYSA3pDRxarkQG4g65MqwHfQBRh3povpA&s" alt="herald"/>
                        <p>Calender</p>
                    </div>     

                    <ul className='p-4 space-y-10'>
                        <li><FontAwesomeIcon icon={faHome}/> Home</li>
                        <li><FontAwesomeIcon icon={faSearch}/> Home</li>
                        <li><FontAwesomeIcon icon={faPeopleGroup}/> Home</li>
                        <li><FontAwesomeIcon icon={faNoteSticky}/> Home</li>
                    </ul>           
                </header>

                <div className=' w-full space-x-11'>
                <div className='flex justify-between w-8/12 p-11'>
                    <div>
                        <h1 className='font-bold text-2xl'>Team</h1>
                    </div>
                    <div>
                        <div>
                            <Link to={'/add'}><button className='bg-green-500 text-white border rounded-lg w-[180px] hover:bg-green-800'>
                                <FontAwesomeIcon icon={faPlus}/>
                                Add members
                            </button></Link>
                        </div>
                    </div>
                </div>

                <div>
                    {/* Displaying members */}
                
                    <div>
                        <table className='border w-full'>
                            <tr>
                            <th></th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Edit</th>
                            </tr>

                    {
                        data && data.length>0 ? 
                    data.map(
                    (item, id) => {
                        return <tr key={id}>
                                <td><img className='w-11 h-11' src='{item.photo}'/></td>
                                <td>{item.username}</td>
                                <td>{item.department}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>{item.department}</td>
                            </tr>
                    }
                ): <p>Loading</p>
                }
                            
                        </table>
                       </div>

                       </div>

                </div>
                </div>

                
            </div>
        </div>
    )
}