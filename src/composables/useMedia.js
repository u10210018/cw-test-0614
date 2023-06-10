import screens from '~vender/tailwindcss/screens.json';
import { useMediaQuery } from '@vueuse/core';

export const useMedia = () => {
    const screensObj = screens;
    const mediaQuerys = reactive({});
    Object.entries(screensObj).forEach(([key, value]) => {
        mediaQuerys[key] = useMediaQuery(`(min-width: ${value})`);
    });

    const mediaNums = reactive({});
    Object.entries(screensObj).forEach(([key, value]) => {
        mediaNums[key] = Number(value.split('px')[0]);
    });
    return { ...mediaQuerys, list: mediaNums };
};
