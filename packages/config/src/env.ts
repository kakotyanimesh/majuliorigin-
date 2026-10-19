import { z } from "zod";

const databaseUrl = z.string().url().refine((value) => value.startsWith("postgres://") || value.startsWith("postgresql://"), {
  message: "must be a PostgreSQL connection URL",
});

export const serverEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: databaseUrl,
  DIRECT_URL: databaseUrl,
  BETTER_AUTH_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string().min(32),
  RAZORPAY_KEY_ID: z.string().min(1),
  RAZORPAY_KEY_SECRET: z.string().min(1),
  RAZORPAY_WEBHOOK_SECRET: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  EMAIL_FROM: z.string().email().or(z.string().regex(/^.+<[^<>\s]+@[^<>\s]+>$/)),
  OWNER_EMAIL: z.string().email(),
  STORE_URL: z.string().url(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

let cachedServerEnv: ServerEnv | undefined;

export function getServerEnv(): ServerEnv {
  if (cachedServerEnv) return cachedServerEnv;

  const result = serverEnvSchema.safeParse(process.env);
  if (!result.success) {
    const details = result.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join("\n");
    throw new Error(`Invalid server environment configuration:\n${details}`);
  }

  cachedServerEnv = result.data;
  return cachedServerEnv;
}

export function validateServerEnv(): void {
  getServerEnv();
}
