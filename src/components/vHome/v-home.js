// Reusable, composable components
import cButton from '@/components/cButton/c-button';
import cModal from '@/components/cModal/c-modal';
import cCard from '@/components/cCard/c-card';

// Split this view into multiple partials
import vHomeIntro from './partials/v-home--intro';
import vHomeWork from './partials/v-home--work';

// Modals!
// ---
// import ModalStatement from './partials/ModalStatement'
// import ModalProcess from './partials/ModalProcess'

// Hook it up!
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to House House Design, a Vue.js App',
    };
  },
  components: {
    cButton,
    cModal,
    cCard,
    vHomeIntro,
    vHomeWork,
  },
};
