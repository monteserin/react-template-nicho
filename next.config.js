const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withImages = require('next-images');

const plugins = config => withPlugins([withFonts, withImages], config);

module.exports = plugins({
    fileExtensions: ["jpg", "jpeg", "png", "gif"],  // withImages
    enableSvg: true,                                // withFonts
    webpack(config) {
        return config;
    }
});
