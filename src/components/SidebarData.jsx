import React from 'react'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';

export const SidebarData = [
    {
        title:"News Feed",
        icon:<NewspaperOutlinedIcon/>,
        link:'/home'
    },
    {
        title:"Notifications",
        icon:<NotificationsActiveOutlinedIcon/>,
        link:'/notifications'
    },
    {
        title:"Messages",
        icon:<ForumOutlinedIcon/>,
        link:'/messages'
    },
    {
        title:"Friends",
        icon:<GroupOutlinedIcon/>,
        link:'/friends'
    },
    {
        title:"Groups",
        icon:<GroupsOutlinedIcon/>,
        link:'/groups'
    },
    {
        title:"Favorites",
        icon:<StarOutlineOutlinedIcon/>,
        link:'/favorites'
    },
    {
        title:"Events",
        icon:<CalendarMonthOutlinedIcon/>,
        link:'/events'
    },
    {
        title:"Live Chat",
        icon:<MessageOutlinedIcon/>,
        link:'/livechat'
    },
    {
        title:"Birthdays",
        icon:<CakeOutlinedIcon/>,
        link:'/birthdays'
    },
    {
        title:"Videos",
        icon:<OndemandVideoOutlinedIcon/>,
        link:'/videos'
    },
    {
        title:"Weather",
        icon:<WbSunnyOutlinedIcon/>,
        link:'/weather'
    },
    {
        title:"Marketplace",
        icon:<StorefrontOutlinedIcon/>,
        link:'/market'
    },
    {
        title:"Login",
        icon:<PersonOutlineOutlinedIcon/>,
        link:'/login'
    },
    {
        title:"Register",
        icon:<AppRegistrationOutlinedIcon/>,
        link:'/register'
    }
]

