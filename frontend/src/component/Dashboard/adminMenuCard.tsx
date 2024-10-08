import { BookText, ListOrdered, Megaphone, User, Users, Workflow } from "lucide-react"
import { Link } from "react-router-dom"


const MenuCard = ({icon, title, desc, path} : {icon : any, title:string, desc:string, path:string}) => {
  return (
    <Link to={path} className="flex flex-row p-2 gap-2 items-stretch justify-stretch bg-whiterounded shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300 border rounded-sm hover:bg-blue-900 hover:text-white dark:bg-[#1b1b1b] dark:border-white dark:shadow-[#292929] dark:hover:bg-[#ffa31a] dark:hover:text-black dark:text-[#ffa31a] ">
        <div className="flex items-center">
            {icon}
        </div>
        <div className="flex flex-col gap-1 text-left pl-3">
            <div className="font-bold text-xl text-left ">{title}</div>
            <div className="font-light text-sm text-left dark:text-white">{desc}</div>
        </div>
    </Link>
  )
}


const AdminMenuCard = () => {
  return (<>
      <p className="font-bold text-l text-center px-2 py-2 md:text-2xl md:py-5 dark:text-white">Admin Utility</p>
    <div className="grid grid-cols-1 px-2 gap-3 flex-col items-stretch justify-between lg:grid-cols-2 w-full mb-6">
    <MenuCard icon={<User className="size-8  dark:text-white"/>} title="Sign Up" desc="Register participant FisLab I" path="/signup"/>
    <MenuCard icon={<Megaphone className="size-8 dark:text-white -rotate-12"/>} title="Announcement" desc="Add a new announcement" path="/announcement"/>
    <MenuCard icon={<Users className="size-8  dark:text-white" />} title="Praktikan Group" desc="Create group for praktikan" path="/admin/praktikan-grouping"/>
    <MenuCard icon={<BookText className="size-8  dark:text-white"/>} title="Aslab Modul" desc="Register aslab modul" path="/admin/aslabmodul"/>
    <MenuCard icon={<Workflow className="size-8  dark:text-white"/>} title="Aslab Session" desc="Register aslab session" path="/admin/aslabsession"/>
    <MenuCard icon={<ListOrdered className="size-8  dark:text-white"/>} title="Praktikan Score" desc="View score for all praktikan" path="/admin/viewscore"/>
    </div>
  </>
  )
}


export default AdminMenuCard