import { SystemState } from '../storeTypes';

export const getTutorialState = (state: SystemState) =>
    state.tutorials.tutorials;