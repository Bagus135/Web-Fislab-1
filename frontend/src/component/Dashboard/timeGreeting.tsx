import { useAuthContext } from "../../context/AuthContext";

const TimeGreeting = () => {
  const {authUser} = useAuthContext()

  const greeting = greetTime()
  let randomInt = Math.floor(Math.random()*greeting.pic.length)
  let randomInt2 = Math.floor(Math.random()*(greeting.female.length))
  if(randomInt > greeting.pic.length) return randomInt = 0;
  if(randomInt2 > greeting.female.length) return randomInt2 = 0;


  return (
    <div className=" flex flex-row p-2 my-5 gap-1">
    <div className="flex flex-row">
      <img
      alt="time"
        src={greeting.pic[randomInt]}
        className="h-40 z-0 w-40 items-stretch rounded-lg shadow-2xl md:w-56 md:h-56 m-2 lg:h-72 lg:w-72" />
      <div className="flex flex-col pl-2 md:pl-10 ">
        <div className="flex flex-col md:flex-row text-xl font-bold md:text-3xl lg:text-4xl dark:text-white">
          <h1 className="top-6  md:mr-4">Good {greeting.time}! </h1>
          <h1 className="text-lg md:text-3xl lg:text-4xl"> {`${authUser?.gender === 'female' ? `Dek` : `Mas`} ${authUser?.nickname || authUser?.fullname}`}</h1>
        </div>
          <p className="py-1 text-sm md:text-xl md:pt-2 lg:text-2xl"> {
            authUser?.gender === 'male' ?
             greeting.male[randomInt2]
              : 
            greeting.female[randomInt2]
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
        pic : ['https://media1.tenor.com/m/pmY6lnm0ZjIAAAAC/good-morning.gif', 'https://media1.tenor.com/m/wGLyKHJv5lIAAAAC/fsdd.gif', 'https://media1.tenor.com/m/rxVs-oSYohcAAAAC/morning-morning-sunshine.gif', 'https://media1.tenor.com/m/v4O7i-ox1dAAAAAC/happy-valentines-day-2024-happy-valentine%27s-day-2024.gif' ],
        male : [`Semangat Mas Bro`, `Olahraga bro, kesehatan juga penting`, `Luangkan waktu untuk mewing🤫`,'Apakah pagi ini kamu merasa bersemangat','Utamakan pagi harimu dengan sarapan, bukan harapan'],
        female :[`Apakah mimpimu tadi indah?`, `Semangat jalani hari😊`, `Jangan Lupa Sarapan Ya! Nanti Sakit loh:)`,'Apakah pagi ini kamu merasa bersemangat','Utamakan pagi harimu dengan sarapan, bukan harapan'],
    };
  } else if (hour >=9 && hour <= 14){
    return{
      time : 'Day',
      pic : ['https://media1.tenor.com/m/2gyy4BcsLWsAAAAd/monkey-confused.gif', 'https://media.tenor.com/o-nQPK7DpVkAAAAi/nice-day-nice-day-quotes.gif', 'https://media1.tenor.com/m/XnKB_aFAzJMAAAAC/alumae-alumaeyy.gif', 'https://media1.tenor.com/m/xATuBt2dRhwAAAAC/kitten-cat.gif', 'https://media1.tenor.com/m/x99PnBgNRVYAAAAC/halo-halo-halo-halo-delight.gif', 'https://media1.tenor.com/m/_i6Lp7mnRLYAAAAC/scenery.gif' ],
      male : [`Istirahat Dulu Bang`, `Nothing last forever we can change the future`, `Panas-panas begini enaknya minum es ya`,'Nilai bukanlah segalanya, jangan terlalu dipikirkan!','Aku bukan peramal, tapi aku tebak kamu sekarang pasti merasa bahagia','Aku butuh medkit!!!'],
      female :[`Istrirahat dulu kalau capek`, `Kalau capek bisa tidur dipangkuanku`, `Jangan lupa makan siang ya :)`,'Nilai bukanlah segalanya, jangan terlalu dipikirkan!','Aku bukan peramal, tapi aku tebak kamu sekarang pasti merasa bahagia','Fisika itu menyenangkan, bukan? '],
  };
  } else if ( hour >= 15 && hour <=18){
    return{
      time : 'Afternoon',
      pic : ['https://media1.tenor.com/m/i5TRPkSTPrwAAAAC/chenongyun-cat.gif', 'https://media1.tenor.com/m/eH5Is1xMI3kAAAAC/good-afternoon-flowers.gif', 'https://media1.tenor.com/m/i17hE_5vblMAAAAC/dusk.gif', 'https://media1.tenor.com/m/ns27oDL6PPIAAAAC/cats-cat-with-flower.gif', 'https://media1.tenor.com/m/6doI8gWXn5cAAAAC/sunset-beach.gif' ],
      male : [`Jangan lupa lihat jadwal yaa`, `Apakah kamu sudah merasa menjadi Main Character hari ini?`, `Jadilah pria SIGMA`,'Air tenang, menghanyutkan'],
      female :[`Kalau Capek Istirahat ya`, `Apakah hari mu menyenangkan?`, `Lebih enak lihat senja atau melihat paras cantikmu?`,'Lelah dengan hari ini? senyumin ajaa....'],
  };
  } else {
    return{
      time : 'Night',
      pic : ['https://media1.tenor.com/m/vPr1E0fcHb4AAAAC/rain-anime.gif', 'https://media1.tenor.com/m/3vPe_Ywi0ZYAAAAd/good-night-moon.gif', 'https://media.tenor.com/5XS8fR02lnYAAAAi/sleep-nitez.gif', 'https://media1.tenor.com/m/beui1xgck_4AAAAC/hot-menyala.gif', 'https://media1.tenor.com/m/JChxs-yyayQAAAAC/cozy-aesthetic.gif', 'https://media1.tenor.com/m/7dGpAI5sKzwAAAAd/kimi-no-na-wa-anime.gif'],
      male : [`Lanjut besok aja!`, `Jangan Begadang`, `Info Ngopi rek!`,'Hal yang berat, akan ringan jika dikerjakan bersama-sama','Pria tidak bercerita'],
      female :[`Kamu kok belum tidur? nanti sakit loh`, `Jangan tidur malem-malem`, `Mau aku nyanyikan lagu pengantar tidur?`,'Hal yang berat, akan ringan jika dikerjakan bersama-sama','Asik, Salting, Asing'],
  };
}}