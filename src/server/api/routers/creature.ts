/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { number, string, z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const creatureRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: string(),
        type: string(),
        health: number(),
        power: number(),
        image: string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.creature.create({
        data: {
          name: input.name,
          type: input.type,
          health: input.health,
          power: input.power,
          image: input.image,
        },
      });
    }),
  getAll: publicProcedure.input(z.object({})).query(async ({ ctx }) => {
    return ctx.prisma.creature.findMany();
  }),
  getOne: publicProcedure
    .input(
      z.object({
        id: string(),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.creature.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
