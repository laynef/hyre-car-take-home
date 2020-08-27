import express from 'express';
import { graphqlExpress } from 'apollo-server-express';
import allMakes from '../controllers/makes';

// Router
const router = express();

// Set Routes
router.get('/makes', graphqlExpress({ schema: allMakes }));


// Export
export default router;
