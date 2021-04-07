import Hero from "./Hero";

export default {
  title: "Hero"
};

export const Default = () => ({
  components: { Hero },
  template: `<Hero to="/" />`
});
