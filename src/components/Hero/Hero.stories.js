import Hero from "./Hero";
import "../../assets/tailwind.css";

export default {
  title: "Hero"
};

export const Default = () => ({
  components: { Hero },
  template: `<Hero to="/" />`
});