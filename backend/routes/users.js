const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/', async (req,res) => {
  try {
    const u = new User(req.body);
    await u.save();
    res.json({ success:true, user:u });
  } catch(err){ res.status(500).json({ error: err.message }); }
});

router.get('/', async (req,res) => {
  try {
    const users = await User.find().sort({ createdAt:-1 });
    res.json(users);
  } catch(err){ res.status(500).json({ error: err.message }); }
});

module.exports = router;
