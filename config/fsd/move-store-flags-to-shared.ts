import fs from 'fs';

import path from 'path';

import { black, red, green, bgRed, bgGreen, lightCyan } from 'kolorist';

const ROOT = path.resolve(__dirname, '../../');

export const moveStoreFlagsToShared = () => {
  const name = 'store-flag.d.ts';

  const currentDir = '/src/app';

  const newDir = '/src/shared/types';

  const dts = path.join(ROOT, `${currentDir}/${name}`);

  fs.stat(dts, (e) => {
    if (e) return;
    fs.copyFile(dts, path.join(ROOT, `${newDir}/${name}`), (e) => {
      if (e) {
        console.log(
          `${red(' App •')} ${bgRed(black(' FSD FIX '))} ${red('•')} File ${lightCyan(
            `.${currentDir}/${name}`,
          )} was not copied (see: quasar.config.ts)`,
        );
      } else {
        console.log(
          `${green(' App •')} ${bgGreen(black(' FSD FIX '))} ${green('•')} File ${lightCyan(
            `.${currentDir}/${name}`,
          )} was copied to ${lightCyan(`.${newDir}/${name}`)})} (see: quasar.config.ts)`,
        );

        fs.unlink(dts, (e) => {
          if (e) {
            console.log(
              `${red(' App •')} ${bgRed(black(' FSD FIX '))} ${red('•')} File ${lightCyan(
                `.${currentDir}/${name}`,
              )} was deleted (see: quasar.config.ts)`,
            );
          }

          console.log(
            `${green(' App •')} ${bgGreen(black(' FSD FIX '))} ${green('•')} File ${lightCyan(
              `.${currentDir}/${name}`,
            )} was deleted (see: quasar.config.ts)`,
          );
        });
      }
    });
  });
};
