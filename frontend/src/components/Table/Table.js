import React, {useState, useEffect} from "react";
import TableContainer, {LTable} from "./TableStyled";
import { parsePropertyToHuman } from "../TextOperations/TextOperations";

class Table extends React.Component{
    event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    render() {
        return(
            <TableContainer>
                {this.props.selections.length>0?
                <table id='table'>
                    <thead id='tHeader'>
                        <tr id='tr'>
                            {this.props.selections.map(item => <th className='Th' key={item}>{parsePropertyToHuman(item)}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.listItems?
                        this.props.listItems.map((listItem,index) => {
                            return (
                                <tr key={index}>
                                    {this.props.selections.map((item,ind) =>
                                        (item==='user_issues' || item ==='upvoted_issues')?
                                        <td key={`${listItem[item]}${ind}`}>{`${listItem[item].map((field) => field)}`}</td>
                                        : (item==='date_joined' || item === 'created' || item === 'modified')?
                                        <td key={`${listItem[item]}${ind}`}>{new Date(listItem[item]).toLocaleDateString('us')}</td>
                                        // <td key={`${listItem[item]}${ind}`}>{listItem[item]}</td>
                                        :
                                        <td key={`${listItem[item]}${ind}`}>{listItem[item]}</td>
                                    )}
                                </tr>
                            )
                        })
                    :
                        null
                    }
                    </tbody>
                </table>
                :
                null
                }
            </TableContainer>
        )
    }
}

export default Table;