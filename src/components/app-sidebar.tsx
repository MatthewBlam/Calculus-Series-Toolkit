"use client";
import * as React from "react";
import { SquareSigma } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarSeparator,
} from "@/components/ui/sidebar";

import { useScrollContext } from "@/contexts/scroll-context";

const data = {
    navMain: [
        {
            title: "Common Series",
            url: "#",
            items: [
                {
                    title: "P-Series",
                    url: "#",
                },
                {
                    title: "Geometric Series",
                    url: "#",
                },
                {
                    title: "Telescoping Series",
                    url: "#",
                },
            ],
        },
        {
            title: "Series Tests",
            url: "#",
            items: [
                {
                    title: "Divergence Test",
                    url: "#",
                },
                {
                    title: "Integral Test",
                    url: "#",
                },
                {
                    title: "Direct Comparison Test",
                    url: "#",
                },
                {
                    title: "Limit Comparison Test",
                    url: "#",
                },
                {
                    title: "Alternating Series Test",
                    url: "#",
                },
                {
                    title: "Absolute Convergence Test",
                    url: "#",
                },
                {
                    title: "Ratio Test",
                    url: "#",
                },
                {
                    title: "Root Test",
                    url: "#",
                },
            ],
        },
    ],
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    page: string;
}

export function AppSidebar({ page, ...props }: AppSidebarProps) {
    const { setScroll } = useScrollContext();
    return (
        <Sidebar variant="sidebar" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <div className="cursor-pointer">
                                <div className="flex aspect-square size-6 ml-1 items-center justify-center bg-transparent text-sidebar-primary">
                                    <SquareSigma
                                        strokeWidth={2}
                                        className="size-6"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 leading-none">
                                    <span className="font-semibold text-sidebar-primary">
                                        Calculus Series Toolkit
                                    </span>
                                </div>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="pt-0">
                    <SidebarMenu className="gap-2">
                        {data.navMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarSeparator className="mb-2" />
                                <SidebarMenuButton asChild>
                                    <span className="font-medium cursor-pointer">
                                        {item.title}
                                    </span>
                                </SidebarMenuButton>
                                {item.items?.length ? (
                                    <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                                        {item.items.map((item) => (
                                            <SidebarMenuSubItem
                                                key={item.title}>
                                                <SidebarMenuSubButton
                                                    asChild
                                                    isActive={
                                                        page == item.title
                                                            ? true
                                                            : false
                                                    }
                                                    onClick={(e) => {
                                                        setScroll(item.title);
                                                    }}>
                                                    <span className="cursor-pointer">
                                                        {item.title}
                                                    </span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                ) : null}
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
