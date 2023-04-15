const size = {
	mobile: '600px',
	mobileS: '330px',
	mobileLanscape: '1200px',
	mobileSLanscape: '600px',
	standardHeight: '640px',
	bigScreen: '1800px',
};

const {
	mobile,
	mobileS,
	standardHeight,
	bigScreen,
	mobileLanscape,
	mobileSLanscape,
} = size;

export const resolutions = {
	forMobile: `(max-width: ${mobile})`,
	forMobileS: `(max-width: ${mobileS}) and (max-height: ${standardHeight})`,
	forMobileLanscape: `(max-width: ${mobileLanscape}) and (orientation: landscape)`,
	forMobileSLanscape: `(max-width: ${mobileSLanscape}) and (orientation: landscape)`,
	bigScreen: `(min-width: ${bigScreen})`,
};
