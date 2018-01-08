const TempService = require('./services/TempService');
const GetTempService = require('./services/GetTempService');

module.exports = (app) => {
  app.get('/get/temperature', async (req, res, next) => {    
    const service = new GetTempService();
    const temps = await service.get();
    
    res.json({
      temp41: temps.temps41.temp,
      temp42: temps.temps42.temp,
      temp43: temps.temps43.temp,
      temp44: temps.temps44.temp,
      temp17: temps.temps17.temp,
      temp22: temps.temps22.temp
    });
  });

  app.post('/temperature', async (req, res, next) => {    
    const tempData = req.body;
  
    const service = new TempService();
    const id = await service.add(tempData.temp, tempData.sensorsUids, tempData.pin, tempData.numberSensor);

    // respond back to request
    res.json({
      id,
      success: true,
      message: tempData.temp,
      sensorsUids: tempData.sensorsUids,
      pin: tempData.pin,
      numberSensor: tempData.numberSensor
    });
  })
}


