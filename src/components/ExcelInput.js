import { useState, useEffect } from "react";
import * as XLSX from "xlsx";

export const ExcelInput = () => {

    const [data, setData] = useState([]);
    const filePath = "../../excel_files/playtv_plans_all.xlsx"
    useEffect(() => {
        // Load the data from the Excel file when the component mounts
        const fetchExcelData = async () => {
            try {
                const response = await fetch(filePath);
                const blob = await response.blob();
                const reader = new FileReader();
                reader.readAsBinaryString(blob);
                reader.onload = (e) => {
                    const data = e.target.result;
                    const workbook = XLSX.read(data, { type: "binary" });
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];
                    const parsedData = XLSX.utils.sheet_to_json(sheet);
                    setData(parsedData);
                };
            } catch (error) {
                console.error("Error loading Excel file:", error);
            }
        };

        fetchExcelData();
    }, []);
    const handleFileUpload = (e) => {
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parsedData = XLSX.utils.sheet_to_json(sheet);
            setData(parsedData);
        };
    }

    return (
        <>
            <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
            />

            {data.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}