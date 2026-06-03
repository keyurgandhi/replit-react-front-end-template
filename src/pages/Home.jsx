import { useEffect, useState } from 'react'
import { getUsers } from '../api/usersApi'

export default function Home(){
  const [users,setUsers] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    getUsers()
      .then(data=>{
        setUsers(data)
        setLoading(false)
      })
      .catch(()=>setLoading(false))
  },[])

  return (
    <div style={{padding:'20px', fontFamily:'Arial'}}>
      <h1>Template React JS Application 🚀</h1>
      <p>This is a reusable frontend application template.</p>
      <hr style={{margin:'20px 0'}}/>
      <h2>Sample API Call (Users List) 📡</h2>

      {loading && <p>Loading...</p>}
      {!loading && users.map(u=> (
        <div key={u.id} style={{marginBottom:'10px', borderBottom:'1px solid #ddd'}}>
          <h3>{u.name}</h3>
          <p>Email: {u.email}</p>
        </div>
      ))}
    </div>
  )
}