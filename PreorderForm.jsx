import {useState} from 'react'
import axios from 'axios'
export default function PreorderForm({liveUrl}){
  const [email,setEmail]=useState('')
  const [msg,setMsg]=useState('')
  async function handleSub(e){
    e.preventDefault()
    try{
      await axios.post('/api/subscribe',{email})
      setMsg('Thanks — you are subscribed!')
    }catch(err){
      setMsg('Subscribe failed.')
    }
  }
  return (
    <div className="card p-6 rounded-xl">
      <form onSubmit={handleSub} className="flex flex-col gap-3">
        <label className="text-sm text-gray-300">Enter your email to reserve and get updates</label>
        <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-3 rounded-lg border bg-transparent" placeholder="you@domain.com" />
        <div className="flex gap-3">
          <button className="btn-primary" type="submit">Preorder Now</button>
        </div>
        {msg && <div className="text-sm text-green-200 mt-2">{msg}</div>}
      </form>
    </div>
  )
}
