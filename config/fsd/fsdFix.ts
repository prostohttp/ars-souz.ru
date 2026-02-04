import { moveStoreFlagsToShared } from './move-store-flags-to-shared';

export const fsdFix = () => {
  /**
   * This is necessary because Quasar does not provide
   * the ability to specify the location of the - store-flag.d.ts
   * file generation in the project
   */
  moveStoreFlagsToShared();
};
