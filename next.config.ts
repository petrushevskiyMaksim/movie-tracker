import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    turbopack: {
        rules: {
            '*.svg': {
                loaders: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgo: true,
                            svgoConfig: {
                                plugins: [
                                    {
                                        name: 'preset-default',
                                        params: {
                                            overrides: {
                                                removeViewBox: false, // сохраняем viewBox
                                                removeDimensions: true, // УДАЛЯЕМ width/height!
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ],
                as: '*.js',
            },
        },
    },
};

export default nextConfig;
