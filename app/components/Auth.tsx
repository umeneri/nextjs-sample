import React, { useState, VFC } from 'react'
import { supabase } from '@/lib/supabase'

export const Auth: VFC = () => {
    const [isLoding, setIsLoding] = useState(false)
    const [email, setEmail] = useState('')

    const handleLogin = async (email: string) => {
        try {
            setIsLoding(true)
            // 既存のユーザーにログインするか、サードパーティのプロバイダーを介してログインします。
            const { error } = await supabase.auth.signInWithOAuth({ email })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error: any) {
            alert(error.error_description || error.message)
        } finally {
            setIsLoding(false)
        }
    }

    return (
        <div className="row flex flex-center">
            <div className="col-6 form-widget">
                <h1 className="header">Supabase + Next.js</h1>
                <p className="description">
                    Sign in via magic link with your email below
                </p>
                <div>
                    <input
                        className="inputField"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            handleLogin(email)
                        }}
                        className="button block"
                        disabled={isLoding}
                    >
                        <span>{isLoding ? 'Loading' : 'Send magic link'}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
