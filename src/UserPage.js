import React from "react"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Debts from "./Debts"
import Fab from "@material-ui/core/Fab"
import IconButton from "@material-ui/core/IconButton"
import AddIcon from "@material-ui/icons/Add"
import ExitIcon from "@material-ui/icons/ExitToApp"

export default ({
    name,
    debts,
    loadingDebts,
    newExpenseCallback,
    cancelDebt,
    unselectUser,
}) => (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    color="inherit"
                    style={{ flexGrow: 1 }}
                >
                    Your Debts
                </Typography>
                <IconButton
                    color="inherit"
                    aria-label="Backk"
                    style={{
                        marginRight: -12,
                        marginLeft: 20,
                    }}
                    onClick={unselectUser}
                >
                    <ExitIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <div style={{ padding: "16px" }}>
            <Debts
                data={debts}
                loading={loadingDebts}
                cancelDebt={cancelDebt}
            />
            <Fab
                color="primary"
                aria-label="Add"
                onClick={newExpenseCallback}
                style={{ position: "absolute", bottom: "16px", right: "16px" }}
            >
                <AddIcon />
            </Fab>
        </div>
    </div>
)
