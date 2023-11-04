import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (<>
    <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />
    <title>Tesla Model S</title>
    <link rel="stylesheet" href="main.css" />
    <div className="car">
      <div className="car-header">
        <h1>Tesla Model S</h1>
      </div>
      <div className="car-footer">
        <div className="text1">Tesla Model S</div>
        <div className="text2">Designed for Efficiency</div>
        <button className="btn1">Order Now</button>
        <button className="btn2">View Inventory</button>
        <div className="text3">
          Wtih a drag coefficient of just 0.20f, the lowest on the planet, this
          model is built for speed, endurance and rage. Improved aerodynamics and
          an improved chassis allow more responsive performance. <div></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div id="smalltable">
          <table>
            <tbody>
              <tr>
                <td className="centeralign">
                  Staggered, performance wheels and tires keep the car planted and
                  help transfer maximum power down to the road.
                </td>
                <td>
                  <img
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-A-Desktop-Global"
                    alt="Image 1"
                    className="img"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-B-Desktop-Global"
                    alt="Image 2"
                    className="img"
                  />
                </td>
                <td className="centeralign">
                  Attention to detail on all exterior surfaces makes Model S the
                  most aerodynamic production car on Earth.
                </td>
              </tr>
              <tr>
                <td className="centeralign">
                  An iconic silhouette meets refreshed, elegant proportions.
                </td>
                <td>
                  <img
                    src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-C-Desktop-Global"
                    alt="Image 1"
                    className="img"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
  
  )
}
