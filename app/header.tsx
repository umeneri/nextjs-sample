"use client";

import React from "react";
import LogoutButton from "@/components/Logout";
import SignInGithub from "@/components/SignInWithGithub";
import useAuth from "@/hooks/useAuth";

export default function Header(): JSX.Element {
    const {session: isLogin} = useAuth()

    return (
        <header>
            {isLogin ? <LogoutButton/> : <SignInGithub/>}
            <p>header</p>
            <hr/>
        </header>
    )
}
