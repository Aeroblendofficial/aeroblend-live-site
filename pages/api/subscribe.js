export default async function handler(req,res){
  // Simple demo subscribe: store in memory (not persistent)
  if(req.method !== 'POST') return res.status(405).end()
  const { email } = req.body
  if(!email) return res.status(400).json({error:'missing email'})
  // In production, send to Mailchimp or DB. For now return success.
  return res.status(200).json({ok:true})
}
