import {createContext, ReactNode, useState} from "react";

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: () => {
  },
  removeFavorite: () => {
  },
})

function FavoritesContextProvider({children}: Props) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([])

  function addFavorite(id: string) {
    setFavoriteMealIds([...favoriteMealIds, id])
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds(favoriteMealIds.filter((mealId) => mealId !== id))
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  }

  return <FavoritesContext.Provider value={value}>
    {children}
  </FavoritesContext.Provider>
}

export default FavoritesContextProvider

interface Props {
  children: ReactNode
}

interface FavoritesContextType {
  ids: string[]
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
}