/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { SuccessStories } from "./SuccessStories";

const stories = [
  {
    title: "Thad Fay",
    description:
      "Id aut rerum dignissimos ducimus. Temporibus enim aut qui est quo. Quia repellat perspiciatis et voluptas placeat soluta. Perferendis blanditiis ut veniam et.",
  },
  {
    title: "Jaydon Nigel",
    description:
      "Dolore harum nesciunt ab dolor quasi. Vero in facilis ratione.",
  },
  {
    title: "Valentina Kutch",
    description:
      "Explicabo quo quaerat quos. Ut perferendis nihil nam molestiae odio nostrum.",
  },
  {
    title: "Rhoda Price",
    description:
      "Optio atque cum id maxime non quia ipsum officia sed. Et molestiae recusandae sint aut quae velit dolorum. Id quos quisquam quis ut voluptatem in quae sunt quidem. Iste illo accusantium qui delectus magni iusto quos dicta sunt. Hic et accusamus at ipsa minima corporis et minus in.",
  },
  {
    title: "Verner Howe",
    description:
      "Cumque voluptatibus excepturi dolore quam exercitationem beatae temporibus pariatur. Quia et in error quo ducimus.",
  },
  {
    title: "Jonas Lang",
    description:
      "Et non autem. Nulla maxime sit esse animi consequuntur accusantium nostrum. Quo et aut. Est ut placeat quis illum aut omnis ullam quisquam. Sit quam repudiandae eius voluptas. Quam quia quidem ut tempore architecto.",
  },
  {
    title: "Maybell Murphy",
    description:
      "Officia porro rem labore alias. Eum et laborum rerum hic occaecati. Quam consequatur et vel eos et sed quae sit unde. Quos porro fugit in odio autem nesciunt omnis. Sint quia quos dolorem eum et dolores tempora similique aliquam.",
  },
  {
    title: "Leola Ebert",
    description:
      "Nulla aspernatur sapiente voluptatum saepe dolores qui et magnam. Enim sit eveniet autem id at et id labore. Repudiandae doloremque deleniti maiores voluptatem distinctio nesciunt sint ipsa facilis. Nesciunt voluptas mollitia eum soluta aut facilis consequatur. Aut aut et voluptates voluptatem vero.",
  },
];
storiesOf("SuccessStories", module)
  .add("default (primary)", () => (
    <SuccessStories stories={stories} smallView />
  ))
  .add("No stories", () => <SuccessStories />)
  .add("Large view", () => <SuccessStories stories={stories} />);
