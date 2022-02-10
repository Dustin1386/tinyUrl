const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortId = require('shortId');
const config = requrie('config');

const Url = require('../models/url');

router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');

    if(!validUrl.isHttpUri(baseUrl)){
        return  res.status(401).json('invalidUrl')
    }    

    const urlCode = shortId.generate();

    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({longUrl});
            if(url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    date: new Date()
                });

              await  url.save();

              res.json(url)
            }

        } catch {
            console.log('not good url')
        }
    } else {

    }
});


module.exports = router;