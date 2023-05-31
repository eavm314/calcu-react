export const RecordItem = ({operation, result}) => {
  return (
    <div className="text-end bg-lime-500 rounded-lg py-1 px-3 my-3">
        <p className="text-sm">
            {operation}
        </p>
        <p className="text-xl">
            {"="+result}
        </p>
    </div>
  )
}
