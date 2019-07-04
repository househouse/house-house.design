<template>
  <div id="pageApproach">
    <section class="u-padding-bottom-base u-bg-blue-dark">
      <div class="c-contain">
        <h1 class="c-heading-c--1 u-margin-bottom-small u-width-3of4--medium-up u-color-white">↳ Approach</h1>
      </div>
    </section>
    <section class="u-padding-top-medium u-padding-bottom-large">
      <div class="c-contain u-flexbox--wide-up u-align-end">
        <div class="u-padding-right-medium--medium-up">
          <div class="c-text-content u-text-size-large u-baseline-large u-color-black">
            <p class="u-margin-bottom-medium">
              👋 We’re a community of freelance designers who collaborate together or contribute to projects individually. When your team has gaps and a project needs a designer, we assemble and deliver value in four areas:
              <strong
                class="u-color-blue-dark"
              >design support</strong>,
              <strong class="u-color-blue-light">strategic consulting</strong>,
              <strong class="u-color-purple-medium">tech guidance</strong>, and
              <strong class="u-color-green-medium">mentorship offerings</strong>.
            </p>
          </div>
          <div class="c-text-content u-text-size-large u-baseline-large u-color-black">
            <div class="u-flexbox u-align-start">
              <IconCheckbox class="u-flex-none u-margin-right-small u-color-green-dark" />

              <h2 class="c-heading c--3">Connect with users through story</h2>
            </div>
            <p
              class="u-text-family-secondary u-text-size-medium u-baseline-medium u-margin-bottom-base u-color-grey-dark"
            >
              Our process starts with your
              <em>story</em> — with us listening, working to unearth
              <em>who</em> is at the heart of your business. We focus on story because it’s one of our most powerful ways to understand each other; when we hear
              stories we empathize with the characters, from which we can devise utility, value, and meaning. By following the same style of character arcs and storytelling, we show you how your work, team, product, or brand can become a part
              of your users’ stories.
            </p>
            <div class="u-flexbox u-align-start">
              <IconCheckbox class="u-flex-none u-margin-right-small u-color-green-dark" />

              <h2 class="c-heading c--3">Think big but embrace adaptation</h2>
            </div>
            <p
              class="u-text-family-secondary u-text-size-medium u-baseline-medium u-margin-bottom-base u-color-grey-dark"
            >
              We take an iterative design approach to our work, meaning we communicate often, pivoting and adjusting until we get it right. This is a process; as we discover and learn more about you and your business goals, targets may sometimes
              change. By designing iteratively, we can come in with big ideas, but let your users and your goals massage and refine the idea until it’s tangible, making sure things adapt gracefully along the way.
            </p>
            <div class="u-flexbox u-align-start">
              <IconCheckbox class="u-flex-none u-margin-right-small u-color-green-dark" />
              <h2 class="c-heading c--3">Rely on what you know</h2>
            </div>
            <p
              class="u-text-family-secondary u-text-size-medium u-baseline-medium u-color-grey-dark"
            >
              We’re here to cut through the cacophony and help you design with purpose and function, not add to the noise — that doesn’t help anyone. We’ll always aim to give you inclusive and sustainable solutions that have your audience’s interests
              at their heart. To do that well, we depend on our deep skills in multiple areas of service, experience, and visual design.
            </p>
          </div>
        </div>
        <div class="u-flex-none c-text-content u-no-wrap u-margin-top-medium">
          <div class="u-text-size-medium u-baseline-medium u-clip">
            <ul class="c-pill-group c--blue-dark u-margin-bottom-base">
              <li @click="toggleModalInterface">
                🌀
                <span>Interface Design</span>
              </li>
              <li @click="toggleModalBrand">
                🌄
                <span>Brand Identity</span>
              </li>
              <li @click="toggleModalDirection">
                👉
                <span>Digital Art Direction</span>
              </li>
            </ul>
            <ul class="c-pill-group c--blue-light u-margin-bottom-base">
              <li @click="toggleModalStrategy">
                ⚡️
                <span>Experience Strategy</span>
              </li>
              <li @click="toggleModalService">
                🗺
                <span>Service Design</span>
              </li>
              <li @click="toggleModalResearch">
                🔍
                <span>UX Research</span>
              </li>
            </ul>
            <ul class="c-pill-group c--purple-light u-margin-bottom-base">
              <li @click="toggleModalFED">
                ⌨️
                <span>Front-End Development</span>
              </li>
              <li @click="toggleModalPWA">
                📱
                <span>Progressive Web Apps</span>
              </li>
              <li @click="toggleModalRWD">
                💻
                <span>Responsive Websites</span>
              </li>
            </ul>
            <ul class="c-pill-group c--green-light u-margin-bottom-small">
              <li @click="toggleModalTeambuilding">
                🤝
                <span>Team Building</span>
              </li>
              <li @click="toggleModalWorkshops">
                🎨
                <span>Workshops</span>
              </li>
              <li @click="toggleModalTraining">
                📝
                <span>Training</span>
              </li>
            </ul>
          </div>
          <div class="u-text-size-base u-baseline-small" style="clear:both;">
            <nuxt-link
              class="c-button-link c--blue c--with-icon u-text-secondary u-text-size-medium u-baseline-small"
              to="/work"
            >
              <IconConnect />See previous projects
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <SideModal
      class="c--right c--blue-dark"
      v-show="isModalInterfaceVisible"
      @close="toggleModalInterface"
    >
      <div class="u-color-white" slot="header">🌀 Interface Design</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesInterface style="max-height: 15rem;" />
        </div>
        <p
          class="u-bold"
        >Intuitive digital experiences, created with intention and based on your brand story.</p>
        <p>
          User interface design works when no one notices it's there. Getting to that place requires an iterative, design-centric approach that uses techniques blending psychology with technology. The end-user (your beloved audience) does what you want
          them to do (consensually, of course) without an awareness of the system itself.
        </p>
        <p>That invisibility and intuitiveness requires a team who takes the time to learn exactly what your brand story is, what your audience needs and then has the experience to deliver.</p>
        <p>
          Housemates know how to ask the right questions, learn your story to find out the exact steps to take, the correct digital path, and what that environment should look (and feel) like to deliver the perfect experience—the kind where no help
          desk is required.
        </p>
        <p>
          Housemates come to each project with reams of happy clients behind them. Experience borne from years of working with teams to create an invisible but super-usable boundary between users and the code running the system. Our approach is iterative;
          we learn your story as we find the best paths for your audience to take through it.
        </p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Start a UI project &rarr;</nuxt-link>
    </SideModal>
    <SideModal class="c--right c--blue-dark" v-show="isModalBrandVisible" @close="toggleModalBrand">
      <div class="u-color-white" slot="header">🌄 Brand Identity</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesBrand style="max-height: 15rem;" />
        </div>
        <p
          class="u-bold"
        >Knowing who you are and why someone needs you is at the essence of identity.</p>
        <p>
          Brand identity done well answers those questions with intention and awareness. Housemates approach the challenge of discovering your brand identity by using design thinking and story to get to the heart of why you do what you do and how you
          ought to communicate that to your lovely audience.
        </p>
        <p>Specifically, we can help you refine a logo, colour palette, typeface, and full styleguide that will communicate who you are to your audience.</p>
        <p>
          Housemates lead you through questions designed to unearth what you already know about your brand and then use our skills to communicate that vision to your audience. We then take that knowledge and translate it into a set of tangible assets
          which cohesively communicate your brand identity (who you are) to the world.
        </p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Start a design project &rarr;</nuxt-link>
    </SideModal>
    <SideModal
      class="c--right c--blue-dark"
      v-show="isModalDirectionVisible"
      @close="toggleModalDirection"
    >
      <div class="u-color-white" slot="header">👉 Digital Art Direction</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesDirection style="max-height:15rem;" />
        </div>
        <p
          class="u-bold"
        >Like a symphony conductor, an art director unifies the vision of a design production.</p>
        <p>Housemates bring clarity and definition to your project, creating the overall design by setting the tone and cadence of your workflow.</p>
        <p>A workflow that can iterate and change as needed begins by answering the what, when, and where of your project. And these answers begin when our Housemates collaborate with your existing team to uncover your vision and help you execute.</p>
        <p>We approach our work with your team by finding out upfront how you work best: inhouse, virtually, hands-on, hands-off. From there, the art direction (perhaps art facilitation) flows.</p>
        <p>We keep the focus on your vision while iterating with you in a solution-based way: You end up with a team who knows what to do when and where… and most importantly, why it makes sense.</p>
        <p>Housemates approach art direction through the lenses of story and design. We use design thinking to hack through the brambles and find the clear path you'll follow as your project unfolds.</p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Start a design project &rarr;</nuxt-link>
    </SideModal>
    <SideModal
      class="c--right c--blue-light"
      v-show="isModalStrategyVisible"
      @close="toggleModalStrategy"
    >
      <div class="u-color-white" slot="header">⚡️ Experience Strategy</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesStrategy style="max-height:15rem;" />
        </div>
        <p
          class="u-bold"
        >Applying design-thinking and solution-focused methods to your customers' experience of your product means that you care.</p>
        <p>And the result is ecstatic customers raving about your product. You may have seen it happen in the wild but how do you get that same level of joy in your own customers?</p>
        <p>When you understand that your customer is more important than your product, you'll invest in CX — customer experience. And then you'll understand the importance of creating a strategy for their experience of your product.</p>
        <p>
          Like that US senator said way back in the 1970s "You know it when you see it" In the case of Experience Strategy, if you are aware of it, most likely that's because it's either exceptionally bad or exceptionally good. Exceptionally bad can
          happen through intentional cluelessness. Exceptionally good can only happen through intentional empathy and careful strategy.
        </p>
        <p>
          Designing an experience strategy that makes your customers stop and take notice isn't intuitive. It requires the ability to step into your customer's shoes at each juncture of their journey and attempt to understand what would make their time
          with you excellent.
        </p>
        <p>Like good hosts, Housemates understand that the concept of empathy when used methodically and thoughtfully, is the foundation of a wonderful customer experience.</p>
        <p>
          We see your customers as the heroes of your product's story, with you guiding them along the way, through the twists and turns until they approach the end of their journey with you victorious...and happy in the knowledge that they were expertly
          guided each step of the way.
        </p>
        <p>Your customer experience needs the thoughtful, empathic, and strategic approach that Housemates are steeped in. Story-based, well-designed and method-focused.</p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Start a strategy project &rarr;</nuxt-link>
    </SideModal>
    <SideModal
      class="c--right c--blue-light"
      v-show="isModalResearchVisible"
      @close="toggleModalResearch"
    >
      <div class="u-color-white" slot="header">🔍 UX Research</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesResearch style="max-height:15rem;" />
        </div>
        <p
          class="u-bold"
        >Studying your user — using an interdisciplinary approach that combines design-thinking with anthropology, behavioural and social psychology — to find out what they require when interacting with your product.</p>
        <p>The end result is happy customers using your product with delight. The path to getting to that place is called UX (user experience) research.</p>
        <p>Housemates seek to understand your vision for a perfect experience of your product. We walk with you through your product journey, asking questions and guiding you as we listen and learn about what your user needs.</p>
        <p>
          We supplement this with field research, analyzing user data as well as getting to know the user in his natural habitat. The mixed methods (quantitative and qualitative) study gives insight into who your ideal user is and how best they interact
          with your product.
        </p>
        <p>We'll iterate and modify our research until we're certain that those people who most want to your product can do so effortlessly and with absolute joy.</p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Start a research project &rarr;</nuxt-link>
    </SideModal>
    <SideModal
      class="c--right c--blue-light"
      v-show="isModalServiceVisible"
      @close="toggleModalService"
    >
      <div class="u-color-white" slot="header">🗺 Service Design</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesServiceDesign style="max-height:15rem;" />
        </div>
        <p
          class="u-bold"
        >Apply product-design methodology to your service and you gain clarity to what is by nature a complicated system.</p>
        <p>
          Designing a service requires the same fundamentals of design-theory as when designing products but with added input from human behavioural studies such as ethnography and anthropology. The subtle difference between the two lies in the fact
          that human interaction is a complex system which requires another layer of understanding and knowledge for the service to deliver expected results.
        </p>
        <p>
          Because systems change as users interact with them, the design needs flexibility and a tolerance of uncertainty. This fundamental difference is often overlooked by brands—perhaps because we interact with services every day we interact with
          them in a mindless way. We fail to realize that to offer an excellent service, we need to add a mindful awareness of neuroscience and behavioural theory.
        </p>
        <p>Storyboards and other design approaches can be used combined with use-cases and service scenarios to provide a well thought out strategy to the service design.</p>
        <p>Housemates combine their design skills with their background in behavioural and social psychology to collaborate with clients, finding their unique process and then guiding them in strategic execution of services for the people who need them.</p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Start a design project &rarr;</nuxt-link>
    </SideModal>
    <SideModal class="c--right c--purple-light" v-show="isModalFEDVisible" @close="toggleModalFED">
      <div class="u-color-white" slot="header">⌨️ Front-End Dev</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesFED style="max-height:15rem;" />
        </div>
        <p
          class="u-bold"
        >Turning design into an application or website (or any digital entity) using HTML, CSS, and JavaScript.</p>
        <p>
          The front-end of a website takes the combined logic and problem-solving skills of a designer and combines them with programming knowledge to create apps and websites that are lovely to look at while also being performant for your users on
          any machine.
        </p>
        <p>
          Housemates approach front end development by applying design principles to their code. We navigate between drawing with pencil and paper or digitally and the programming languages that best serve the product we're building. That means we're
          always learning, adding the next best way to accomplish what the product needs while remaining rooted in design-thinking.
        </p>
        <p>This process requires us to be designers who excel at solving problems in the most efficient, elegant way, always thinking of performance while at the same time ensuring that the design looks and feels lovely to the humans who will use it.</p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Start a web or app project &rarr;</nuxt-link>
    </SideModal>
    <SideModal class="c--right c--purple-light" v-show="isModalPWAVisible" @close="toggleModalPWA">
      <div class="u-color-white" slot="header">📱 Progressive Web Apps</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesPWA style="max-height:15rem;" />
        </div>
        <p
          class="u-bold"
        >Creating apps for all users, no matter their connectivity or machine quality — and in a browser. With a progressive web app, a user can access the app anywhere, on any device and even off-line.</p>
        <p>
          Progressive web apps combine the rich experiences and high performance of native apps with the real-time updates, search-engine visibility and responsivity of a browser based web app. They can be a perfect solution for brands who have considered
          creating a native app but need the benefits of a web-based product.
        </p>
        <p>
          As in everything we do, Housemates approach progressive web apps with a solution-focus. How does this PWA solve a problem four our client? Where does the PWA fit into the spectrum of the client's story arc? What is the best vision for this
          PWA, given all we have learned about our client and their needs?
        </p>
        <p>Given these parameters, Housemates then create a PWA that functions within the style and needs of the client. The end result is performant and useful online and offline and on any device.</p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Start a PWA project &rarr;</nuxt-link>
    </SideModal>
    <SideModal class="c--right c--purple-light" v-show="isModalRWDVisible" @close="toggleModalRWD">
      <div class="u-color-white" slot="header">💻 Responsive Websites</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesRWD style="max-height:15rem;" />
        </div>
        <p class="u-bold">
          Web sites that adapt to where your end-user discovers them — from the largest television screens to the smallest devices. Responsivity is foundational for all our web site design and development. In tandem with our design-based focus and systems-thinking,
          all sites we create for our clients look great wherever they are found.
        </p>
        <p>Because Housemates approach all our work from a solution focus, responsive web site design and development is where we begin and end.</p>
        <p>
          Our websites express our brand identity and as such, they need to flexibly fit to any device an end-user might find them on. This ethos means Housemates never stop learning web design and development—always staying at the edge of the best
          in web site design and development.
        </p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Start a responsive web project &rarr;</nuxt-link>
    </SideModal>
    <SideModal
      class="c--right c--green-light"
      v-show="isModalTeambuildingVisible"
      @close="toggleModalTeambuilding"
    >
      <div class="u-color-white" slot="header">🤝 Team Building</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesTeamBuilding style="max-height:15rem;" />
        </div>
        <p
          class="u-bold"
        >For any group tasked with collaborating to create a product or service (or several), working together as a team can always benefit from added support with trained facilitators.</p>
        <p>Investing in building and refining your team so that you end up with a more efficient, more productive system means that you all work together—whatever that means for your team.</p>
        <p>
          Housemates approach team building from a design-ethos: systems-based, rational and solution-focused. We learn who you are, what you need to be at your best, and then guide you through exercises that produce happy, authentically-aware and creative
          teammates who approach their work together with foundational mindfulness.
        </p>
        <p>Yes, enhanced workflows happen. Yes, you become more productive and burnout lessens. An added benefit? You all have more fun together and actually enjoy the process of being creative together.</p>
        <p>
          Housemates take team building very seriously; so seriously that we integrate play-based work principles into our team building sessions and — so much so that we have taken time to study human behaviour and learn how teams work (and play) well
          together.
        </p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Schedule activities &rarr;</nuxt-link>
    </SideModal>
    <SideModal
      class="c--right c--green-light"
      v-show="isModalWorkshopsVisible"
      @close="toggleModalWorkshops"
    >
      <div class="u-color-white" slot="header">🎨 Workshops</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesWorkshops style="max-height:15rem;" />
        </div>
        <p
          class="u-bold"
        >House House believes that intentional design translates across platforms: digital, irl, wherever.</p>
        <p>Learning how to work with intention, in a way that is solutions-focused and well-designed, equals enhanced performance, enhanced efficiency, and enhanced collaboration.</p>
        <p>Changemaking ensues.</p>
        <p>Housemates meet you where you are: inhouse or virtually, to lead your team through strategies designed to increase consensus, build trust and awareness within your group, and ultimately bring an authentic "hive-mind" to the group.</p>
        <p>Training in design-thinking, mindfulness, and practical approaches to behavioural change results in facilitation that works. And it's fun, too.</p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Schedule a workshop &rarr;</nuxt-link>
    </SideModal>
    <SideModal
      class="c--right c--green-light"
      v-show="isModalTrainingVisible"
      @close="toggleModalTraining"
    >
      <div class="u-color-white" slot="header">📝 Training</div>
      <div class="c-text-content" slot="body">
        <div class="u-text-align-center">
          <ServicesTraining style="max-height:15rem;" />
        </div>
        <p
          class="u-bold"
        >Sometimes, a learning boost is just what your team needs to get to the next level and produce award-winning and profit-creating products. Or whatever your brand does during working hours.</p>
        <p>House House facilitators will come to your site and provide your team with what they need to improve efficiency, productivity and effectiveness in design, development, strategy or storytelling.</p>
        <p>
          By listening closely to your needs, Housemates can assemble a team who can deliver the knowledge your team needs quickly and painlessly. We'll discuss desired outcomes with you, create a working vision for what you want to happen, and then
          we'll deliver that to you. Should your needs change as we work together, we can iterate and pivot to deliver what you need.
        </p>
      </div>
      <nuxt-link
        class="c-button-block c--small u-bg-orange-dark u-color-white"
        to="/contact"
        slot="footer"
      >Start a training project &rarr;</nuxt-link>
    </SideModal>
  </div>
</template>
<script>
import SideModal from '../components/SideModal';

import IconCheckbox from '../assets/img/icons/icon-checkbox.svg';
import IconConnect from '../assets/img/icons/icon-connect.svg';
import ServicesBrand from '../assets/img/services--brand.svg';
import ServicesDirection from '../assets/img/services--direction.svg';
import ServicesFED from '../assets/img/services--FED.svg';
import ServicesInterface from '../assets/img/services--interface.svg';
import ServicesPWA from '../assets/img/services--PWA.svg';
import ServicesRWD from '../assets/img/services--RWD.svg';
import ServicesResearch from '../assets/img/services--research.svg';
import ServicesServiceDesign from '../assets/img/services--servicedesign.svg';
import ServicesStrategy from '../assets/img/services--strategy.svg';
import ServicesTeamBuilding from '../assets/img/services--teambuilding.svg';
import ServicesTraining from '../assets/img/services--training.svg';
import ServicesWorkshops from '../assets/img/services--workshops.svg';


export default {
   name: 'Approach',
  metaInfo: {
    title: 'Approach • House House',
  },
  components: {
    SideModal,
    IconCheckbox,
    IconConnect,
    ServicesBrand,
    ServicesDirection,
    ServicesFED,
    ServicesInterface,
    ServicesPWA,
    ServicesResearch,
    ServicesServiceDesign,
    ServicesStrategy,
    ServicesTeamBuilding,
    ServicesTraining,
    ServicesWorkshops
  },
  data() {
    return {
      isModalInterfaceVisible: false,
      isModalBrandVisible: false,
      isModalDirectionVisible: false,
      isModalStrategyVisible: false,
      isModalResearchVisible: false,
      isModalServiceVisible: false,
      isModalFEDVisible: false,
      isModalPWAVisible: false,
      isModalRWDVisible: false,
      isModalTeambuildingVisible: false,
      isModalWorkshopsVisible: false,
      isModalTrainingVisible: false,
    };
  },
  methods: {
    toggleModalInterface() {
      this.isModalInterfaceVisible = !this.isModalInterfaceVisible;
    },
    toggleModalBrand() {
      this.isModalBrandVisible = !this.isModalBrandVisible;
    },
    toggleModalDirection() {
      this.isModalDirectionVisible = !this.isModalDirectionVisible;
    },
    toggleModalStrategy() {
      this.isModalStrategyVisible = !this.isModalStrategyVisible;
    },
    toggleModalResearch() {
      this.isModalResearchVisible = !this.isModalResearchVisible;
    },
    toggleModalService() {
      this.isModalServiceVisible = !this.isModalServiceVisible;
    },
    toggleModalFED() {
      this.isModalFEDVisible = !this.isModalFEDVisible;
    },
    toggleModalPWA() {
      this.isModalPWAVisible = !this.isModalPWAVisible;
    },
    toggleModalRWD() {
      this.isModalRWDVisible = !this.isModalRWDVisible;
    },
    toggleModalTeambuilding() {
      this.isModalTeambuildingVisible = !this.isModalTeambuildingVisible;
    },
    toggleModalWorkshops() {
      this.isModalWorkshopsVisible = !this.isModalWorkshopsVisible;
    },
    toggleModalTraining() {
      this.isModalTrainingVisible = !this.isModalTrainingVisible;
    },
  },
};
</script>
<style lang="scss" scoped>
#pageApproach {
  .c-pill-group {
    li span {
      text-decoration: underline;
      text-decoration-color: rgba(0, 0, 0, 0.15);
      &:hover {
        cursor: pointer;
        color: var(--black);
        text-decoration-color: var(--orange-dark);
      }
    }
  }
}
</style>
