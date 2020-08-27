import express from 'express';
import { graphqlExpress } from 'apollo-server-express';
import schema from '../controllers';

// Router
const router = express();

// Set Routes
router.get('/graphql', graphqlExpress({ schema }));


// Export
export default router;
