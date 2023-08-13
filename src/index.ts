import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the roz-thm extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'roz-thm:plugin',
  description: 'A JupyterLab theme.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension roz-thm is activated!');
    const style = 'roz-thm/index.css';

    manager.register({
      name: 'roz-thm',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
