// Import dotenv dynamically with ES module syntax
import('dotenv').then(({ config }) => config());

// Create a configuration object
const nextConfig = {
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

// Export the configuration object
export default nextConfig;
