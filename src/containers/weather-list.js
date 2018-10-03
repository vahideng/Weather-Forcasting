import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import GoogleMap from "../components/googleMap";
import Chart from "../components/sparklines";

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData, "city data");
    const temp = _.map(
      cityData.list.map(weather => weather.main.temp),
      temp => temp - 273.15
    );
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    return (
      <tr key={cityData.city.name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>

        <td>
          <Chart data={temp} color="red" unit="Centigrade" />
        </td>
        <td>
          <Chart data={pressure} color="gray" unit="hPa" />
        </td>
        <td>
          {" "}
          <Chart data={humid} color="blue" unit="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Tempreture(Centigrade)</th>
              <th>Pressure(hPa)</th>
              <th>Humidity(%)</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

export default connect(mapStateToProps)(WeatherList);
