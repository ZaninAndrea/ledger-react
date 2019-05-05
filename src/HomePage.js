import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Avatar from "@material-ui/core/Avatar"
import pink from "@material-ui/core/colors/pink"
import green from "@material-ui/core/colors/green"
import blue from "@material-ui/core/colors/blue"
import red from "@material-ui/core/colors/red"
import purple from "@material-ui/core/colors/purple"
import indigo from "@material-ui/core/colors/indigo"
import teal from "@material-ui/core/colors/teal"

const randomColor = () => {
    const colors = [
        pink[500],
        green[500],
        blue[500],
        red[500],
        teal[500],
        indigo[500],
        purple[500],
    ]
    const rand = Math.floor(Math.random() * colors.length)

    return colors[rand]
}
export default ({ users, selectUser }) => (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Login
                </Typography>
            </Toolbar>
        </AppBar>
        <List component="nav">
            {users.map(({ name, _id }) => (
                <ListItem
                    button
                    key={name}
                    onClick={() => selectUser({ name, _id })}
                >
                    <Avatar style={{ backgroundColor: randomColor() }}>
                        {name.substring(0, 1)}
                    </Avatar>
                    <ListItemText primary={name} />
                </ListItem>
            ))}
        </List>
    </div>
)
