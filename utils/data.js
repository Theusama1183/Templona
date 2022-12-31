import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Usama",
      email: "usamaadeel1183@gmail.com",
      password: bcrypt.hashSync("usama12345"),
      isAdmin: true,
    },
    {
      name: "Adeel",
      email: "usamaadeel83@gmail.com",
      password: bcrypt.hashSync("usama12345"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Apple Smart I",
      slug: "apple-smart-1",
      category: "Watches",
      image: "/images/apple-smart-1.png",
      price: "450.00",
      salePrice: "255.00",
      brand: "Apple",
      rating: "4.5",
      numReviews: "8",
      countInStock: "20",
      description:
        "Apple Smart I Series 8 A healthy leap ahead. Apple Watch Series 8 hardware with globe watchface Your essential companion is now even more powerful. Introducing temperature sensing for deeper insights into women’s health. Crash Detection to get help in an emergency.2 Sleep stages to better understand your sleep. And new ways to train using the enhanced Workout app. The future of health never looked so good.",
    },
    {
      name: "Apple Smart 2",
      slug: "apple-smart-2",
      category: "Watches",
      image: "/images/apple-smart-2.png",
      price: "305.00",
      salePrice: "255.00",
      brand: "Apple",
      rating: "4.3",
      numReviews: "4",
      countInStock: "10",
      description:
        "Apple Smart II Series 8 A healthy leap ahead. Apple Watch Series 8 hardware with globe watchface Your essential companion is now even more powerful. Introducing temperature sensing for deeper insights into women’s health. Crash Detection to get help in an emergency.2 Sleep stages to better understand your sleep. And new ways to train using the enhanced Workout app. The future of health never looked so good.",
    },
    {
      name: "Apple Smart 3",
      slug: "apple-smart-3",
      category: "Watches",
      image: "/images/apple-smart-3.png",
      price: "545.00",
      salePrice: "380.00",
      brand: "Apple",
      rating: "4.5",
      numReviews: "12",
      countInStock: "22",
      description:
        "Apple Watch III Series 8 A healthy leap ahead. Apple Watch Series 8 hardware with globe watchface Your essential companion is now even more powerful. Introducing temperature sensing for deeper insights into women’s health. Crash Detection to get help in an emergency.2 Sleep stages to better understand your sleep. And new ways to train using the enhanced Workout app. The future of health never looked so good.",
    },
    {
      name: "Apple Smart 4",
      slug: "apple-smart-4",
      category: "Watches",
      image: "/images/apple-smart-4.png",
      price: "475.00",
      salePrice: "275.00",
      brand: "Apple",
      rating: "4.2",
      numReviews: "5",
      countInStock: "0",
      description:
        "Apple Watch 4 Series 8 A healthy leap ahead. Apple Watch Series 8 hardware with globe watchface Your essential companion is now even more powerful. Introducing temperature sensing for deeper insights into women’s health. Crash Detection to get help in an emergency.2 Sleep stages to better understand your sleep. And new ways to train using the enhanced Workout app. The future of health never looked so good.",
    },
    {
      name: "Apple Smart 5",
      slug: "apple-smart-5",
      category: "Watches",
      image: "/images/apple-smart-5.png",
      price: "355.00",
      salePrice: "255.00",
      brand: "Apple",
      rating: "4.6",
      numReviews: "5",
      countInStock: "50",
      description:
        "Apple Watch 5 Series 8 A healthy leap ahead. Apple Watch Series 8 hardware with globe watchface Your essential companion is now even more powerful. Introducing temperature sensing for deeper insights into women’s health. Crash Detection to get help in an emergency.2 Sleep stages to better understand your sleep. And new ways to train using the enhanced Workout app. The future of health never looked so good.",
    },
    {
      name: "Apple Smart 6",
      slug: "apple-smart-6",
      category: "Watches",
      image: "/images/apple-smart-6.png",
      price: "715.00",
      salePrice: "515.00",
      brand: "Apple",
      rating: "4.5",
      numReviews: "84",
      countInStock: "0",
      description:
        "Apple Watch 6 Series 8 A healthy leap ahead. Apple Watch Series 8 hardware with globe watchface Your essential companion is now even more powerful. Introducing temperature sensing for deeper insights into women’s health. Crash Detection to get help in an emergency.2 Sleep stages to better understand your sleep. And new ways to train using the enhanced Workout app. The future of health never looked so good.",
    },
  ],
};

export default data;
