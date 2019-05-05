import React from "react"
import Typography from "@material-ui/core/Typography"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"
import red from "@material-ui/core/colors/red"
import green from "@material-ui/core/colors/green"
import DeleteIcon from "@material-ui/icons/Delete"
import CircularProgress from "@material-ui/core/CircularProgress"

export default ({ loading, data, cancelDebt }) => {
    if (loading)
        return (
            <div
                style={{
                    margin: "100px calc(50vw - 30px)",
                }}
            >
                <CircularProgress size="60px" />
            </div>
        )
    else
        return (
            <Paper>
                <Table>
                    <TableBody>
                        {data.map(row => (
                            <TableRow key={row.debtee}>
                                <TableCell component="th" scope="row">
                                    {row.debteeName}
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                    style={{
                                        color:
                                            row.amount > 0
                                                ? red[500]
                                                : green[500],
                                    }}
                                >
                                    {row.amount}
                                </TableCell>
                                <TableCell padding="dense" align="right">
                                    <IconButton
                                        aria-label="Delete"
                                        onClick={() => cancelDebt(row.debtee)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
}
