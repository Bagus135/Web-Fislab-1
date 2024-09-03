import getWeek from "../../utils/getWeekStudy";

const TimeCard = () => {
    const date = new Date()
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   

  return (
    <div className={` ${greetTime().bg} bg-blue-950 flex flex-row justify-between items-center shadow-md rounded-sm m-4 p-2`}>
        <div className="flex flex-col text-left  text-white p-2">
            <div className="font-bold text-xl">{day[date.getDay()]}</div>
            <div className="font-medium">{`${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`}</div>
            <div className="font-medium">{`${getWeek()=== '-' ? 'Outside of Study Week' : `Week-${getWeek()}`}`}</div>
        </div>
        <div className="flex justify-center items-center max-w-28">
            <img src={greetTime().img} className="size-full" alt="icon" />
        </div>
    </div>
  )
}

 const greetTime = () =>{
      const hour = new Date().getHours();
      if( hour ==5){
        return{
          img : `/sunrise.png`,
          bg : `bg-gradient-to-br from-blue-500 from-35% via-blue-200 via-60% to-orange-200  to-85% `,
        };
      } else if (hour >=6 && hour <= 16){
        return{
          img : `/sunny.png`,
          bg : `bg-blue-400 `,
        };
      } else if ( hour == 17){
        return{
          img : `/sunset.png`,
          bg : `bg-gradient-to-br from-blue-500 from-20% via-orange-300 via-50% to-orange-500  to-80%`,
        };
      } else {
        return{
          img : `/moon.png`,
          bg : `bg-[#000080]`,
        };
    }}

export default TimeCard