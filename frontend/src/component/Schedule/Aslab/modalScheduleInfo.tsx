import { Link } from 'react-router-dom'

const ModalScheduleInfo = ({id}:{id : string}) => {
  return (
    <dialog id={id} className="modal w-screen ">
        <div className="modal-box">
            <div className="flex flex-col gap-2">
                <p className='font-bold text-xl'> Check Schedule</p>
                <p className='pb-5'> Mau booking jadwal? eh check dulu dong kuotanya!</p>
                <Link className="flex justify-end" to={`/schedule/check-all`}><button className="btn btn-primary" type='button'>Go to Page</button> </Link>
            </div>

        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>  
  )
}

export default ModalScheduleInfo