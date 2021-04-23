import { FC } from 'react'
import Container from '@material-ui/core/Container'

import Login from './login'
import AddPost from './addPost'

const Home: FC = () => {
    return (
        <>
            <Container>
                <AddPost/>
            </Container>
        </>
    )
}

export default Home
