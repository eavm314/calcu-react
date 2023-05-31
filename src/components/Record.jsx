import { RecordItem } from "./RecordItem"

export const Record = ({ resultsList, setResultsList }) => {
  return (
    <div className="max-w-xs w-full p-4 pt-6 bg-green-400 rounded-lg">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">
          Record
        </h1>
        <button
          onClick={() => { setResultsList([]) }}
          className="px-3 bg-green-700 rounded-xl 
            text-slate-100 text-lg">
          Clear
        </button>
      </div>

      <div>
        {
          resultsList.map((item, i) =>
            <RecordItem key={i} {...item} />
          )
        }
      </div>

    </div>
  )
}
