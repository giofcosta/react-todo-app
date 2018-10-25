import React from 'react'
import Button from '@material-ui/core/Button'

export default class Todo extends React.Component {
    render() {
        return (
            <div>
                <h1>Todo</h1>
                <Button variant="contained" color="primary">
                  Hello World
                </Button>
            </div>
        )
    }
}

