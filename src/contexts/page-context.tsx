"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from "react";

export const PageContext = createContext<{
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
    timedOut: boolean;
    setTimedOut: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export default function PageContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [page, setPage] = useState("");
    const [timedOut, setTimedOut] = useState(false);

    return (
        <PageContext.Provider value={{ page, setPage, timedOut, setTimedOut }}>
            {children}
        </PageContext.Provider>
    );
}

export function usePageContext() {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error(
            "usePageContext must be used within a PageContextProvider"
        );
    }
    return context;
}
