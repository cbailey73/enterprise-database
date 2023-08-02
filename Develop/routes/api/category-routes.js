const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
    include: [{ model: Product }]
    });
    
  res.status(200).json(categoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product }]
    });

  if (!categoryData) {
    return res.status(404).json({error: 'No category found with that ID'})
  }

  res.status(200).json(categoryData);
} catch (err) {
  console.error(err);
  res.status(500).json({error: 'Internal Server Error'});
}
});

router.post('/', async (req, res) => {
  try {
    const newCateogryData = await Category.create(req.body);
    res.status(201).json(newCateogryData);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCategoryData = await Category.update(
      req.body,
      { 
        where: {id: req.params.id},
        returning: true 
      }
    );

    if (!updatedCategoryData[0]) {
      return res.status(404).json({error: 'No category found with that ID'})
    };

    res.status(200).json(updatedCategoryData);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.delete('/:id', async (req, res) => {
  try { const deletedCategoryData = await Category.destroy(
    {
     where: {id: req.params.id}
    }
  );

  if (!deletedCategoryData) {
    return res.status(404).json({error: 'No category found with that ID'})
  };

  res.status(200).json(deletedCategoryData);
} catch (err) {
  console.error(err);
  res.status(500).json({error: 'Internal Server Error'});
}
});

module.exports = router;
