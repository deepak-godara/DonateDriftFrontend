import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
export  const ItemArray=[
    {
        Icon: IoCreateOutline,
        Content:"Create new campaign",
        Link:"/fundraise"
    },
    {
        Icon:MdOutlineDashboardCustomize,
        Content:"My dashboard",
        Link:"/userfundraiser"
    },
    {
        Icon:RiRefund2Line,
        Content:"Funded campaigns",
        Link:"/profile"
    },
    {
        Icon:IoSettingsOutline,
        Content:"Profile settings",
        Link:"/profile"
    },
]