"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode, useState } from "react";

export default function Sidebar({ children }: { children: ReactNode }) {
    const [active, setActive] = useState("");
    const section = [
        "P-Series",
        "Geometric Series",
        "Telescoping Series",
    ].includes(active)
        ? "Common Series"
        : "Series Tests";
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "19rem",
                } as React.CSSProperties
            }>
            <AppSidebar active={active} setActive={setActive} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">
                                    {section}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block mt-[1px]" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{active}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <div id="page-content" className="w-full h-full px-6">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
