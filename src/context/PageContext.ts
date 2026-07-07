import { createContext, useContext } from "react";
import type { Type } from "../services/multiService";

interface usePageTypeContext {
    type: Type;
    setType: (type: Type) => void
}

export const PageTypeContext = createContext<usePageTypeContext | null>(null)

export const usePageTypeContext = () => {
    const typeContext = useContext(PageTypeContext)

    if (!typeContext) {
        throw new Error("GenreItem must be used within a MovieListProvider");
    }
    
    return typeContext
}