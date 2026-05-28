import { z } from "zod";

export const SocialOfficeSchema = z.object({
  Locker: z.boolean(),
  Cafeteria: z.boolean(),
  wc: z.boolean(),
});
