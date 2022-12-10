const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all
router.get('/', async (req, res) => {
try {
  const tagRes = await Tag.findAll({ include: [{ model: Product }]
  });
res.status(200).json(tagRes);  
} catch (err) {
  res.status(500).json(err);
}
});
// find by ID
router.get('/:id', async (req, res) => {
try {
  const tagRes = await Tag.findByPk(req.params.id, {
    include: [{ model: Product }]
  });
  res.status(200).json(tagRes);
} catch (err) {
  res.status(500).json(err);
}
});
//create a new tag
router.post('/', async (req, res) => {
  try {
    const tagRes = await Tag.create(req.body);
    res.status(200).json(tagRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
