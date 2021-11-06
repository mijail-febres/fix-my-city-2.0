import React, {useState, useEffect} from "react";
import TableContainer, {LTable} from "./TableStyled";
import { parsePropertyToHuman } from "../TextOperations/TextOperations";

class Table extends React.Component{
    render() {
        return(
            <TableContainer>
                {this.props.selections.length>0?
                <LTable id='table'>
                    <thead id='tHeader'>
                        <tr>
                            {this.props.selections.map(item => <th key={item}>{parsePropertyToHuman(item)}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.listItems?
                        this.props.listItems.map((listItem,index) => {
                            return (
                                <tr key={index}>
                                    {this.props.selections.map((item,ind) => <td key={`${listItem[item]}${ind}`}>{listItem[item]}</td>)}
                                </tr>
                            )
                        })
                    :
                        null
                    }
                    </tbody>
                </LTable>
                :
                null
                }
            </TableContainer>
        )
    }
}

export default Table;