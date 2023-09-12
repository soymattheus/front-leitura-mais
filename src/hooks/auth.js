import React from "react";

const AuthContext = React.createContext({
    signIn: () => console.log('Not implemented yet'),
    signOut: () => console.log('implemented yet')
});

AuthContext.displayName = 'Contexto de autenticação'

export function AuthProvider({children}) {
    const [token, setToken] = React.useState('')
    const [loged, setLoged] = React.useState(false)


    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
                loged,
                setLoged,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = React.useContext(AuthContext)

    if (!context) throw new Error('useAuth must be used within an AuthPtovider')

    return context
}