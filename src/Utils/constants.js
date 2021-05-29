import { range } from './helper';

export const AXES_CONFIG = {
    effectiveTemperature: {
        start: 10500,
        end: 20,
        total: 85,
        step: 1 //200
    },
    surfaceGravity: {
        start: 1,
        end: 5,
        total: 20,
        step: 0.2
    },
    microturbulance: {
        start: 0,
        end: 4,
        step: 1,
        total: 5
    },
    inclination: {
        start: 5,
        end: 90,
        step: 5,
        total: 10
    }
};

export const TEFF_LOG_GRID = {
    title: 'Teff/Log g',
    yaxis: {
        label: 'log g [cgs]',
        stepper: AXES_CONFIG.surfaceGravity.step
    },
    xaxis: {
        label: 'Teff [K]',
        stepper: AXES_CONFIG.effectiveTemperature.step
    }

};

export const TEFF_TURB_GRID = {
    title: 'Teff/Vturb',
    yaxis: {
        label: 'log g [cgs]',
        stepper: AXES_CONFIG.surfaceGravity.step
    },
    xaxis: {
        label: 'Vturb',
        stepper: AXES_CONFIG.microturbulance.step
    }
};

export const effectiveTemperatureAxes = range(AXES_CONFIG.effectiveTemperature, false);
export const surfaceGravityAxes = range(AXES_CONFIG.surfaceGravity);
export const microturbulanceAxes = range(AXES_CONFIG.microturbulance);