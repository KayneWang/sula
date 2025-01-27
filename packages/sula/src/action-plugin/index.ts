import sula from '../core';
import {
  validateFields,
  validateGroupFields,
  validateQueryFields,
  resetFields,
} from './validateFields';
import { refreshTable, resetTable } from './refreshTable';
import { modalform, drawerform, modalOk, modalCancel } from './modalform';
import { request } from './request';
import { back, forward, route } from './history';
import { ActionImpl } from '../types/plugin';

function registerActionPlugin(pluginName: string, actionPlugin: ActionImpl) {
  sula.actionType(pluginName, actionPlugin);
}

function registerActionPlugins() {
  // =============== form ================
  registerActionPlugin('validateFields', validateFields);
  registerActionPlugin('validateGroupFields', validateGroupFields);
  registerActionPlugin('validateQueryFields', validateQueryFields);
  registerActionPlugin('resetFields', resetFields);

  // ================= table ==================
  registerActionPlugin('refreshTable', refreshTable);
  registerActionPlugin('resetTable', resetTable);

  registerActionPlugin('modalform', modalform);
  registerActionPlugin('drawerform', drawerform);
  registerActionPlugin('modalOk', modalOk);
  registerActionPlugin('modalCancel', modalCancel);

  // ================= request =============
  registerActionPlugin('request', (ctx, config) => {
    return request(config, ctx);
  });

  // ================= history =================
  registerActionPlugin('back', (ctx) => {
    return back(ctx);
  });

  registerActionPlugin('forward', (ctx) => {
    return forward(ctx);
  });

  registerActionPlugin('route', (ctx, config) => {
    return route(ctx, config);
  });
}

export { request, registerActionPlugins, registerActionPlugin };
