// next.config.js
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Create a configuration object
const nextConfig = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

// Export the configuration object
export default nextConfig;
