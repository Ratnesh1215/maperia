import express from 'express';
import { Location } from '../models/locationmodel.js';

const router = express.Router();

router.post('/', async (request, response) => {
  try { 
    if (
      !request.body.lc_id ||
      !request.body.name ||
      !request.body.address ||
      !request.body.address.area ||
      !request.body.address.city ||
      !request.body.address.state ||
      !request.body.annual_revenue ||
      !request.body.ph_no
    ) {
      return response.status(400).send({
        message: 'Send all required fields',
      });
    }
    const newLocation = {
      lc_id: request.body.lc_id,
      name: request.body.name,
      address: {
        area: request.body.address.area,
        city: request.body.address.city,
        state: request.body.address.state,
      },
      annual_revenue: request.body.annual_revenue,
      ph_no: request.body.ph_no,
    };

    // const savedLocation = await newLocation.save();

    const location = await Location.create(newLocation);
    return response.status(201).send(location);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/', async (request, response) => {
  try {
    const locations = await Location.find({});
    return response.status(200).json({
      count: locations.length,
      data: locations,
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: 'Server error' });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const location = await Location.findById(id);

    if (!location) {
      return response.status(404).send({ message: 'Location not found' });
    }

    return response.status(200).json(location);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: 'Server error' });
  }
});

router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.lc_id ||
      !request.body.name ||
      !request.body.address ||
      !request.body.address.area ||
      !request.body.address.city ||
      !request.body.address.state ||
      !request.body.annual_revenue ||
      !request.body.ph_no
    ) {
      return response.status(400).send({ message: 'Send location data for update' });
    }

    const { id } = request.params;

    const result = await Location.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Location not found' });
    }

    return response.status(200).send({ message: 'Location updated successfully' });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: 'Server error' });
  }
});

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const location = await Location.findById(id);

    if (!location) {
      return response.status(404).send({ message: 'Location not found' });
    }

    await Location.findByIdAndDelete(id);

    return response.status(200).send({ message: 'Location deleted successfully' });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: 'Server error' });
  }
});




export default router;
