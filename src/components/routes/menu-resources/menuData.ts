type Data = {
  categories: Category;
};

type Category = {
  [key: string]: Array<Item>;
};

type Item = {
  name: string;
  description: string;
  price: number;
};

export const data: Data = {
  categories: {
    bread: [
      {
        name: "Brioche Roll",
        description:
          "Our rich, buttery brioche rolls are the perfect compliment to any meal or snack.",
        price: 1.99,
      },
      {
        name: "Ciabatta Loaf",
        description:
          "Our ciabatta loaves are known for their exquisitely soft interior. A perfect match for your sandwiches, these loaves can be purchased pre-sliced.",
        price: 7.99,
      },
      {
        name: "Focaccia Loaf",
        description:
          "A fan-favorite of ours, this chewy bread can be ordered with or without olives.",
        price: 8.99,
      },
      {
        name: "French Baguette",
        description:
          "Our soft, airy french loaves make a great side to your soup nights. We recommend trying them as a breakfast snack with jam as well!",
        price: 5.99,
      },
      {
        name: "Jalapeño Cheddar Loaf",
        description:
          "Baked with only the freshest jalapeños, this bread will spice up any grilled cheese or panini!",
        price: 7.99,
      },
      {
        name: "Sourdough Loaf",
        description:
          "Our classic sourdough recipe is beloved locally as a side dish and in any french toast recipe.",
        price: 6.99,
      },
    ],

    bagels: [
      {
        name: "Plain Bagel",
        description:
          "A staple of any on-the-go breakfast, our plain bagels are sure to make your meal special.",
        price: 1.99,
      },
      {
        name: "Blueberry Bagel",
        description:
          "We make our blueberry bagels with fresh whole blueberries, with no added preservatives!",
        price: 1.99,
      },
      {
        name: "Everything Bagel",
        description:
          "Garlic, onion, poppy and sesame seeds garnish our in-house specialty everything bagels.",
        price: 1.99,
      },
      {
        name: "Jalapeño Cheddar Bagel",
        description:
          "Made with fresh jalapeños and local cheese sourced from Tillamook.",
        price: 2.49,
      },
      {
        name: "Onion Bagel",
        description: "A delicate bagel baked with locally grown onions.",
        price: 1.99,
      },
    ],

    pastries: [
      {
        name: "Bearclaw",
        description:
          "Baked with a heaping helping of cinnamon and local walnuts.",
        price: 3.99,
      },
      {
        name: "Croissant",
        description:
          "A soft, buttery dough. Our croissants are guaranteed to melt in your mouth!",
        price: 1.99,
      },
      {
        name: "Danish",
        description:
          "A sweet treat, our flaky pastry dough is filled with your choice of raspberry, blueberry, cherry, or cream cheese.",
        price: 2.99,
      },
      {
        name: "Strudel",
        description:
          "A flaky spinach and mushroom strudel rolls, perfect for appetizers or midday snacks.",
        price: 4.99,
      },
    ],

    cookies: [
      {
        name: "Chocolate Chip Cookie",
        description:
          "A classic, giant cookie loaded with gooey semi-sweet chocolate chips.",
        price: 1.99,
      },
      {
        name: "Sugar Cookie",
        description: "A simple sweet, guaranteed to tickle your tastebuds.",
        price: 1.99,
      },
      {
        name: "Chocolate Cherry Cookie",
        description:
          "Made with semi-sweet chocolate chips and local cherry juice.",
        price: 2.49,
      },
      {
        name: "Oatmeal Raisin Cookie",
        description:
          "Susanne's favorite recipe, these delights are made with in-house dried grapes and local oats.",
        price: 2.49,
      },
      {
        name: "Gingersnap Cookie",
        description: "A spicy cinnamon cookie, perfect for a winter treat.",
        price: 1.99,
      },
    ],
  },
};
