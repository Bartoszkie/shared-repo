/**
 * @name useFilters
 * @description This is a custom hook that manages filters state. For showcase usage only.
 */

import { useCallback, useState } from "react";

export function useFilters<T, V>(initialState: T) {
    const [filters, setFilters] = useState(initialState);
    const clear = useCallback(() => setFilters(initialState), [initialState]);
    const updateFilters = useCallback((key: string, value: V) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    }, [setFilters]);

    return {
        filters,
        clear,
        updateFilters,
    }
}