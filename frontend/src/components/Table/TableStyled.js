import styled from "styled-components";

const TableContainer = styled.div`
    width : 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    @page {
        margin: 1in!important;
    }
    @media print {
        body {-webkit-print-color-adjust: exact;}
    }

    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        /* width: 100%; */
        border: none;
        margin: 10px;
        align-self: center!important;
    }
    table td, #table th {
        padding: 8px;
    }
    table tr:nth-child(odd){
        background-color: ${(props) => props.theme.brightGreenColor};
    }
    table tr:hover {
        background-color: ${(props) => props.theme.darkGreyColor};
    }

    table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: ${(props) => props.theme.greenColor};
        color: white;
    }

    td:first-child, th:first-child {
        border-radius: 10px 0 0 10px;
    }
    td:last-child, th:last-child {
        border-radius: 0 10px 10px 0;
    }
`;

// export const LTable = styled.table`
//     td:first-child,
//     th:first-child {
//     border-radius: 10px 0 0 10px;
//     }
//     // Set border-radius on the top-right and bottom-right of the last table data on the table row
//     td:last-child,
//     th:last-child {
//     border-radius: 0 10px 10px 0;
//     }
//     table th {
//         padding-top: 12px;
//         padding-bottom: 12px;
//         text-align: left;
//         background-color: #331763;
//         color: white;
//     }
//     table tr:nth-child(odd){
//         background-color: #f2f2f2;
//     }
// `

export default TableContainer;