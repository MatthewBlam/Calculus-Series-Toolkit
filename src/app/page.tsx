"use client";
import { MathJaxContext } from "better-react-mathjax";
import {
    DivergenceTest,
    GeometricSeries,
    IntegralTest,
    PSeries,
    TelescopingSeries,
} from "@/components/series-tests";

export default function Page() {
    const config = {
        loader: { load: ["input/asciimath"] },
    };
    return (
        <MathJaxContext config={config}>
            <div className="w-full h-fit">
                <PSeries></PSeries>
                <GeometricSeries></GeometricSeries>
                <TelescopingSeries></TelescopingSeries>
                <DivergenceTest></DivergenceTest>
                <IntegralTest></IntegralTest>
            </div>
        </MathJaxContext>
    );
}
