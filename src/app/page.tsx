"use client";
import { MathJaxContext } from "better-react-mathjax";
import {
    AbsoluteConvergenceTest,
    AlternatingSeriesTest,
    DirectComparisonTest,
    DivergenceTest,
    GeometricSeries,
    IntegralTest,
    LimitComparisonTest,
    PSeries,
    RatioTest,
    RootTest,
    TelescopingSeries,
} from "@/components/series-tests";
import { InView } from "react-intersection-observer";

export default function Page() {
    const items = [
        (inView: boolean) => {
            return <PSeries inView={inView}></PSeries>;
        },
        (inView: boolean) => {
            return <GeometricSeries inView={inView}></GeometricSeries>;
        },
        (inView: boolean) => {
            return <TelescopingSeries inView={inView}></TelescopingSeries>;
        },
        (inView: boolean) => {
            return <DivergenceTest inView={inView}></DivergenceTest>;
        },
        (inView: boolean) => {
            return <IntegralTest inView={inView}></IntegralTest>;
        },
        (inView: boolean) => {
            return (
                <DirectComparisonTest inView={inView}></DirectComparisonTest>
            );
        },
        (inView: boolean) => {
            return <LimitComparisonTest inView={inView}></LimitComparisonTest>;
        },
        (inView: boolean) => {
            return (
                <AlternatingSeriesTest inView={inView}></AlternatingSeriesTest>
            );
        },
        (inView: boolean) => {
            return (
                <AbsoluteConvergenceTest
                    inView={inView}></AbsoluteConvergenceTest>
            );
        },
        (inView: boolean) => {
            return <RatioTest inView={inView}></RatioTest>;
        },
        (inView: boolean) => {
            return <RootTest inView={inView}></RootTest>;
        },
    ];

    const config = {
        loader: { load: ["input/asciimath"] },
    };

    return (
        <MathJaxContext config={config}>
            <div className="w-full h-fit">
                {items.map((item) => (
                    <InView
                        key={String(item)}
                        threshold={0}
                        rootMargin="-45% 0% -55% 0%">
                        {({ inView, ref }) => (
                            <div ref={ref}>{item(inView)}</div>
                        )}
                    </InView>
                ))}
            </div>
        </MathJaxContext>
    );
}
