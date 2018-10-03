import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  render() {
    console.log(this.props.weather, "thiusdsa props");
    let weatherList = null;
    if (this.props.weather) {
      weatherList = this.props.weather.map(weather => {
        console.log(weather, "wheedede");
        return (
          <tr key={weather.city.name}>
            <th> {weather.city.name}</th>
            <th> {weather.city.population}</th>
            <th> {weather.city.name}</th>
          </tr>
        );
      });
    }

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Tempreture</th>
              <th>Pressure</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{weatherList}</tbody>
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
