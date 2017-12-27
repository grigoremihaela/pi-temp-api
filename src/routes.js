const TempService = require('./services/TempService');
const GetTempService = require('./services/GetTempService');

module.exports = (app) => {
  app.get('/get/temperature', async (req, res, next) => {    
    const service = new GetTempService();
    const temp = await service.get();
    
    res.json([{
      success: true,
      temp: temp.temp
    }]);
  });

  app.post('/temperature', async (req, res, next) => {    
    const tempData = req.body;
    
    const service = new TempService();
    const id = await service.add(tempData.temp);

    // respond back to request
    res.json({
      id,
      success: true,
      message: tempData.temp
    });
  })
}


