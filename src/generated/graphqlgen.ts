// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { Group, Person, Thread, Post } from "./prisma-client";
import { AuthPayload, DeletionResponse, IContext } from "../types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsGroup {
    id: string;
  }

  export type GroupsResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Array<Group | null> | null | Promise<Array<Group | null> | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Array<Group | null> | null | Promise<Array<Group | null> | null>;
      };

  export type GroupResolver =
    | ((
        parent: undefined,
        args: ArgsGroup,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Group | null | Promise<Group | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsGroup,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Group | null | Promise<Group | null>;
      };

  export type MeResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Person | null | Promise<Person | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Person | null | Promise<Person | null>;
      };

  export interface Type {
    groups:
      | ((
          parent: undefined,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Array<Group | null> | null | Promise<Array<Group | null> | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Array<Group | null> | null | Promise<Array<Group | null> | null>;
        };

    group:
      | ((
          parent: undefined,
          args: ArgsGroup,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Group | null | Promise<Group | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsGroup,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Group | null | Promise<Group | null>;
        };

    me:
      | ((
          parent: undefined,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Person | null | Promise<Person | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Person | null | Promise<Person | null>;
        };
  }
}

export namespace GroupResolvers {
  export const defaultResolvers = {
    id: (parent: Group) => parent.id,
    name: (parent: Group) => parent.name,
    createdAt: (parent: Group) => parent.createdAt,
    description: (parent: Group) =>
      parent.description === undefined ? null : parent.description
  };

  export type IdResolver =
    | ((
        parent: Group,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type CreatedAtResolver =
    | ((
        parent: Group,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type NameResolver =
    | ((
        parent: Group,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type DescriptionResolver =
    | ((
        parent: Group,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type MembersResolver =
    | ((
        parent: Group,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Person[] | null | Promise<Person[] | null>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Person[] | null | Promise<Person[] | null>;
      };

  export type ThreadsResolver =
    | ((
        parent: Group,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Thread[] | null | Promise<Thread[] | null>)
    | {
        fragment: string;
        resolve: (
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Thread[] | null | Promise<Thread[] | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    createdAt:
      | ((
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    name:
      | ((
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    description:
      | ((
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    members:
      | ((
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Person[] | null | Promise<Person[] | null>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Person[] | null | Promise<Person[] | null>;
        };

    threads:
      | ((
          parent: Group,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Thread[] | null | Promise<Thread[] | null>)
      | {
          fragment: string;
          resolve: (
            parent: Group,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Thread[] | null | Promise<Thread[] | null>;
        };
  }
}

export namespace PersonResolvers {
  export const defaultResolvers = {
    id: (parent: Person) => parent.id,
    email: (parent: Person) => parent.email,
    createdAt: (parent: Person) => parent.createdAt,
    name: (parent: Person) => parent.name
  };

  export type IdResolver =
    | ((
        parent: Person,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Person,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type CreatedAtResolver =
    | ((
        parent: Person,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Person,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type NameResolver =
    | ((
        parent: Person,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Person,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type EmailResolver =
    | ((
        parent: Person,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Person,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type GroupsResolver =
    | ((
        parent: Person,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Group[] | null | Promise<Group[] | null>)
    | {
        fragment: string;
        resolve: (
          parent: Person,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Group[] | null | Promise<Group[] | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Person,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Person,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    createdAt:
      | ((
          parent: Person,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Person,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    name:
      | ((
          parent: Person,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Person,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    email:
      | ((
          parent: Person,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Person,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    groups:
      | ((
          parent: Person,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Group[] | null | Promise<Group[] | null>)
      | {
          fragment: string;
          resolve: (
            parent: Person,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Group[] | null | Promise<Group[] | null>;
        };
  }
}

export namespace ThreadResolvers {
  export const defaultResolvers = {
    id: (parent: Thread) => parent.id,
    createdAt: (parent: Thread) => parent.createdAt,
    title: (parent: Thread) => parent.title
  };

  export type IdResolver =
    | ((
        parent: Thread,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Thread,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type CreatedAtResolver =
    | ((
        parent: Thread,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Thread,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type TitleResolver =
    | ((
        parent: Thread,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Thread,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type PostsResolver =
    | ((
        parent: Thread,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Post[] | Promise<Post[]>)
    | {
        fragment: string;
        resolve: (
          parent: Thread,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Post[] | Promise<Post[]>;
      };

  export type GroupResolver =
    | ((
        parent: Thread,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Group | Promise<Group>)
    | {
        fragment: string;
        resolve: (
          parent: Thread,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Group | Promise<Group>;
      };

  export interface Type {
    id:
      | ((
          parent: Thread,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Thread,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    createdAt:
      | ((
          parent: Thread,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Thread,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    title:
      | ((
          parent: Thread,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Thread,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    posts:
      | ((
          parent: Thread,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Post[] | Promise<Post[]>)
      | {
          fragment: string;
          resolve: (
            parent: Thread,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Post[] | Promise<Post[]>;
        };

    group:
      | ((
          parent: Thread,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Group | Promise<Group>)
      | {
          fragment: string;
          resolve: (
            parent: Thread,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Group | Promise<Group>;
        };
  }
}

export namespace PostResolvers {
  export const defaultResolvers = {
    id: (parent: Post) => parent.id,
    createdAt: (parent: Post) => parent.createdAt,
    content: (parent: Post) => parent.content
  };

  export type IdResolver =
    | ((
        parent: Post,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Post,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type CreatedAtResolver =
    | ((
        parent: Post,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Post,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type AuthorResolver =
    | ((
        parent: Post,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Person | Promise<Person>)
    | {
        fragment: string;
        resolve: (
          parent: Post,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Person | Promise<Person>;
      };

  export type ContentResolver =
    | ((
        parent: Post,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: Post,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type ThreadResolver =
    | ((
        parent: Post,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Thread | Promise<Thread>)
    | {
        fragment: string;
        resolve: (
          parent: Post,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Thread | Promise<Thread>;
      };

  export interface Type {
    id:
      | ((
          parent: Post,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Post,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    createdAt:
      | ((
          parent: Post,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Post,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    author:
      | ((
          parent: Post,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Person | Promise<Person>)
      | {
          fragment: string;
          resolve: (
            parent: Post,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Person | Promise<Person>;
        };

    content:
      | ((
          parent: Post,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: Post,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    thread:
      | ((
          parent: Post,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Thread | Promise<Thread>)
      | {
          fragment: string;
          resolve: (
            parent: Post,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Thread | Promise<Thread>;
        };
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsSignup {
    email: string;
    password: string;
    name: string;
  }

  export interface ArgsLogin {
    email: string;
    password: string;
  }

  export interface ArgsCreateGroup {
    name: string;
    description?: string | null;
  }

  export interface ArgsJoinGroup {
    groupId: string;
  }

  export interface ArgsLeaveGroup {
    groupId: string;
  }

  export interface ArgsCreateThread {
    groupId: string;
    title: string;
    content: string;
  }

  export interface ArgsEditThread {
    threadId: string;
    title?: string | null;
  }

  export interface ArgsDeleteThread {
    threadId: string;
  }

  export interface ArgsCreatePost {
    threadId: string;
    content: string;
  }

  export interface ArgsEditPost {
    postId: string;
    content: string;
  }

  export interface ArgsDeletePost {
    postId: string;
  }

  export type SignupResolver =
    | ((
        parent: undefined,
        args: ArgsSignup,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => AuthPayload | Promise<AuthPayload>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsSignup,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>;
      };

  export type LoginResolver =
    | ((
        parent: undefined,
        args: ArgsLogin,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => AuthPayload | Promise<AuthPayload>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsLogin,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>;
      };

  export type CreateGroupResolver =
    | ((
        parent: undefined,
        args: ArgsCreateGroup,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Group | Promise<Group>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsCreateGroup,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Group | Promise<Group>;
      };

  export type JoinGroupResolver =
    | ((
        parent: undefined,
        args: ArgsJoinGroup,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Group | Promise<Group>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsJoinGroup,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Group | Promise<Group>;
      };

  export type LeaveGroupResolver =
    | ((
        parent: undefined,
        args: ArgsLeaveGroup,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => DeletionResponse | Promise<DeletionResponse>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsLeaveGroup,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => DeletionResponse | Promise<DeletionResponse>;
      };

  export type CreateThreadResolver =
    | ((
        parent: undefined,
        args: ArgsCreateThread,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Thread | Promise<Thread>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsCreateThread,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Thread | Promise<Thread>;
      };

  export type EditThreadResolver =
    | ((
        parent: undefined,
        args: ArgsEditThread,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Thread | Promise<Thread>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsEditThread,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Thread | Promise<Thread>;
      };

  export type DeleteThreadResolver =
    | ((
        parent: undefined,
        args: ArgsDeleteThread,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => DeletionResponse | Promise<DeletionResponse>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsDeleteThread,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => DeletionResponse | Promise<DeletionResponse>;
      };

  export type CreatePostResolver =
    | ((
        parent: undefined,
        args: ArgsCreatePost,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Post | Promise<Post>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsCreatePost,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Post | Promise<Post>;
      };

  export type EditPostResolver =
    | ((
        parent: undefined,
        args: ArgsEditPost,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Post | Promise<Post>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsEditPost,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Post | Promise<Post>;
      };

  export type DeletePostResolver =
    | ((
        parent: undefined,
        args: ArgsDeletePost,
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => DeletionResponse | Promise<DeletionResponse>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsDeletePost,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => DeletionResponse | Promise<DeletionResponse>;
      };

  export interface Type {
    signup:
      | ((
          parent: undefined,
          args: ArgsSignup,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsSignup,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => AuthPayload | Promise<AuthPayload>;
        };

    login:
      | ((
          parent: undefined,
          args: ArgsLogin,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsLogin,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => AuthPayload | Promise<AuthPayload>;
        };

    createGroup:
      | ((
          parent: undefined,
          args: ArgsCreateGroup,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Group | Promise<Group>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsCreateGroup,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Group | Promise<Group>;
        };

    joinGroup:
      | ((
          parent: undefined,
          args: ArgsJoinGroup,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Group | Promise<Group>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsJoinGroup,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Group | Promise<Group>;
        };

    leaveGroup:
      | ((
          parent: undefined,
          args: ArgsLeaveGroup,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => DeletionResponse | Promise<DeletionResponse>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsLeaveGroup,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => DeletionResponse | Promise<DeletionResponse>;
        };

    createThread:
      | ((
          parent: undefined,
          args: ArgsCreateThread,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Thread | Promise<Thread>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsCreateThread,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Thread | Promise<Thread>;
        };

    editThread:
      | ((
          parent: undefined,
          args: ArgsEditThread,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Thread | Promise<Thread>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsEditThread,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Thread | Promise<Thread>;
        };

    deleteThread:
      | ((
          parent: undefined,
          args: ArgsDeleteThread,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => DeletionResponse | Promise<DeletionResponse>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsDeleteThread,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => DeletionResponse | Promise<DeletionResponse>;
        };

    createPost:
      | ((
          parent: undefined,
          args: ArgsCreatePost,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Post | Promise<Post>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsCreatePost,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Post | Promise<Post>;
        };

    editPost:
      | ((
          parent: undefined,
          args: ArgsEditPost,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Post | Promise<Post>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsEditPost,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Post | Promise<Post>;
        };

    deletePost:
      | ((
          parent: undefined,
          args: ArgsDeletePost,
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => DeletionResponse | Promise<DeletionResponse>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsDeletePost,
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => DeletionResponse | Promise<DeletionResponse>;
        };
  }
}

export namespace AuthPayloadResolvers {
  export const defaultResolvers = {
    token: (parent: AuthPayload) => parent.token,
    person: (parent: AuthPayload) => parent.person
  };

  export type TokenResolver =
    | ((
        parent: AuthPayload,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: AuthPayload,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type PersonResolver =
    | ((
        parent: AuthPayload,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => Person | Promise<Person>)
    | {
        fragment: string;
        resolve: (
          parent: AuthPayload,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Person | Promise<Person>;
      };

  export interface Type {
    token:
      | ((
          parent: AuthPayload,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: AuthPayload,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    person:
      | ((
          parent: AuthPayload,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => Person | Promise<Person>)
      | {
          fragment: string;
          resolve: (
            parent: AuthPayload,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => Person | Promise<Person>;
        };
  }
}

export namespace DeletionResponseResolvers {
  export const defaultResolvers = {
    id: (parent: DeletionResponse) => parent.id,
    success: (parent: DeletionResponse) => parent.success,
    message: (parent: DeletionResponse) =>
      parent.message === undefined ? null : parent.message
  };

  export type IdResolver =
    | ((
        parent: DeletionResponse,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: DeletionResponse,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type SuccessResolver =
    | ((
        parent: DeletionResponse,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => boolean | Promise<boolean>)
    | {
        fragment: string;
        resolve: (
          parent: DeletionResponse,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>;
      };

  export type MessageResolver =
    | ((
        parent: DeletionResponse,
        args: {},
        ctx: IContext,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: DeletionResponse,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export interface Type {
    id:
      | ((
          parent: DeletionResponse,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: DeletionResponse,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    success:
      | ((
          parent: DeletionResponse,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => boolean | Promise<boolean>)
      | {
          fragment: string;
          resolve: (
            parent: DeletionResponse,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => boolean | Promise<boolean>;
        };

    message:
      | ((
          parent: DeletionResponse,
          args: {},
          ctx: IContext,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: DeletionResponse,
            args: {},
            ctx: IContext,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Group: GroupResolvers.Type;
  Person: PersonResolvers.Type;
  Thread: ThreadResolvers.Type;
  Post: PostResolvers.Type;
  Mutation: MutationResolvers.Type;
  AuthPayload: AuthPayloadResolvers.Type;
  DeletionResponse: DeletionResponseResolvers.Type;
}
