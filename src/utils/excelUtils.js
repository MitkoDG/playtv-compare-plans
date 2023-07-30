import { useEffect } from 'react';
import * as XLSX from 'xlsx';
const { read, utils } = XLSX;

export const readExcelFile = async () => {

    // useEffect(() => {
    //     (async () => {
    //         /* Download file */
    //         const f = await (await fetch("../../excel_files/playtv_plans.xlsx")).arrayBuffer();
    //         const wb = read(f); // parse the array buffer
    //         const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    //         const data = utils.sheet_to_json(ws); // generate objects
    //         setPres(data); // update state
    //     })();
    // }, [])
    return (
        
    <h1>Hello</h1>
    )
};