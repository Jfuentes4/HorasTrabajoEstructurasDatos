class Main {
  constructor () {
    document.getElementById('btnCalcular').addEventListener('click', this.calculateTime);
  }

  calculateTime = () => {
    //alert('jala')
    let entranceHour = Number(document.getElementById('entranceHour').value),
    entranceMinute = Number(document.getElementById('entranceMinute').value),
    entranceSecond = Number(document.getElementById('entranceSecond').value),
    entranceAMPM = document.getElementById('entranceAMPM').value,
    departureHour = Number(document.getElementById('departureHour').value),
    departureMinute = Number(document.getElementById('departureMinute').value),
    departureSecond = Number(document.getElementById('departureSecond').value),
    departureAMPM = document.getElementById('departureAMPM').value;

    let entranceTime = {
      hour: entranceHour,
      minute: entranceMinute,
      second: entranceSecond,
      ampm: entranceAMPM,
    }

    let departureTime = {
      hour: departureHour,
      minute: departureMinute,
      second: departureSecond,
      ampm: departureAMPM,
    }

    let workTime = this.getTimeBetween(entranceTime,departureTime);

    document.getElementById('results').innerHTML = 'Tiempo trabajado: ' + workTime.hours + ' horas, ' +
    workTime.minutes + " minutos y " + workTime.seconds + ' segundos.';
  }

  getTimeBetween = (entranceTime, departureTime) => {
    let entrance = this.formatTo24h(entranceTime),
    departure = this.formatTo24h(departureTime);

    let seconds = departure.second - entrance.second;
    let minutes = departure.minute - entrance.minute;
    let hours = departure.hour - entrance.hour;
    if (seconds < 0) {
      seconds = 60 + seconds;
      minutes--;
    }
    if (minutes < 0) {
      minutes = 60 + minutes;
      hours--;
    }

    let workTime = {
      hours, minutes, seconds
    };

    return workTime;
  }

  formatTo24h = (time) => {
    if (time.ampm === 'pm') time.hour += 12;

    return time;
  }

}

var main = new Main();
