const Campaign = require('../models/campaign.model');

async function add(data) {
    console.log(data);
    try {
        const campaign = new Campaign({...data});
        await campaign.save();
    }
    catch(err) {
        throw new Error(err.message);
    }
}

async function update(id, data) {
    try {
        const campaign = await Campaign.findOneAndUpdate({_id:id}, {active:data})
        if(!campaign) 
            throw new Error(`Campaign with id:${id} not found`)
    }
    catch(err) {
        throw new Error(err.message);
    }
}

async function _delete(id) {
    try{
        await Campaign.findOneAndDelete(id)
    }
    catch(err) {
        throw new Error(err.message);
    }
}

async function getAll(platform , n) {
    try {
        let obj={};
        if(platform && n)  
        {
            obj={platform:platform,
                dateEnd: 
                {
                    $gte: ["$dateEnd" , new Date((new Date().getTime() - (n * 24 * 60 * 60 * 1000)))]
                }
            };
        }
        else if(platform)
        {
            obj={platform:platform};
        }
        else if(n)
        {
            obj={dateEnd: 
                    {
                        $gte: ["$dateEnd" , new Date((new Date().getTime() - (n * 24 * 60 * 60 * 1000)))]
                    }
                };
        }
        const campaigns = await Campaign.find(obj).populate('productId')
        if(campaigns.length===0) {
            throw new Error('No Campaign Found')
        }
        return campaigns;
    }
    catch(err) {
        throw new Error(err.message)
    }
}


module.exports = {
    add,
    update,
    _delete,
    getAll
};