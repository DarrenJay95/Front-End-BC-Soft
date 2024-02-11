function getAuth(){
    let token: string | undefined = undefined;
    return {
        getToken: () => {
            return token
        },
        setToken: () => {
            token = 'myTokenTest'
        }
    }
}

export const Auth = getAuth();