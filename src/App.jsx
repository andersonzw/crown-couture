const App = () => {
  const categories = [
    {
      title: "Hats",
      src: "",
      id: "1",
    },
    {
      title: "Jackets",
      src: "",
      id: "2",
    },
    {
      title: "Sneakers",
      src: "",
      id: "3",
    },
    {
      title: "Womens",
      src: "",
      id: "4",
    },
    {
      title: "Mens",
      src: "",
      id: "5",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div className="category-container">
            <div className="background-image" />
            <img src={category.src} alt='' />
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
