//const express = require('express');
const cors = require('cors');

const app = express();
const serverless = require('serverless-http');

// const swaggerUI = require('swagger-ui-express');

// const { specs } = require('./apiSpec/options');
const { getAllLeakages } = require('./routes/leakages');
// const { getRepairers } = require('./routes/repairers');

app.use(cors());
app.use(express.json());

console.log('changed');
/* app.use(
  '/.netlify/functions/api/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(specs)
); */

const router = express.Router();

const netlifyPath = '/.netlify/functions/api';
router.get('/leakages', getAllLeakages);
/* router.get('/repairers', getRepairers);
router.post('/repairers', addRepairer)
router.get('/repairers/:id', getRepairer)
router.put('/repairers/:id', getRepairer)

router.get('/leakages', getLeagkages)
router.get('/leakages', getLeagkages)
router.post('/leakages', addLeakage)
router.get('/leakages/:id', getLeagkage)

router.get('/sensor/id', getSensor) */

//app.use(netlifyPath, router);

module.exports.handler = serverless(app);
