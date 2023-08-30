import ReportMonthComponent from "@/Components/ReportComponent/ReportMonthComponent"

const LaporanExport = ({ fix, parse }) => {
  return (
    <>
        <ReportMonthComponent data={fix} month={parse}/>
    </>
  )
}

export default LaporanExport