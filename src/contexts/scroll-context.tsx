"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from "react";

export const ScrollContext = createContext<{
    scroll: string;
    setScroll: Dispatch<SetStateAction<string>>;
} | null>(null);

export default function ScrollContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [scroll, setScroll] = useState("");

    return (
        <ScrollContext.Provider value={{ scroll, setScroll }}>
            {children}
        </ScrollContext.Provider>
    );
}

export function useScrollContext() {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error(
            "useScrollContext must be used within a ScrollContextProvider"
        );
    }
    return context;
}
