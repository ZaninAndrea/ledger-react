import React from "react"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import Checkbox from "@material-ui/core/Checkbox"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Slide from "@material-ui/core/Slide"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"
import AppBar from "@material-ui/core/AppBar"

function Transition(props) {
    return <Slide direction="up" {...props} />
}

export default class NewExpense extends React.Component {
    state = {
        selected: [],
        amount: 0,
        description: "",
    }

    handleToggle = value => () => {
        this.setState(({ selected }) => {
            if (selected.indexOf(value) !== -1)
                return {
                    selected: selected.filter(v => v !== value),
                }
            else
                return {
                    selected: [...selected, value],
                }
        })
    }
    handleAmountChange = e => this.setState({ amount: e.target.value })
    handleDescriptionChange = e =>
        this.setState({ description: e.target.value })
    registerExpense = () => {
        fetch("http://https://appartamento.herokuapp.com/expenses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                beneficiaries: this.state.selected,
                amount: this.state.amount,
                description: this.state.description,
                spender: this.props.spender,
            }),
        })
            .then(response => response.json())
            .then(console.log)

        this.props.handleClose()
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                fullScreen={true}
            >
                <AppBar>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            onClick={this.props.handleClose}
                            aria-label="Close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Register new expense
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent id="new-expense-content">
                    <TextField
                        variant="outlined"
                        label="Description"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                    />
                    <br />
                    <br />
                    <TextField
                        variant="outlined"
                        label="Amount"
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                        type="number"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    €
                                </InputAdornment>
                            ),
                        }}
                    />
                    {/* <Typography variant="title" gutterBottom>
                        Who was this expense for?
                    </Typography> */}
                    <List>
                        {this.props.users.map(({ name, _id }) => (
                            <ListItem
                                key={_id}
                                dense
                                button
                                onClick={this.handleToggle(_id)}
                            >
                                <Checkbox
                                    checked={
                                        this.state.selected.indexOf(_id) !== -1
                                    }
                                    tabIndex={-1}
                                    disableRipple
                                />
                                <ListItemText primary={name} />
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose}>Nevermind</Button>
                    <Button
                        onClick={this.registerExpense}
                        color="primary"
                        disabled={
                            !this.state.description ||
                            !this.state.amount ||
                            !this.state.selected.length
                        }
                    >
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
