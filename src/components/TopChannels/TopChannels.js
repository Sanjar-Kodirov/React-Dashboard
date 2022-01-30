import React, { useState, useContext } from 'react';
import {Context} from '../../context'
function TopChannels() {
    const {topChannelsdata}  = useContext(Context)
    console.log(topChannelsdata)
    return ( 
    <div>
        <table className="table">
            <thead className="thread">
                <tr className="tr">
                    <th className="th">Source</th>
                    <th className="th">Visit</th>
                </tr>
            </thead>
            <tbody className="tbody">
                {topChannelsdata.map(social => {
                    return (
                        <tr className="tr">
                            <td className="td"> <img src={social.icon} alt="" /> <h5> {social.socialMedia} </h5></td>
                            <td className="td"><h5>{social.visit}K <span>+{social.persentage}%</span></h5>  </td>
                            <td className="td"><div style={{width: social.persentage * 5}}></div></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>)
;
}

export default TopChannels;