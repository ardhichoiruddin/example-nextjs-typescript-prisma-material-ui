import { FC } from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import { signIn, signOut, useSession } from 'next-auth/client'

import Login from './login'
import AddPost from './addPost'

const Home: FC = () => {

    const [ session ] = useSession()
    
    return (
        <>
            <Container>
                <Box p={3} mb={4}>

                    { session ? (
                        <Button 
                            type="button"
                            variant="contained" 
                            color="secondary"
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </Button>
                    ) : (
                        <Button 
                            type="button"
                            variant="contained" 
                            color="primary"
                            onClick={() => signIn()}
                        >
                            Sign In
                        </Button>
                    ) }
                   
                </Box>
                { session ? <AddPost/> : <Login/> }
            </Container>
        </>
    )
}

export default Home
