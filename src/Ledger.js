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
import { TableHead } from "@material-ui/core"
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery"

export default ({ loading, data, userId }) => {
    const getName = ({ _id, name }) => (userId === _id ? "You" : name)
    const wideScreen = useMediaQuery("(min-width:600px)")

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
                    <TableHead>
                        <TableRow>
                            <TableCell
                                component="th"
                                scope="row"
                                padding="dense"
                            >
                                Spender
                            </TableCell>
                            <TableCell
                                component="th"
                                scope="row"
                                padding="dense"
                            >
                                Description
                            </TableCell>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                                padding="dense"
                            >
                                Amount
                            </TableCell>
                            {wideScreen && (
                                <TableCell
                                    component="th"
                                    scope="row"
                                    padding="dense"
                                >
                                    Beneficiaries
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => (
                            <TableRow>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    padding="dense"
                                >
                                    {getName(row.spender)}
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    padding="dense"
                                >
                                    {row.description}
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                    padding="dense"
                                >
                                    {row.amount} €
                                </TableCell>
                                {wideScreen && (
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        padding="dense"
                                    >
                                        {row.beneficiaries
                                            .map(getName)
                                            .join(", ")}
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
}
