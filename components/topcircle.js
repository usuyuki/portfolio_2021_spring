export default function TopCircle(props) {
  return (
    <div className="grid grid-cols-3 my-10">
      <div className="flex items-center">
        <h2 className="text-center mx-auto">tekitou</h2>
      </div>
      <div className="">
        <div className="border-2 border-black mx-auto rounded-full md:h-36 h-24 md:w-36 w-24 flex items-center">
          <h2 className="text-center text-black mx-auto">{props.circleName}</h2>
        </div>
      </div>
      <div className="flex items-center">
        <h2 className="text-center mx-auto">19years old</h2>
      </div>
    </div>
  );
}
