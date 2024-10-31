"use client";
import * as React from "react";
import { Sigma } from "lucide-react";

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
    active: string;
    setActive: Function;
}

export function AppSidebar({ ...props }: AppSidebarProps) {
    return (
        <Sidebar variant="floating" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#" className="gap-3">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Sigma
                                        strokeWidth={2.75}
                                        className="size-4"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 leading-none">
                                    <span className="font-semibold">
                                        Calculus Series Toolkit
                                    </span>
                                </div>
                            </a>
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
                                    <a href={item.url} className="font-medium">
                                        {item.title}
                                    </a>
                                </SidebarMenuButton>
                                {item.items?.length ? (
                                    <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                                        {item.items.map((item) => (
                                            <SidebarMenuSubItem
                                                key={item.title}>
                                                <SidebarMenuSubButton
                                                    asChild
                                                    isActive={
                                                        props.active ==
                                                        item.title
                                                            ? true
                                                            : false
                                                    }
                                                    onClick={(e) => {
                                                        props.setActive(
                                                            item.title
                                                        );
                                                    }}>
                                                    <a href={item.url}>
                                                        {item.title}
                                                    </a>
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
