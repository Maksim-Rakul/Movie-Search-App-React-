import { useEffect, useState } from "react";

interface usePagintationProps<T> {
    data: T[] | undefined;
    page: number;
    perPage: number;
}

export const usePagintation = <T>({ data, page, perPage }: usePagintationProps<T>) => {
    const [newData, setNewData] = useState<T[]>([]);
    const [hasAnyItems, setHasAnyItems] = useState(true)
    
      useEffect(() => {
        const test = () => {
            if (!data) return;
    
            const totalPage = Math.floor(data?.length / perPage);
            const start = page * perPage;
            const end = start + perPage;
            
            if (page === 0) {
                setNewData(data.slice(start, end));
            } else {
                setNewData((prev) => [...prev, ...data.slice(start, end)]);
            }

            setHasAnyItems(end < data.length);

            if (page >= totalPage) {
                setHasAnyItems(false)
            } 
        };
    
        test();
      }, [data, page, perPage]);
    
    return {newData: newData, hasAnyItems}
}