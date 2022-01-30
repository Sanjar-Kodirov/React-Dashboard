import React, {useContext} from "react";
import { styled } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Context} from '../../context'

export default function BasicTable({ title }) {
  const {audienceChartData} = useContext(Context);
  return (
      <div className="audience-age">
        <h2>{title}</h2>
        <div className="percentage-bar">
          {audienceChartData.map(row => {
            return  <div style={{ width: row.calories }} className="percentage-bar-item"></div>
          })}
        </div>
        <div >
          <TableContainer style={{ width: "100%", background: 'none', border: 'none' }} component={Paper}>
            <Table style={{ background: 'none', border: 'none' }} sx={{ minWidth: 350 }} aria-label="simple table">
              <TableBody style={{ border: 'none' }}>
                {audienceChartData.map((row) => (
                  <TableRow
                    style={{ background: 'none', border: 0 }}
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell style={{ border: 'none', display: 'flex', alignItems: 'center' }} component="th" scope="row">
                      <div className={`dot ${row.name == '< 15 years old' ? 'pink' : row.name == '20 - 35 years old' ? 'blue' : row.name == '40 - 50 years old' ? 'green' : 'blueViolet'}`}></div>
                      {row.name}
                    </TableCell>
                    <TableCell style={{ border: 'none' }} align="right"><h3> {row.calories}K </h3></TableCell>
                    <TableCell style={{ border: 'none' }} align="right">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
  );
}
