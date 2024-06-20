import { PluginSpec } from 'semantic-release';

export function resolvePluginConfig(
  plugins: PluginSpec[],
  pluginName: string,
): PluginSpec {
  // eslint-disable-next-line max-len
  const foundConfig = plugins.find((plugin) => (Array.isArray(plugin) ? plugin[0] === pluginName : plugin === pluginName));

  return foundConfig ?? pluginName;
}
