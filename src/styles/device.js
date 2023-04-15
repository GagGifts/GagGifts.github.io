import { resolutions } from './resolutions';

const getMobile = forDevice => {
    return `
        only screen and ${forDevice}
    `;
};

const { forMobile, forMobileS, bigScreen, forMobileLanscape, forMobileSLanscape } = resolutions;

const device = {
    mobile: getMobile(forMobile),

    mobileS: getMobile(forMobileS),

    mobileLanscape: getMobile(forMobileLanscape),

    mobileSLanscape: getMobile(forMobileSLanscape),

    bigScreen: getMobile(bigScreen)
};

export default device;
