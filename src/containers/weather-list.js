import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../components/sparklines";

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData, "city data");
    const temp = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={cityData.city.name}>
        <td> {cityData.city.name}</td>

        <td>
          <Chart data={temp} color="red" />
        </td>
        <td>
          <Chart data={pressure} color="gray" />
        </td>
        <td>
          {" "}
          <Chart data={humid} color="blue" />
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
              <th>Tempreture</th>
              <th>Pressure</th>
              <th>Humidity</th>
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
