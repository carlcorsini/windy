import React from 'react';
import ForecastIndexItem from './forecastIndexItem';

import iconComponents from '../frontend/SvgComponents/iconExport';

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherStation: this.props.weatherStation,
      tomorrowForecast: this.props.tomorrowForecast,
      currentForecast: this.props.currentForecast,
      quadrants: this.props.quadrants,
    };
  }

  shouldComponentUpdate(nextState, nextProps) {
    if (this.state.weatherStation !== nextState.weatherStation) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    //iterate through forecasts and take a date with them
    //instead of tomorrows conditions

    const { currentForecast, tomorrowForecast, weatherStation } = this.props;

    let TempGit = iconComponents['Github'];
    let TempIn = iconComponents['LinkedIn'];

    let display;

    if (currentForecast.weather && tomorrowForecast.weather) {
      // console.log(currentForecast)
      // console.log("_______")
      // console.log(tomorrowForecast)
      display = (
        <div id="defaultInfo">
          <div id="forecastTitle">
            <h3>Current Conditions near {weatherStation}</h3>
          </div>
          <ForecastIndexItem
            key={currentForecast.temp}
            weather={currentForecast}
            station={weatherStation}
          />
          <h3 id="future">Tomorrow's Forecast</h3>
          <ForecastIndexItem
            key={tomorrowForecast.temp}
            weather={tomorrowForecast}
            station={weatherStation}
          />
        </div>
      );
    } else {
      display = (
        <div id="infoSpan">
          <div className="msg2">
            Navigate around the map, click to place marker.
          </div>

          <div className="msg2">
            Check local forecast automatically centers map allowing correlated
            wind data to be applied within the region.
          </div>
        </div>
      );
    }

    return (
      <div id="forecastDiv">
        {display}

        <div id="projectInfo">
          <div className="msg">
            D3 Visualization allows user to find forecasts and view a
            representation of current wind conditions in a particular area.
            Click desired location on map then Check Local Forecast extracts
            lat/lng coords from marker's location, bounds from the map,
            returning API data.
          </div>

          <div className="msg">
            Points are generated and used to model paths based on the wind
            conditions in the subset of regions the path may travel. These
            collections of control points are mapped to a bezier curve
            reflecting change in slope over time; assuming minimal map
            distortion with this nearly conformal map projection.
          </div>
        </div>

        <div id="links">
          <div id="icons">
            <a href="https://github.com/jbonAA/windy">
              <TempGit />
            </a>
            {/* githubIconAsTemporaryComponent */}
          </div>
          <p>Repo Available on Github and LinkedIn</p>
          <div id="icons">
            <a href="https://www.linkedin.com/in/jess-bon-97368b197/">
              <TempIn />
            </a>
            {/* linkedInIconAsTempComponent */}
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;
