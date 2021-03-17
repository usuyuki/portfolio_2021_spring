export default function Header(props) {
  return (
    <header className="bg-black  " style={{ width: "100vw", height: "80px" }}>
      <div className="flex items-center min-h-full">
        <h1 className="text-white font-dot">Usuyuki Portfolio</h1>
      </div>
      <div className="drawer">
        <input type="checkbox" id="drawer-check" className="drawer-hidden" />

        <label htmlFor="drawer-check" className="drawer-open">
          <span></span>
        </label>

        <nav className="drawer-content ">
          <div className="md:h-full h-screen      flex justify-center flex-wrap md:items-center mx-4">
            <a
              className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center md:mt-0 mt-8 no-underline"
              href=""
            >
              <span className="material-icons-outlined">home</span>TOP
            </a>
            <a
              className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center no-underline"
              href=""
            >
              Works
            </a>
            <a
              className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center no-underline"
              href=""
            >
              Blogs
            </a>
            <a
              className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center no-underline"
              href=""
            >
              AboutMe
            </a>
            <a
              className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center no-underline"
              href=""
            >
              GitHub
            </a>
            <a
              className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center no-underline"
              href=""
            >
              Twitter
            </a>
          </div>
          {/* <ul className="drawer-list h-full  flex justify-center md:flex-nowrap flex-wrap md:items-center md:w-auto w-1/3">
            <li className="drawer-item mx-4 h-min">
              <a href="">リンク1</a>
            </li>
            <li className="drawer-item mx-4">
              <a href="">リンク2</a>
            </li>
            <li className="drawer-item mx-4">
              <a href="">リンク3</a>
            </li>
            <li className="drawer-item mx-4">
              <a href="">リンク3</a>
            </li>
          </ul> */}
        </nav>
      </div>
    </header>
  );
}
