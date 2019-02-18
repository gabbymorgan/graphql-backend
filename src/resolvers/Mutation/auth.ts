import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { sendConfirmationEmail } from "../../communications/email";
import { MutationResolvers } from "../../generated/graphqlgen";
import {
  checkForPwnedPassword,
  getPasswordHash,
  InvalidLoginError,
  validatePersonFields
} from "../../utils";

export const auth: Pick<
  MutationResolvers.Type,
  "signup" | "login" | "confirmEmail"
> = {
  signup: async (parent, { email, name, password }, ctx) => {
    if (!process.env.APP_SECRET || !process.env.EMAIL_SECRET) {
      throw new Error("Server authentication error");
    }

    validatePersonFields(email, name, password);
    await checkForPwnedPassword(password);
    if (await ctx.prisma.$exists.person({ email })) {
      throw new Error("Email unavailable");
    }

    const hashedPassword = await getPasswordHash(password);
    const confirmationToken = jwt.sign({ email }, process.env.EMAIL_SECRET);
    const person = await ctx.prisma.createPerson({
      emailConfirmed: false,
      confirmationToken,
      email,
      name,
      password: hashedPassword
    });

    const token = jwt.sign({ personId: person.id }, process.env.APP_SECRET);
    sendConfirmationEmail(email, confirmationToken);

    return {
      token,
      person
    };
  },

  login: async (parent, { email, password }, ctx) => {
    if (!process.env.APP_SECRET) {
      throw new Error("Server authentication error");
    }

    const person = await ctx.prisma.person({ email });
    if (!person) {
      throw new InvalidLoginError();
    }

    const valid = await bcrypt.compare(password, person.password);
    if (!valid) {
      throw new InvalidLoginError();
    }

    return {
      token: jwt.sign({ personId: person.id }, process.env.APP_SECRET),
      person
    };
  },

  confirmEmail: async (parent, { token }, ctx) => {
    if (!process.env.EMAIL_SECRET) {
      throw new Error("Server authentication error");
    }

    if (!token) {
      throw new Error("Unauthorized.");
    }

    const { email } = jwt.verify(token, process.env.EMAIL_SECRET) as {
      email: string;
    };

    return ctx.prisma.updatePerson({
      where: {
        email
      },
      data: {
        email: undefined,
        password: undefined,
        name: undefined,
        emailConfirmed: true
      }
    });
  }
};
