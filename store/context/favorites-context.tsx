import {createContext, ReactNode} from "react";

export const FavoritesContext = createContext<{ value: FavoritesContextType } | null>({
  value: {
    ids: [],
    addFavorite: () => {},
    removeFavorite: () => {},
  }
})

function FavoritesContextProvider({children}: Props) {
  return <FavoritesContext.Provider value={null}>
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