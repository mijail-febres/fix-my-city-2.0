import styled from "styled-components";

const TableContainer = styled.div`
    width : 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @page {
        margin: 1in!important;
    }
    @media print {
        body {-webkit-print-color-adjust: exact;}
    }
`;

export const LTable = styled.table`
    border: 2px solid black;
    border-collapse: collapse;
    text-align: left;
    thead {
        border: 2px solid black;
        padding: 0.5rem;
        th {
            border: 2px solid black;
            padding: 0.5rem;
            font-weight: 700;
        }
    } 
    tbody {
        border: 2px solid black;
        /* background-color: green; */
        padding: 0.5rem;
        tr:nth-child(even) {
            background-color: #CCCCCC;
        }
        tr:nth-child(odd) {
            background-color: #FFFFFF;
        }
        td {
            border: 1px solid #999;
            border-right: 2px solid black;
            padding: 0.5rem;
        }
    } 
`

export default TableContainer;