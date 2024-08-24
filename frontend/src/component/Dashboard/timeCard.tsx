import getWeek from "../../utils/getWeekStudy";

const TimeCard = () => {
    const date = new Date()
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



  return (
    <div className="bg-blue-900  flex flex-row justify-between items-center shadow-md rounded-sm m-4 p-2">
        <div className="flex flex-col text-left  text-white p-2">
            <div className="font-bold">{day[date.getDay()]}</div>
            <div className="font-medium">{`${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`}</div>
            <div className="font-medium">{`${getWeek()=== '-' ? 'Outside of Study Week' : `Week-${getWeek()}`}`}</div>
        </div>
        <div className="flex justify-center items-center max-w-28">
            <img src="https://icon-library.com/images/morning-icon/morning-icon-8.jpg" className="size-full" alt="icon" />
        </div>
    </div>
  )
}

export default TimeCard