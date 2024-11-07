"use client";
import { MathJax } from "better-react-mathjax";
import {
    forwardRef,
    MutableRefObject,
    ReactNode,
    useEffect,
    useRef,
} from "react";
import { twMerge } from "tailwind-merge";
import { PT_Serif } from "next/font/google";
import { HeadingSeparator } from "./ui/heading-separator";

import { usePageContext } from "@/contexts/page-context";
import { useScrollContext } from "@/contexts/scroll-context";

const ptSerif = PT_Serif({ weight: "400", subsets: ["latin"] });

const An = "`sum_(n=1)^oo a_n`";
const Bn = "`sum_(n=1)^oo b_n`";

function series(func: string) {
    return "`sum_(n=1)^oo`" + func;
}

interface SeriesTestProps {
    header: string;
    children?: ReactNode;
    className?: string;
}

const SeriesTest = forwardRef<HTMLDivElement, SeriesTestProps>(
    ({ header, children, className }, ref) => {
        return (
            <div
                ref={ref}
                className={twMerge(className, "mt-4 mb-20 scroller")}>
                <header className={twMerge(ptSerif.className, "text-2xl")}>
                    {header}
                </header>
                <HeadingSeparator className="mt-2 mb-10"></HeadingSeparator>
                <div className="flex flex-col items-start sm:items-center justify-center overflow-x-scroll lg:overflow-x-hidden overflow-y-hidden">
                    <MathJax>
                        <div className="flex flex-col items-start origin-top-left scale-[85%] sm:scale-100 sm:items-center justify-center gap-8">
                            {children}
                        </div>
                    </MathJax>
                </div>
            </div>
        );
    }
);

export function PSeries({ inView }: { inView: boolean }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { scroll } = useScrollContext();
    useEffect(() => {
        if (scroll == "P-Series") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scroll]);
    const { setPage, timedOut, setTimedOut } = usePageContext();
    if (inView && !timedOut) {
        setPage("P-Series");
        /*setTimedOut(true);
        setTimeout(() => {
            setTimedOut(false);
        }, 1000);*/
    }
    return (
        <SeriesTest ref={ref} header="P-Series">
            <span>{An + "`\\ = \\ \\`" + series("`1/n^p`")}</span>
            <span>
                {"`p > 1 \\ \\ => \\ \\ \\`" + An + "`\\ \\ text(converges)`"}
            </span>
            <span>
                {"`p <= 1 \\ \\ => \\ \\ \\`" + An + "`\\ \\ text(diverges)`"}
            </span>
        </SeriesTest>
    );
}

export function GeometricSeries({ inView }: { inView: boolean }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { scroll } = useScrollContext();
    useEffect(() => {
        if (scroll == "Geometric Series") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scroll]);
    const { setPage, timedOut, setTimedOut } = usePageContext();
    if (inView && !timedOut) {
        setPage("Geometric Series");
        /*setTimedOut(true);
        setTimeout(() => {
            setTimedOut(false);
        }, 1000);*/
    }
    return (
        <SeriesTest ref={ref} header="Geometric Series">
            <span>{An + "`\\ = \\ \\`" + series("`ar^n`")}</span>
            <span>
                {"`abs(r) < 1 \\ \\ => \\ \\ \\`" +
                    An +
                    "`\\ \\ text(converges to) \\ \\ a/(1-r)`"}
            </span>
            <span>
                {"`abs(r) >= 1 \\ \\ => \\ \\ \\`" +
                    An +
                    "`\\ \\ text(diverges)`"}
            </span>
        </SeriesTest>
    );
}

export function TelescopingSeries({ inView }: { inView: boolean }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { scroll } = useScrollContext();
    useEffect(() => {
        if (scroll == "Telescoping Series") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scroll]);
    const { setPage, timedOut, setTimedOut } = usePageContext();
    if (inView && !timedOut) {
        setPage("Telescoping Series");
        /*setTimedOut(true);
        setTimeout(() => {
            setTimedOut(false);
        }, 1000);*/
    }
    return (
        <SeriesTest ref={ref} header="Telescoping Series">
            <span>
                {An + "`\\ = \\ \\`" + series("`\\ [ \\ b_n - b_(n+1) \\ ]`")}
            </span>
            <span>
                {
                    "`S_k \\ = \\ b_1 - b_(k+1) \\ \\ \\ {( \\ S_1 \\ = \\ (b_1 - b_2) \\ = \\ b_1 - b_2),( \\ S_2 \\ = \\ (b_1 - b_2) \\ + \\ (b_2 - b_3) \\ = \\ b_1 - b_3),( \\ S_3 \\ = \\ (b_1 - b_2) \\ + \\ (b_2 - b_3) \\ + \\ (b_3 - b_4) \\ = \\ b_1 - b_4):}`"
                }
            </span>
            <span>
                {"`lim_(k->oo) S_k = L \\ \\ => \\ \\ \\`" +
                    An +
                    "`\\ \\ text(converges to) \\ \\ L`"}
            </span>
            <span>
                {"`lim_(k->oo) S_k \\ \\ text(does not exist) \\ \\ => \\ \\ \\`" +
                    An +
                    "`\\ \\ text(diverges)`"}
            </span>
        </SeriesTest>
    );
}

export function DivergenceTest({ inView }: { inView: boolean }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { scroll } = useScrollContext();
    useEffect(() => {
        if (scroll == "Divergence Test") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scroll]);
    const { setPage, timedOut, setTimedOut } = usePageContext();
    if (inView && !timedOut) {
        setPage("Divergence Test");
        /*setTimedOut(true);
        setTimeout(() => {
            setTimedOut(false);
        }, 1000);*/
    }
    return (
        <SeriesTest ref={ref} header="Divergence Test">
            <span>{An}</span>
            <span>
                {"`lim_(n->oo)a_n \\ \\ text(does not exist) \\ \\ => \\ \\ `" +
                    An +
                    "`\\ \\ text(diverges)`"}
            </span>
            <span>
                {"`lim_(n->oo)a_n != \\ 0 \\ \\ => \\ \\ `" +
                    An +
                    "`\\ \\ text(diverges)`"}
            </span>
        </SeriesTest>
    );
}

export function IntegralTest({ inView }: { inView: boolean }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { scroll } = useScrollContext();
    useEffect(() => {
        if (scroll == "Integral Test") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scroll]);
    const { setPage, timedOut, setTimedOut } = usePageContext();
    if (inView && !timedOut) {
        setPage("Integral Test");
        /*setTimedOut(true);
        setTimeout(() => {
            setTimedOut(false);
        }, 1000);*/
    }
    return (
        <SeriesTest ref={ref} header="Integral Test">
            <span>{An}</span>
            <span>
                {
                    "`text(for some) \\ \\ N > 0 \\ \\ \\ \\ {( \\ \\ f \\ \\ \\ text(positive, continous, decreasing on) \\ \\ [N, oo)), ( \\ \\ a_n = f(n)):}`"
                }
            </span>

            <span>
                {"`int_N^oo f(x)dx \\ \\ text(converges) \\ \\ <=> \\ \\ `" +
                    An +
                    "`\\ \\ text(converges)`"}
            </span>
            <span>
                {"`int_N^oo f(x)dx \\ \\ text(diverges) \\ \\ <=> \\ \\ `" +
                    An +
                    "`\\ \\ text(diverges)`"}
            </span>
        </SeriesTest>
    );
}

export function DirectComparisonTest({ inView }: { inView: boolean }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { scroll } = useScrollContext();
    useEffect(() => {
        if (scroll == "Direct Comparison Test") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scroll]);
    const { setPage, timedOut, setTimedOut } = usePageContext();
    if (inView && !timedOut) {
        setPage("Direct Comparison Test");
        /*setTimedOut(true);
        setTimeout(() => {
            setTimedOut(false);
        }, 1000);*/
    }
    return (
        <SeriesTest ref={ref} header="Direct Comparison Test">
            <span>{An + "` \\ \\ \\ and \\ \\ \\ `" + Bn}</span>
            <span>{"`a_n, \\ b_n > 0 \\ \\ text(for all) \\ \\ n`"}</span>
            <span>
                {"`a_n <= b_n \\ \\ text(for all) \\ \\ n \\ and \\ `" +
                    Bn +
                    "` \\ \\ text(converges) \\ \\ => \\ \\ \\`" +
                    An +
                    "`\\ \\ text(converges)`"}
            </span>
            <span>
                {"`a_n >= b_n \\ \\ text(for all) \\ \\ n \\ and \\ `" +
                    Bn +
                    "` \\ \\ text(diverges) \\ \\ => \\ \\ \\`" +
                    An +
                    "`\\ \\ text(diverges)`"}
            </span>
        </SeriesTest>
    );
}

export function LimitComparisonTest({ inView }: { inView: boolean }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { scroll } = useScrollContext();
    useEffect(() => {
        if (scroll == "Limit Comparison Test") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scroll]);
    const { setPage, timedOut, setTimedOut } = usePageContext();
    if (inView && !timedOut) {
        setPage("Limit Comparison Test");
        /*setTimedOut(true);
        setTimeout(() => {
            setTimedOut(false);
        }, 1000);*/
    }
    return (
        <SeriesTest ref={ref} header="Limit Comparison Test">
            <span>{An + "` \\ \\ \\ and \\ \\ \\ `" + Bn}</span>
            <span>{"`a_n, \\ b_n > 0 \\ \\ text(for all) \\ \\ n`"}</span>
            <span>{"`lim_(n->oo) a_n/b_n = L`"}</span>
            <span>
                {"`0 < L < oo \\ \\ => \\ \\ `" +
                    "`{( \\ sum_(n=1)^oo b_n \\ \\ text(converges) \\ \\ <=> \\ \\ sum_(n=1)^oo a_n \\ \\ text(converges) ), (\\), ( \\ sum_(n=1)^oo b_n \\ \\ text(diverges) \\ \\ <=> \\ \\ sum_(n=1)^oo a_n \\ \\ text(diverges)  ):}`"}
            </span>
            <span>
                {"`L = 0 \\ and \\ `" +
                    Bn +
                    "` \\ \\ text(converges) \\ \\ => \\ \\ \\`" +
                    An +
                    "`\\ \\ text(converges)`"}
            </span>
            <span>
                {"`L = oo \\ and \\ `" +
                    Bn +
                    "` \\ \\ text(diverges) \\ \\ => \\ \\ \\`" +
                    An +
                    "`\\ \\ text(diverges)`"}
            </span>
        </SeriesTest>
    );
}

export function AlternatingSeriesTest({ inView }: { inView: boolean }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { scroll } = useScrollContext();
    useEffect(() => {
        if (scroll == "Alternating Series Test") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scroll]);
    const { setPage, timedOut, setTimedOut } = usePageContext();
    if (inView && !timedOut) {
        setPage("Alternating Series Test");
        /*setTimedOut(true);
        setTimeout(() => {
            setTimedOut(false);
        }, 1000);*/
    }
    return (
        <SeriesTest ref={ref} header="Alternating Series Test">
            <span>{An + "`\\ = \\ \\`" + series("`(-1)^(n+1) \\ b_n`")}</span>
            <span>
                {
                    "`b_n \\ \\ text(positive, decreasing on) \\ \\ [N,oo) \\ \\ text(for some) \\ \\ N > 0`"
                }
            </span>
            <span>
                {"`lim_(n->oo) b_n = \\ 0 \\ \\ => \\ \\ \\`" +
                    An +
                    "`\\ \\ text(converges)`"}
            </span>
        </SeriesTest>
    );
}

export function AbsoluteConvergenceTest({ inView }: { inView: boolean }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { scroll } = useScrollContext();
    useEffect(() => {
        if (scroll == "Absolute Convergence Test") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scroll]);
    const { setPage, timedOut, setTimedOut } = usePageContext();
    if (inView && !timedOut) {
        setPage("Absolute Convergence Test");
        /*setTimedOut(true);
        setTimeout(() => {
            setTimedOut(false);
        }, 1000);*/
    }
    return (
        <SeriesTest ref={ref} header="Absolute Convergence Test">
            <span>{An}</span>
            <span>
                {"`sum_(n=1)^oo |a_n| \\ \\ text(converges) \\ \\ => \\ \\ \\`" +
                    An +
                    "` \\ \\ text(converges)`"}
            </span>
        </SeriesTest>
    );
}

export function RatioTest({ inView }: { inView: boolean }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { scroll } = useScrollContext();
    useEffect(() => {
        if (scroll == "Ratio Test") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scroll]);
    const { setPage, timedOut, setTimedOut } = usePageContext();
    if (inView && !timedOut) {
        setPage("Ratio Test");
        /*setTimedOut(true);
        setTimeout(() => {
            setTimedOut(false);
        }, 1000);*/
    }
    return (
        <SeriesTest ref={ref} header="Ratio Test">
            <span>{An}</span>
            <span>{"`lim_(n->oo) |a_(n+1)/a_n| = L`"}</span>
            <span>
                {"`L < 1 \\ \\ => \\ \\ \\`" +
                    An +
                    "` \\ \\ text(converges absolutely)`"}
            </span>
            <span>
                {"`L > 1 \\ \\ => \\ \\ \\`" + An + "` \\ \\ text(diverges)`"}
            </span>
            <span>{"`L = 1 \\ \\ => \\ \\ text(inconclusive)`"}</span>
        </SeriesTest>
    );
}

export function RootTest({ inView }: { inView: boolean }) {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const { scroll } = useScrollContext();
    useEffect(() => {
        if (scroll == "Root Test") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scroll]);
    const { setPage, timedOut, setTimedOut } = usePageContext();
    if (inView && !timedOut) {
        setPage("Root Test");
        /*setTimedOut(true);
        setTimeout(() => {
            setTimedOut(false);
        }, 1000);*/
    }
    return (
        <SeriesTest ref={ref} header="Root Test">
            <span>{An}</span>
            <span>{"`lim_(n->oo) root(n)(|a_n|) = L`"}</span>
            <span>
                {"`L < 1 \\ \\ => \\ \\ \\`" +
                    An +
                    "` \\ \\ text(converges absolutely)`"}
            </span>
            <span>
                {"`L > 1 \\ \\ => \\ \\ \\`" + An + "` \\ \\ text(diverges)`"}
            </span>
            <span>{"`L = 1 \\ \\ => \\ \\ text(inconclusive)`"}</span>
        </SeriesTest>
    );
}
