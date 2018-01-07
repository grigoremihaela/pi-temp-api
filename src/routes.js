const TempService = require('./services/TempService');
const GetTempService = require('./services/GetTempService');

module.exports = (app) => {
  app.get('/get/temperature', async (req, res, next) => {    
    const service = new GetTempService();
    const temps = await service.get();
    
    res.json([{
      success: true,
      temp1: temp[0].temp,
      sensorsUids1: temp[0].sensorsUids,
      temp2: temp[1].temp,
      sensorsUids2: temp[1].sensorsUids
    }]);
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


