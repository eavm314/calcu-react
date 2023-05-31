export const RecordItem = ({operation, result}) => {
  return (
    <div className="bg-green-700 rounded-lg py-1 px-3 my-3 
      text-slate-100 text-end">
        <p className="text-base">
            {operation}
        </p>
        <p className="text-2xl font-semibold">
            {"="+result}
        </p>
    </div>
  )
}
