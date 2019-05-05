import React from "react"
import "./App.css"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import Debts from "./Debts"
import NewExpense from "./NewExpense"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import UserPage from "./UserPage"
import HomePage from "./HomePage"

export default class App extends React.Component {
    state = {
        loadingUsers: true,
        loadingDebts: false,
        users: [],
        userId: null,
        userName: null,
        debts: [],
        createNewExpense: false,
    }

    constructor(props) {
        super(props)

        fetch("http://https://appartamento.herokuapp.com/users")
            .then(res => res.json())
            .then(users =>
                this.setState({
                    users,
                    loadingUsers: false,
                })
            )
    }

    componentDidMount = () => {
        const storedUserId = localStorage.getItem("userId")
        if (!!storedUserId) {
            const storedUserName = localStorage.getItem("userName")
            this.selectUser({
                name: storedUserName,
                _id: storedUserId,
            })
        }
    }

    selectUser = ({ name, _id }) => {
        localStorage.setItem("userId", _id)
        localStorage.setItem("userName", name)

        this.setState({
            userId: _id,
            userName: name,
            loadingDebts: true,
        })
        fetch(`http://https://appartamento.herokuapp.com/users/${_id}/debts`)
            .then(res => res.json())
            .then(debts =>
                this.setState({
                    debts,
                    loadingDebts: false,
                })
            )
    }
    unselectUser = () => {
        localStorage.removeItem("userId")
        localStorage.removeItem("userName")

        this.setState({
            userId: null,
            userName: null,
        })
    }

    cancelDebt = debtee => {
        fetch(
            `http://https://appartamento.herokuapp.com/users/${
                this.state.userId
            }/debts/${debtee}`,
            {
                method: "DELETE",
            }
        ).then(res => res.json())
    }

    render() {
        if (this.state.loadingUsers) return "loading"
        if (this.state.userId === null) {
            return (
                <HomePage
                    users={this.state.users}
                    selectUser={this.selectUser}
                />
            )
        } else {
            return (
                <>
                    <NewExpense
                        users={this.state.users}
                        open={this.state.createNewExpense}
                        handleClose={() =>
                            this.setState({
                                createNewExpense: false,
                            })
                        }
                        spender={this.state.userId}
                    />
                    <UserPage
                        debts={this.state.debts}
                        name={this.state.userName}
                        users={this.state.users}
                        cancelDebt={this.cancelDebt}
                        unselectUser={this.unselectUser}
                        newExpenseCallback={() =>
                            this.setState({
                                createNewExpense: true,
                            })
                        }
                    />
                </>
            )
        }
    }
}
