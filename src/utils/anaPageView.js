import { analytics } from '../firebase';

export default page => analytics.setCurrentScreen(page);
