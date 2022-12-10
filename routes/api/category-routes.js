const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryRes = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(categoryRes);

  } catch (err) {
    res.status(500).json(err);
  }

});
// find category by ID
router.get('/:id', async (req, res) => {
try {
  const categoryRes = await Category.findByPk(req.params.id, {
    include: [{model: Product }]
  });
  
} catch (err) {
  res.status(500).json(err);
}
});

//create a category
router.post('/', async (req, res) => {
  try {
    const categoryRes = await Category.create(req.body);
    res.status(200).json(categoryRes);
  } catch (err) {
    res.status(400).json(err);
  }
});
//update a category
router.post('/', async (req, res) => {
  try {
    const categoryRes = await Category.update(
      req.body,
      {where: {id: req.params.id }}
    );
    res.status(200).json('Category updated'
    );
  } catch (err) {
    res.status(500).json(err);
  }
});
 
//update category by ID
router.put('/:id', async (req, res) => {
  try {
    const categoryRes = await Category.update( req.body, { where: { id: req.params.id}});
    res.status(200).json('Category updated');
  
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete category
router.delete('/:id', async (req, res) => {
  try {
    const categoryRes = await Category.destroy({ where: { id: req.params.id}});
res.status(200).json('Category OBLITERATED');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
