import Link from "next/link";
export default function Header(props) {
  return (
    <header
      className="bg-black fixed "
      style={{ width: "100vw", height: "80px" }}
    >
      <div className="flex items-center min-h-full">
        <h1 className="text-white font-dot ml-4">Usuyuki Portfolio</h1>
      </div>
      <div className="drawer">
        <input type="checkbox" id="drawer-check" className="drawer-hidden" />

        <label htmlFor="drawer-check" className="drawer-open">
          <span></span>
        </label>

        <nav className="drawer-content font-dot ">
          <div className="md:h-full h-screen flex justify-center flex-wrap md:items-center mx-4">
            <Link href="">
              <a className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center md:mt-0 mt-8 no-underline">
                <span className="material-icons-round">home</span>TOP
              </a>
            </Link>
            <Link href="./works">
              <a className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center no-underline">
                Works
              </a>
            </Link>
            <Link href="/blogs">
              <a
                className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center no-underline"
                href=""
              >
                Blogs
              </a>
            </Link>
            <Link href="/aboutme">
              <a
                className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center no-underline"
                href=""
              >
                AboutMe
              </a>
            </Link>

            <a
              className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center no-underline"
              href="https://github.com/Usuyuki"
            >
              GitHub
            </a>

            <a
              className="md:w-auto md:h-auto h-min w-screen  mx-auto md:text-left text-center no-underline"
              href="https://github.com/usuyuki26"
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
