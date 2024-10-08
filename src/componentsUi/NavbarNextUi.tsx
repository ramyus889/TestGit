"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

import { AcmeLogo } from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const userclasstrue = [
    "rounded-[50px] bg-white px-4 py-5 font-bold text-black",
  ];

  const userclassfalse = ["text-black dark:text-white"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <Link className="pe-5 text-black dark:text-white" href="/">
            Frontend
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="mt-5 hidden gap-4 rounded-[50px] border-1 border-white  lg:flex"
        justify="center"
      >
        <NavbarItem>
          <Link
            className={` pe-5 ps-5 ${
              pathname === "/" ? userclasstrue : userclassfalse
            }`}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={` pe-5 ps-5 ${
              pathname === "/practice" ? userclasstrue : userclassfalse
            }`}
            href="/practice"
          >
            practice
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={` pe-5 ps-5 ${
              pathname === "/ReactQ" ? userclasstrue : userclassfalse
            }`}
            href="/ReactQ"
          >
            ReactQ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={` pe-5 ps-5 ${
              pathname === "/Compare" ? userclasstrue : userclassfalse
            }`}
            href="/Compare"
          >
            Compare
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={` pe-5 ps-5 ${
              pathname === "/Rest" ? userclasstrue : userclassfalse
            }`}
            href="/Rest"
          >
            Rest
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={` pe-5 ps-5 ${
              pathname === "/Aceternity" ? userclasstrue : userclassfalse
            }`}
            href="/Aceternity"
          >
            Aceternity
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden items-center gap-5 sm:flex"></NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
