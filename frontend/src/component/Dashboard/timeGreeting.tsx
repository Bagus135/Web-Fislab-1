import { useAuthContext } from "../../context/AuthContext";

const TimeGreeting = () => {
  const {authUser} = useAuthContext()

  const componentGreeting = greetTime()
  let randomInt = Math.floor(Math.random()*4)
  let randomInt2 = Math.floor(Math.random()*(componentGreeting.female.length-1))
  if(randomInt >= 4) return randomInt = 0;
  if(randomInt2 >= componentGreeting.female.length-1) return randomInt2 = 0;


  return (
    <div className=" flex flex-row p-2 my-5 gap-1">
    <div className="flex flex-row">
      <img
      alt="time"
        src={componentGreeting.pic[randomInt]}
        className="h-40 z-0 w-40 items-stretch rounded-lg shadow-2xl md:w-56 md:h-56 m-2 lg:h-72 lg:w-72" />
      <div className="flex flex-col pl-2 md:pl-10 ">
        <div className="flex flex-col md:flex-row text-xl font-bold md:text-3xl lg:text-4xl">
          <h1 className="top-6  md:mr-4">Good {componentGreeting.time}! </h1>
          <h1 className="text-lg md:text-3xl lg:text-4xl"> {`${authUser?.gender === 'female' ? `Dek` : `Mas`} ${authUser?.nickname || authUser?.fullname}`}</h1>
        </div>
          <p className="py-1 text-sm md:text-xl md:pt-2 lg:text-2xl"> {
            authUser?.gender === 'male' ?
             componentGreeting.male[randomInt2]
              : 
            componentGreeting.female[randomInt2]
            }</p>
      </div>
    </div>
  </div>
  )
}

export default TimeGreeting


const greetTime = () =>{
  const hour = new Date().getHours();
  if( hour >= 5 && hour <= 8){
    return{
        time : 'Morning',
        pic : ['https://media1.tenor.com/m/pmY6lnm0ZjIAAAAC/good-morning.gif', 'https://media1.tenor.com/m/wGLyKHJv5lIAAAAC/fsdd.gif', 'https://media1.tenor.com/m/3eGagZJGpyIAAAAC/good-morning.gif', 'https://media1.tenor.com/m/rxVs-oSYohcAAAAC/morning-morning-sunshine.gif', 'https://media1.tenor.com/m/v4O7i-ox1dAAAAAC/happy-valentines-day-2024-happy-valentine%27s-day-2024.gif' ],
        male : [`Semangat Mas Bro`, `Jangan Lupa Ngopi Slurr`, `Kerja Kerja Kerja`],
        female :[`Apakah mimpimu tadi indah?`, `Semangat jalani hari😊`, `Jangan Lupa Sarapan Ya! Nanti Sakit loh:)`],
    };
  } else if (hour >=9 && hour <= 14){
    return{
      time : 'Day',
      pic : ['https://media1.tenor.com/m/pmY6lnm0ZjIAAAAC/good-morning.gif', 'https://media1.tenor.com/m/wGLyKHJv5lIAAAAC/fsdd.gif', 'https://media1.tenor.com/m/3eGagZJGpyIAAAAC/good-morning.gif', 'https://media1.tenor.com/m/rxVs-oSYohcAAAAC/morning-morning-sunshine.gif', 'https://media1.tenor.com/m/v4O7i-ox1dAAAAAC/happy-valentines-day-2024-happy-valentine%27s-day-2024.gif' ],
      male : [`Istirahat Dulu Bang`, `No Ingpo`, `Kerusakan Sistem`],
      female :[`Istrirahat dulu kalau capek`, `Kalau capek bisa tidur dipangkuanku`, `Jangan lupa makan siang ya :)`],
  };
  } else if ( hour >= 15 && hour <=18){
    return{
      time : 'Afternoon',
      pic : ['https://media1.tenor.com/m/pmY6lnm0ZjIAAAAC/good-morning.gif', 'https://media1.tenor.com/m/wGLyKHJv5lIAAAAC/fsdd.gif', 'https://media1.tenor.com/m/3eGagZJGpyIAAAAC/good-morning.gif', 'https://media1.tenor.com/m/rxVs-oSYohcAAAAC/morning-morning-sunshine.gif', 'https://media1.tenor.com/m/v4O7i-ox1dAAAAAC/happy-valentines-day-2024-happy-valentine%27s-day-2024.gif' ],
      male : [`Info Senja`, `No ingpo`, `Lelah`],
      female :[`Kalau Capek Istirahat ya`, `Tetap Semangat ya`, `Lebih enak lihat senja atau melihat paras cantikmu?`],
  };
  } else {
    return{
      time : 'Night',
      pic : ['https://media1.tenor.com/m/pmY6lnm0ZjIAAAAC/good-morning.gif', 'https://media1.tenor.com/m/wGLyKHJv5lIAAAAC/fsdd.gif', 'https://media1.tenor.com/m/3eGagZJGpyIAAAAC/good-morning.gif', 'https://media1.tenor.com/m/rxVs-oSYohcAAAAC/morning-morning-sunshine.gif', 'https://media1.tenor.com/m/v4O7i-ox1dAAAAAC/happy-valentines-day-2024-happy-valentine%27s-day-2024.gif' ],
      male : [`Kerja Kerja`, `Bergadang Jangan Bergadang`, `Info Ngopi`],
      female :[`Kalau capek istirahat ya`, `Jangan tidur malem-malem`, `Mau aku nyanyikan lagu pengantar tidur?`],
  };
}}