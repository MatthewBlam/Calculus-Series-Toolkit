"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
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
import { ReactNode } from "react";
import { usePageContext } from "@/contexts/page-context";

export default function Sidebar({ children }: { children: ReactNode }) {
    const { page } = usePageContext();
    const section = [
        "P-Series",
        "Geometric Series",
        "Telescoping Series",
    ].includes(page)
        ? "Common Series"
        : "Series Tests";
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "19rem",
                } as React.CSSProperties
            }>
            <AppSidebar page={page} />
            <SidebarInset className="px-4 h-screen overflow-hidden">
                <header className="flex h-16 shrink-0 items-center gap-2">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                {section}
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block mt-[1px]" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{page}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <div
                    id="page-content"
                    className="w-full h-full px-10 overflow-y-scroll flex-1">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
