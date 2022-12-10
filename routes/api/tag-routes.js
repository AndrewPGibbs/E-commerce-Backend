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
//update a tag
router.put('/:id', async (req, res) => {
  try {
    const tagRes = await Tag.update(
      req.body, {where: { id: req.params.id}}
    );
    res.status(200).json('Tag updated!')
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
 try {
  const tagRes = await Tag.destroy({
    where: {
      id:req.params.id
    }
  });
  res.status(200).json('Tag OBLITERATED');
 } catch (err) {
  res.status(500).json(err);
 }
});

module.exports = router;
