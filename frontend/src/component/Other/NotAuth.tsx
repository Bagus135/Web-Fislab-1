function NotAuthPage ({pageName} : {pageName : string}) {
  return (
    <div>
    <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Not Authorized !!!
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>You not authorize to access this {pageName} page</p>
        </div>
    </div>
    </div>
  )
}

const NotAuth =  ({pageName} : {pageName : string}) => {    
    return (
        <>
          <NotAuthPage pageName={pageName}/>
        </>
    )
}

export default NotAuth