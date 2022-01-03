import React from 'react'
import {ImBooks} from 'react-icons/im';
import {GiMeditation} from 'react-icons/gi';
import {FiActivity} from 'react-icons/fi';
import {AiFillHome} from 'react-icons/ai';
import {FaLaughSquint} from 'react-icons/fa';
import {BiRadio} from 'react-icons/bi';


export const navbarData = [
    {
        title:'Home',
        icon:<AiFillHome/>,
        link: "/"
    },
    {
        title:'Activities',
        icon:<FiActivity/>,
        link: "/activities"
    },
    {
        title:'Books',
        icon:<ImBooks/>,
        link: "/books"
    },
    {
        title:'Meditate',
        icon:<GiMeditation/>,
        link: "/meditate"
    },
    {
        title:'Jokes',
        icon:<FaLaughSquint/>,
        link: "/jokes"
    },
    {
        title:'Lofi Music',
        icon:<BiRadio/>,
        link: "/lofi"
    }
]