import React from "react"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Debts from "./Debts"
import Ledger from "./Ledger"
import Fab from "@material-ui/core/Fab"
import IconButton from "@material-ui/core/IconButton"
import AddIcon from "@material-ui/icons/Add"
import ExitIcon from "@material-ui/icons/ExitToApp"
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery"

export default ({
    userId,
    debts,
    loading,
    ledger,
    newExpenseCallback,
    cancelDebt,
    unselectUser,
}) => {
    const wideScreen = useMediaQuery("(min-width:600px)")

    return (
        <div>
            <AppBar position="static" style={{ position: "fixed" }}>
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
            <div
                style={{
                    padding: wideScreen
                        ? "80px 16px 16px 16px"
                        : "72px 16px 16px 16px",
                }}
            >
                <Typography variant="h6">Debts yet to pay off</Typography>
                <br />
                <Debts data={debts} loading={loading} cancelDebt={cancelDebt} />
                <br />
                <Typography variant="h6">All expenses</Typography>
                <Ledger data={ledger} loading={loading} userId={userId} />
                <Fab
                    color="primary"
                    aria-label="Add"
                    onClick={newExpenseCallback}
                    style={{
                        position: "fixed",
                        bottom: "16px",
                        right: "16px",
                    }}
                >
                    <AddIcon />
                </Fab>
            </div>
        </div>
    )
}
