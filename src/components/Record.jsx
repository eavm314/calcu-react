import { RecordItem } from "./RecordItem"

export const Record = ({ resultsList, setResultsList }) => {
  return (
    <div className="max-w-xs w-full p-4 bg-green-400">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl">
          Historial
        </h1>
        <button
          onClick={() => { setResultsList([]) }}
          className="px-2 bg-red-400 rounded-full">
          Limpiar
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
