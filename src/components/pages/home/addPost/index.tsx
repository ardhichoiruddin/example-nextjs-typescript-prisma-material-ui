import { FC, useRef } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import useSWR from 'swr'

const useStyles = makeStyles((theme) => ({
    rootInput: {
      '& .MuiTextField-root': {
        width: '100%',
      },
    },
}));

const fetcher = url => fetch(url).then(res => res.json())

const AddPost: FC = () => {

    const classes = useStyles()

    const titleForm = useRef(null)
    const excerptForm = useRef(null)

    const { data: posts, error } = useSWR('api/post', fetcher)

    const onSubmit = async(e) => {
        e.preventDefault()
        const dataForm = {
            title: titleForm.current.value,
            excerpt: excerptForm.current.value
        }

        const response = await fetch('/api/post/add', {
            method: 'POST',
            body: JSON.stringify(dataForm)
        })

        if(!response.ok){
            throw new Error(response.statusText)
        }
        
        const x = await response.json()

        console.log(x)
    }

    return (
        <div className={classes.rootInput}>
            <Box display="flex" justifyContent="center" m={1}>
                <Box p={3} width={300}>
                    <form onSubmit={onSubmit}>
                        <Box>
                            <TextField 
                                id="outlined-basic" 
                                label="Title" 
                                placeholder="write your email"
                                variant="outlined" 
                                type="text"
                                name="title"
                                inputRef={titleForm}
                            />
                        </Box>
                        <Box mt={2}>
                            <TextField 
                                id="outlined-basic" 
                                label="Excerpt" 
                                placeholder="write your password"
                                variant="outlined" 
                                type="text"
                                name="excerpt"
                                inputRef={excerptForm}
                            />
                        </Box>
                        <Box mt={2}>
                            <Button 
                                type="submit"
                                variant="contained" 
                                color="primary"
                            >
                                AddPost
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>

            <Box>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Excerpt</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {posts && posts.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.excerpt}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}

export default AddPost
