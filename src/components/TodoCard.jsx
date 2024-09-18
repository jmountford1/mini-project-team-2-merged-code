import '../Login.js';



export default function TodoCard({ x, title, date, paragraph_content, myHandler }) {
  return (
    <>
      <div className="rounded-lg border-2 border-gray-300   w-64 hover:bg-gray-300 shadow-md overflow-hidden">
        <div id="task_id_${x}" className="bg-yellow-400 border-1 h-12 p-2 flex items-center justify-center gap-2 border-yellow-400 w-64">
          <button onClick={myHandler}></button>
          {/* <span>0</span> */}
          <div>{title}</div>
          <input type="date" value={date} />
        </div>
        <p className="p-2">
          {paragraph_content}
        </p>
      </div>
    </>
  );
}
