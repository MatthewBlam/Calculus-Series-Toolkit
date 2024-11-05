"use client";
import { MathJax } from "better-react-mathjax";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { PT_Serif } from "next/font/google";
import { HeadingSeparator } from "./ui/heading-separator";

const ptSerif = PT_Serif({ weight: "400", subsets: ["latin"] });

const An = "`sum_(n=1)^oo a_n`";
const Bn = "`sum_(n=1)^oo b_n`";

function series(func: string) {
    return "`sum_(n=1)^oo`" + func;
}

function SeriesTest({
    header,
    children,
    className,
}: {
    header: string;
    children?: ReactNode;
    className?: string;
}) {
    return (
        <div className={twMerge(className, "mb-20")}>
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

export function PSeries() {
    return (
        <SeriesTest header="P-Series">
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

export function GeometricSeries() {
    return (
        <SeriesTest header="Geometric Series">
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

export function TelescopingSeries() {
    return (
        <SeriesTest header="Telescoping Series">
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

export function DivergenceTest() {
    return (
        <SeriesTest header="Divergence Test">
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

export function IntegralTest() {
    return (
        <SeriesTest header="Integral Test">
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
