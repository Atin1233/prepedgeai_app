/**
 * Environment validation utilities
 * Provides runtime checks for required environment variables
 */

export function isProductionBuild(): boolean {
  return process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV === 'production';
}

export function requireEnvVar(name: string, defaultValue?: string): string {
  const value = process.env[name] || defaultValue;
  
  if (!value) {
    // During build time, log warning instead of throwing
    if (process.env.NODE_ENV === 'production' && !process.env.VERCEL_ENV) {
      console.warn(`Warning: ${name} environment variable is not set during build`);
      return '';
    }
    throw new Error(`${name} environment variable is not set`);
  }
  
  return value;
}

export function isDatabaseAvailable(): boolean {
  return !!process.env.POSTGRES_URL;
}

export function isStripeConfigured(): boolean {
  return !!(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_WEBHOOK_SECRET);
}