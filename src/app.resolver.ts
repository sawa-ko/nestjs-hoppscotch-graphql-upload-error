import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@Resolver()
export class AppResolver {
  @Query(() => Boolean)
  public test() {
    return true;
  }

  @Mutation(() => Boolean, {
    description: 'Test upload avatar.',
  })
  public async changeAvatar(
    @Args({ name: 'avatar', type: () => GraphQLUpload })
    avatar: FileUpload,
  ): Promise<boolean> {
    console.log(avatar);
    return true;
  }
}
