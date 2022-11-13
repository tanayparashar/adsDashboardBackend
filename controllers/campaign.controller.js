const campaignService = require('../services/campaign.service')

const add = async (req, res, next) => {
  try{
    await campaignService.add(req.body)
    res.status(200);
    res.send({message: "Created"});
  }
  catch(err) {
    res.status(400);
    console.log(err)
    var message = { message : err.message };
    res.send(message);
  }
}

const update = async (req, res, next) => {
  try{
    await campaignService.update(req.params.id, req.body.status)
    res.status(200);
    res.send({message: "Updated"});
  }
  catch(err) {
    res.status(400);
    console.log(err)
    var message = { message : err.message };
    res.send(message);
  }
}

const _delete = async (req, res, next) => {
  try{
    await campaignService._delete(req.params.id)
    res.status(200);
    res.send({message: "Deleted"});
  }
  catch(err) {
    res.status(400);
    console.log(err)
    var message = { message : err.message };
    res.send(message);
  }
}

const getAll = async (req, res, next) => {
  try{
    const campaigns = await campaignService.getAll(req.query.platform, req.query.days)
    res.status(200);
    res.json(campaigns);
  }
  catch(err) {
    res.status(400);
    console.log(err)
    var message = { message : err.message };
    res.send(message);
  }
}

module.exports = {
  add,
  update,
  _delete,
  getAll,
}