import { useSelector } from 'react-redux'
import styles from './Header.module.css'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import { useFavorites } from '../../hooks/useFavorites'

export default function Header(){

    const {favorites} = useFavorites()

    return (
        <header>
            <BsFillBookmarkHeartFill fontSize={20}/>
            <span>{favorites.length}</span>
        </header>
    )
}