export const ExcelInput = () => {

    const handleFileUpload = (event) => {

    }

    return (
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
    )
}