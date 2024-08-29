import { Link } from 'react-router-dom'

const ModalScheduleInfo = ({id}:{id : string}) => {
  return (
    <dialog id={id} className="modal w-screen ">
        <div className="modal-box">
            <div className="flex flex-col gap-2">
                <p className='font-bold text-xl dark:text-white'> Check Schedule</p>
                <p className='pb-5'> Mau booking jadwal? eh check dulu dong kuotanya!</p>
                <Link className="flex justify-end" to={`/schedule/check-all`}>
                  <button className="w-1/3 text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 dark:bg-[#ffa31a] dark:text-black dark:hover:bg-[#ff7d12]" type='button'>
                    Lets Go!
                  </button>
                </Link>
            </div>

        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>  
  )
}

export default ModalScheduleInfo