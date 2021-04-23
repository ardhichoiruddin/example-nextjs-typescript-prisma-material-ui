import { FC } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    rootInput: {
      '& .MuiTextField-root': {
        width: '100%',
      },
    },
}));

const Login: FC = () => {

    const classes = useStyles()

    return (
        <div className={classes.rootInput}>
            <Box display="flex" justifyContent="center" m={1}>
                <Box p={3} width={300}>
                    <form action="">
                        <Box>
                            <TextField 
                                id="outlined-basic" 
                                label="Email" 
                                placeholder="write your email"
                                variant="outlined" 
                                type="email"
                            />
                        </Box>
                        <Box mt={2}>
                            <TextField 
                                id="outlined-basic" 
                                label="Password" 
                                placeholder="write your password"
                                variant="outlined" 
                                type="password"
                            />
                        </Box>
                        <Box mt={2}>
                            <Button 
                                type="submit"
                                variant="contained" 
                                color="primary"
                            >
                                Login
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </div>
    )
}

export default Login
