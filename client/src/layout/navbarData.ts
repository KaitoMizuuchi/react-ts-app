import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CreateIcon from '@mui/icons-material/Create';
import { navbarItemsProps } from '@/types';


export const navbarConfig: navbarItemsProps[] = [
    {
        path: "/",
        label: "Home",
        icon: HomeIcon,
        selected: false,
    },
    {
        path: "/mypage",
        label: "mypage",
        icon: PersonIcon,
        selected: false
    },
    {
        path: "/form",
        label: "form",
        icon: CreateIcon,
        selected: false
    },
    {
        path: "/contact",
        label: "contact",
        icon: ContactPageIcon,
        selected: false
    },
]
