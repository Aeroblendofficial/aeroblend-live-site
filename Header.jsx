export default function Header({instagram}){
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-aero-teal-1 to-aero-teal-2 flex items-center justify-center text-white font-bold">AB</div>
        <div>
          <h1 className="text-lg font-semibold">AeroBlend</h1>
          <p className="text-sm text-gray-300">Premium glass bottle • science-backed hydration</p>
        </div>
      </div>
      <div className="text-sm text-gray-300"><a href={'https://instagram.com/' + instagram} target='_blank' rel='noreferrer'>@{instagram}</a></div>
    </header>
  )
}
