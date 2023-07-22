import Random from "./components/Random"
import Tag from "./components/Tag"
function App() {
  return (<div className="w-full relative h-screen  flex flex-col items-center background ">
    <h1 className=" bg-white mt-[40px] text-3xl font-bold text-center w-11/12 rounded-sm">Random GIF</h1>
    <div className="flex flex-col w-full items-center">
      <Random />
      <Tag />
    </div>
  </div>)
}
export default App