const measureRainSwitch = (rain) => {
  switch (rain) {
    case 0:
      console.log('drought')
      break;
    case 1:
      console.log('dry')
      break;
    case 2:
      console.log('average')
      break;
    case 3:
      console.log('average')
      break;
    case 4:
      console.log('rainy')
      break;
    case 5:
      console.log('rainy')
      break;
    case 6:
      console.log('flood')
      break;
    case 7:
      console.log('flood')
      break;
    case 10:
      console.log('flood')
      break;
    // case 9:
    //   console.log('rainy')
    //   break;
  }
};

const rounderSwitch = (num, str) => {
  // switch (str) {
  //   case 'up':
  //     console.log(Math.ceil(num))
  //     break;
  //   case 'down':
  //     console.log(Math.floor(num))
  //     break;
  //   case 'honest':
  //     console.log(Math.round(num))
  //     break;
  // };
  switch (str) {
    case 'up':
      return Math.ceil(num)
    // break;
    case 'down':
      return Math.floor(num)
    // break;
    case 'honest':
      return Math.round(num)
    // break;
  };
};
// rounderSwitch(1.0, 'up')
// rounderSwitch(1.1, 'up')
// rounderSwitch(3.9, 'up')
// rounderSwitch(1.9, 'down')
// rounderSwitch(5.0, 'down')
// rounderSwitch(5.1, 'down')
// rounderSwitch(1.9, 'honest')
// rounderSwitch(1.5, 'honest')
// rounderSwitch(1.4, 'honest')
// rounderSwitch(1.0, 'honest')

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
