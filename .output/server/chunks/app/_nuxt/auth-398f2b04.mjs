import { f as defineNuxtRouteMiddleware } from '../server.mjs';
import 'vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware((to, from) => {
});

export { auth as default };
//# sourceMappingURL=auth-398f2b04.mjs.map
