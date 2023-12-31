import { h } from 'vue';

/**
 * @license lucide-vue-next v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.298.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const createLucideIcon = (iconName, iconNode) => ({ size, strokeWidth = 2, absoluteStrokeWidth, color, class: classes, ...props }, { attrs, slots }) => {
  return h(
    "svg",
    {
      ...defaultAttributes,
      width: size || defaultAttributes.width,
      height: size || defaultAttributes.height,
      stroke: color || defaultAttributes.stroke,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      ...attrs,
      class: ["lucide", `lucide-${toKebabCase(iconName)}`],
      ...props
    },
    [
      ...iconNode.map((child) => h(...child)),
      ...slots.default ? [slots.default()] : []
    ]
  );
};

export { createLucideIcon as c };
//# sourceMappingURL=createLucideIcon-6d662694.mjs.map
