import Link from "next/link";

export default function TopMainButton(props) {
  return (
    <div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }

        html,
        css {
          width: 100%;
          height: 100%;
        }

        .position {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          margin-top: 15%;
        }

        #workarea {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #1e1a3e;
          font-family: Raleway;
        }

        #personal {
          color: white;
          text-decoration: none;
          position: absolute;
          bottom: 15px;
          right: 2%;
        }

        .spot {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .svg-wrapper {
          margin-top: 0;
          position: relative;
          width: 150px;
          /*make sure to use same height/width as in the html*/
          height: 40px;
          display: inline-block;
          border-radius: 3px;
          margin-left: 5px;
          margin-right: 5px;
        }

        #shape {
          stroke-width: 6px;
          fill: transparent;
          stroke: #009ffd;
          stroke-dasharray: 85 400;
          stroke-dashoffset: -220;
          transition: 1s all ease;
        }

        .modern-button {
          margin-top: -35px;
          text-align: center;
        }

        .modern-button a {
          color: white;
          text-decoration: none;
          font-weight: 100;
          font-size: 1.1em;
        }

        .svg-wrapper:hover #shape {
          stroke-dasharray: 50 0;
          stroke-width: 3px;
          stroke-dashoffset: 0;
          stroke: #06d6a0;
        }
      `}</style>
      <Link href={props.link}>
        <div className="svg-wrapper">
          <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
            <rect id="shape" height="40" width="150" />
            <div className="modern-button">
              <a>
                <span className="spot "> </span>
                {props.name}
              </a>
            </div>
          </svg>
        </div>
      </Link>
    </div>
  );
}
