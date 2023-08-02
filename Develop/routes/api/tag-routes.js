const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
    include: [{ model: Product }]
    });

  res.status(200).json(tagData);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
    include: [{ model: Product }]
    });

  if (!tagData) {
    return res.status(404).json({error: 'No tag found with that ID'})
  }

  res.status(200).json(tagData);
} catch (err) {
  console.error(err);
  res.status(500).json({error: 'Internal Server Error'});
}
});

router.post('/', async (req, res) => {
  try {
    const newTagData = await Tag.create(req.body);
    res.status(201).json(newTagData);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedTagData = await Tag.update(
      req.body,
      { 
        where: {id: req.params.id},
        returning: true 
      }
    );

    if (!updatedTagData[0]) {
      return res.status(404).json({error: 'No tag found with that ID'})
    };

    res.status(200).json(updatedTagData);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.delete('/:id', async (req, res) => {
  try { const deletedTagData = await Tag.destroy(
    {
     where: {id: req.params.id}
    }
  );

  if (!deletedTagData) {
    return res.status(404).json({error: 'No tag found with that ID'})
  };

  res.status(200).json(deletedTagData);
} catch (err) {
  console.error(err);
  res.status(500).json({error: 'Internal Server Error'});
}
});

module.exports = router;