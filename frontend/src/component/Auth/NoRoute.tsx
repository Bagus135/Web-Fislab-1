
const NoRoute = () => {
  return (
    <div role="alert">
    <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
       {' Not Found :('}
    </div>
    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>No Page is Available in this Route</p>
    </div>
</div>
  )
}

export default NoRoute