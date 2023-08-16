import styles from './RecipeItem.modules.css'
import { actions } from '../../store/favorites/favorites.slice';
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';
function RecipeItem({recipe}){
    const {favorites} = useFavorites()
    
    const { toggleFavorites } = useActions();

    const isExist = favorites.some(r => r.id === recipe.id)

    console.log(recipe.image)

    
    return(
        <div className='item'>
            <img src={recipe.image} alt={recipe.name} width={100} />
            <h4>{recipe.name}</h4>
            <button onClick={() => {
                toggleFavorites(recipe)
            }}>{isExist ? 'Remowe from' : 'Add to favorites'}</button>
        </div>
    )
}

export default RecipeItem;